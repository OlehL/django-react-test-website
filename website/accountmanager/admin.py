from django.contrib import admin

from .models import User, Group, Membership

admin.site.register(Group)
admin.site.register(User)
admin.site.register(Membership)