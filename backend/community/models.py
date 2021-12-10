from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from PIL import Image

# Create your models here.


class Post(models.Model):
    content = models.CharField(max_length=1000, blank=False)
    image = models.ImageField(upload_to='post_images',
                              blank=True, default='default.jpg')
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.ManyToManyField(User, related_name='likes')
    comments = models.ManyToManyField(
        User, related_name='comments', through='Post_Comment')

    def __str__(self):
        return f'{self.author.username} post'


class Post_Comment(models.Model):
    commenter = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.CharField(max_length=500, blank=False)

    def __str__(self):
        return f'{self.commenter.username} comment'
