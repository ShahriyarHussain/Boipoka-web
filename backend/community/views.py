# from django.shortcuts import render
# from users.models import Profile
from .serializers import PostSerializer
from .models import Post
from rest_framework import viewsets
# Create your views here.


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
