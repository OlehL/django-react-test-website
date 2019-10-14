from rest_framework import generics, viewsets
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User


class UserAPI(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
        })


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        print(self.request)
        return self.request.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request)