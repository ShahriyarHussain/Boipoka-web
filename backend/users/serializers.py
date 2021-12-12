from django.db.models import fields
from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import *


class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'user',
            'phone',
            'image',
            'days_logged_in',
            'favorite_genre'
        ]
