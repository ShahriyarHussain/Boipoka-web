from django.contrib import admin

from .models import Author, Book, Listing, Listing_Comments, Listing_Images, Trade

# Register your models here.
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Trade)
admin.site.register(Listing)
admin.site.register(Listing_Images)
admin.site.register(Listing_Comments)
