# from django.shortcuts import render
# from users.models import Profile
from django.db.models import query
from .serializers import PostSerializer
from .models import Post
# from rest_framework import viewsets
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.


class PostListCreateAPIView(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class PostDetailsAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
