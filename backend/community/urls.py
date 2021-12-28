from django.urls import path

from .views import *

urlpatterns = [
    path('posts/', PostListCreateAPIView.as_view(), name="api-post-list"),
    path('posts/<uuid:pk>/', PostDetailsAPIView.as_view(),
         name='api-post-details'),
]
