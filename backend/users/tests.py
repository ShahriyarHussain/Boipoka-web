from django.contrib.auth.models import User
from django.test import TestCase
from .models import Profile, Messages, Reviews, Reports

# Create your tests here.


class UserTestCase(TestCase):
    def test_user(self):
        self.assertEquals(
            User.objects.count(),
            0
        )


class ProfileTestCase(TestCase):
    def test_user(self):
        self.assertEquals(
            Profile.objects.count(),
            0
        )


class ReportsTestCase(TestCase):
    def test_user(self):
        self.assertEquals(
            Reports.objects.count(),
            0
        )


class MessagesTestCase(TestCase):
    def test_user(self):
        self.assertEquals(
            Messages.objects.count(),
            0
        )


class ReviewsTestCase(TestCase):
    def test_user(self):
        self.assertEquals(
            Reviews.objects.count(),
            0
        )
