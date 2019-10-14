from django.db import models
from django.shortcuts import reverse


class Group(models.Model):
    name = models.CharField(max_length=128, unique=True)
    description = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.name


class User(models.Model):
    name = models.CharField(max_length=150, unique=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    group = models.ForeignKey(Group, on_delete=models.PROTECT)
    date_joined = models.DateField(auto_now_add=True)
