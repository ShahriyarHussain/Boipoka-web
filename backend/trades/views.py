# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializer, ListingSerializer
from .models import Listing, Book
# Create your views here.


class ListingView(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    queryset = Listing.objects.all()


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
