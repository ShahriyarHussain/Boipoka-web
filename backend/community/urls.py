from django.urls import path
from django.urls.conf import include

from .views import *
from rest_framework import routers

post_router = routers.SimpleRouter()
post_router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(post_router.urls)),
]
