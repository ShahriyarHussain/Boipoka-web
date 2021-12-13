from .serializers import UserSerializer, ProfileSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Profile
# Create your views here.


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
