"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.db import router
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls.conf import include
from rest_framework import routers
from users import views as userviews
from community import views as postviews

userRouter = routers.DefaultRouter()
profileRouter = routers.DefaultRouter()
postRouter = routers.DefaultRouter()
userRouter.register(r'users', userviews.UserView, 'user')
profileRouter.register(r'profiles', userviews.ProfileView, 'user')
postRouter.register(r'posts', postviews.PostView, 'post')
# profileRouter = routers.DefaultRouter()


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(userRouter.urls)),
    path('api/', include(profileRouter.urls)),
    path('api/', include(postRouter.urls)),
    # path('api/', include(profileRouter)),
]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)
