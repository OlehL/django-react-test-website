from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Group
from .models import Membership
from .models import User
from .serializers import GroupSerializer
from .serializers import UserSerializer


class UsersViews(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response({"users": serializer.data})

    def post(self, request):
        user = request.data.get('user')
        serializer = UserSerializer(data=user)
        if serializer.is_valid(raise_exception=True):
            user_saved = serializer.save()
        return Response(
            {"success": "User '{}' created successfully"
                .format(user_saved.title)
             })

    def put(self, request, pk):
        saved_user = generics.get_object_or_404(User.objects.all(), pk=pk)
        data = request.data.get('user')
        serializer = UserSerializer(instance=saved_user, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            user_saved = serializer.save()
        return Response({
            "success": "User '{}' updated successfully".format(user_saved.title)
        })

    def delete(self, request, pk):
        user = generics.get_object_or_404(User.objects.all(), pk=pk)
        user.delete()
        return Response({
            "message": "User with id `{}` has been deleted.".format(pk)
            }, status=204)


class GroupsView(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def perform_create(self, serializer):
        user = generics.get_object_or_404(Membership, id=self.request.data.get('user'))
        return serializer.save(author=author)


class SingleGroupView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
