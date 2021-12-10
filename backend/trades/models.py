from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from PIL import Image

# Create your models here.

genres = [
    (1, 'Fantasy'),
    (2, 'Sci-Fi'),
    (3, 'Action & Adventure'),
    (4, 'Mystery'),
    (5, 'Horror'),
    (6, 'Thriller'),
    (7, 'Romance'),
    (8, 'Biography'),
    (9, 'Science & Technology'),
    (10, 'Humor'),
    (11, 'History'),
    (12, 'Children'),
    (13, 'Travel'),
]

negotiable_choices = [
    (True, 'Yes'),
    (False, 'No')
]

listing_choices = [
    (True, 'Sell'),
    (False, 'Exchange')
]

condition_choices = [
    (1, 'Excellent'),
    (2, 'Fair'),
    (3, 'Acceptable'),
    (4, 'Well Worn'),
    (5, 'Poor'),
]


class Author(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Book(models.Model):
    title = models.CharField(max_length=200, blank=False)
    isbn = models.CharField(unique=True, blank=False, max_length=100)
    genres = models.IntegerField(choices=genres)
    pages = models.IntegerField(blank=True, null=True)
    edition = models.IntegerField(blank=True, null=True)
    author = models.ManyToManyField(Author)
    image = models.ImageField(upload_to='book_covers',
                              blank=True, default='default.png')

    def __str__(self):
        return f'{self.title}'

    # def save(self):
    #     super().save


class Listing(models.Model):
    descriptions = models.CharField(max_length=1000, blank=True)
    price = models.IntegerField(blank=False)
    condition = models.IntegerField(choices=condition_choices, blank=False)
    negotiable = models.BooleanField(
        blank=False, choices=negotiable_choices, null=True)
    listing_type = models.BooleanField(
        blank=False, choices=listing_choices)
    date = models.DateTimeField(default=timezone.now)
    book = models.ForeignKey(
        Book, on_delete=models.CASCADE, related_name='listed_book')
    options = models.ManyToManyField(
        Book, related_name='suggested_books', null=True)
    listed_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='adds_listing')
    wishlisted_by = models.ManyToManyField(
        User, related_name='wishlists', null=True)
    viewed_by = models.ManyToManyField(User, related_name='views', null=True)
    trades = models.ManyToManyField(
        User, related_name='trades', through='Trade')

    if listing_type:
        options = None
    else:
        negotiable = None
        price = -1

    def __str__(self):
        return f'{self.listed_by}\'s listing'

    # def save(self, *args, **kwargs):
    #     super().save


class Listing_Images(models.Model):
    listing = models.ForeignKey(
        Listing, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='listing_images', blank=True, default='default.png')

    def __str__(self):
        return f'{self.listing.title}\'s image'


class Trade(models.Model):
    tradee = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='tradee')
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    time = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.listing.book.title}|{self.tradee}-{self.listing.listed_by}'


class Listing_Comments(models.Model):
    commenter = models.ForeignKey(User, on_delete=models.CASCADE)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    comment_date = models.DateTimeField(default=timezone.now)
    content = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.commenter}\'s comment on {self.listing.listed_by.username}\'s listing'
