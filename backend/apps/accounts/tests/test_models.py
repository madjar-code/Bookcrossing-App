from datetime import datetime
from django.test import TestCase
from accounts.models import User


class TestUserModel(TestCase):
    def setUp(self):
        self.user1 = User.objects.create_user(
            username='user1',
            password='12345',
            email='user1@user1.com'
        )
        self.superuser1 = User.objects.create_superuser(
            username='superuser1',
            password='12345',
            email='superuser1@superuser1.com'
        )
        
    def test_user_model(self):
        user = self.user1
        query = User.objects.filter(username='user1').first()

        self.assertIsInstance(user, User)
        self.assertEqual(query, user)

    def test_user_status(self):
        user = self.user1
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)

    def test_user_model_as_superuser(self):
        superuser = self.superuser1
        self.assertIsInstance(superuser, User)

    def test_superuser_status(self):
        superuser = self.superuser1
        self.assertTrue(superuser.is_active)
        self.assertTrue(superuser.is_staff)

    def test_str_return(self):
        user, superuser = self.user1, self.superuser1
        self.assertEqual(str(user), 'user1')
        self.assertEqual(str(superuser), 'superuser1')
    
    def test_token_return(self):
        tokens = self.user1.tokens()
        self.assertIn('access', tokens)
        self.assertIn('refresh', tokens)

    def test_datetime(self):
        user = self.user1
        self.assertIsInstance(user.created_at, datetime)
        self.assertIsInstance(user.updated_at, datetime)
