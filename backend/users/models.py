from enum import unique
from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from mapbox_location_field.models import LocationField
from django_resized import ResizedImageField
# from django.core.validators import RegexValidator

default_map_attrs = {
    "style": "mapbox://styles/mapbox/outdoors-v11",

    "cursor_style": 'pointer',
    "marker_color": "red",
    "rotate": False,
    "geocoder": True,
    "fullscreen_button": True,
    "navigation_buttons": True,
    "track_location_button": True,
    "readonly": True,
    "placeholder": "Pick a location on map below",
    "language": "auto",
    "message_404": "undefined address", }

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=11, null=False,
                             blank=False, unique=True)
    image = ResizedImageField(
        size=[300, 300], upload_to='profile_images', blank=True, default='default.jpg')
    days_logged_id = models.IntegerField(default=0, null=False)
    favorite_genre = models.CharField(max_length=15)
    location = LocationField(map_attrs={"zoom": 13, "center": [
                             23.78080079103708, 90.4077459260738]})

    def __str__(self) -> str:
        return f'{self.user.username}\'s Profile'

    def save(self, *args, **kwargs):
        super().save()
