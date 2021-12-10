from django.contrib import admin
from .models import Messages, Profile, Reports, Reviews

# Register your models here.
admin.site.register(Profile)
admin.site.register(Reports)
admin.site.register(Reviews)
admin.site.register(Messages)
