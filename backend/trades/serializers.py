from typing import List
from rest_framework import serializers
from rest_framework.utils import representation
from .models import Listing, Book
from urllib.request import urlopen


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['title'] = instance.book.title
        representation['author'] = instance.book.author.name
        representation['views'] = instance.viewed_by.count()
        representation['wishlists'] = instance.wishlisted_by.count()
        # if (instance.book.image is not None):
        #     representation['image'] = (instance.book.image)

        return representation


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
