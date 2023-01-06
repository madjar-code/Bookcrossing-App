import json
from django.test import TestCase
from accounts.models import User


test_user = {
    'email': 'admin@admin.com',
    'username': 'admin',
    'password': 'testpassword',
}


class UserTest(TestCase):
    def setUp(self):
        self.new_user = User.objects.create(
            email=test_user['email'],
            username=test_user['username'])
        self.new_user.set_password(test_user['password'])
        self.new_user.save()
        print(self.new_user.is_active)

    def get_token(self):
        result = self.client.post('/api/token/',
                               data=json.dumps({
                                   'email': test_user["email"],
                                   'password': test_user["password"],
                               }),
                               content_type='application/json',
                               )
        result = json.loads(result.content)
        self.assertTrue("access" in result)
        return result["access"]
    
    def test_get_users(self):
        result = self.client.get(f'/api/accounts/{self.new_user.slug}/',
                                 content_type='application/json')
        self.assertEqual(result.status_code, 200)

    def test_user_creation(self):
        result = self.client.post('/api/accounts/register/',
                                  data=json.dumps({
                                      'email': 'test@test.com',
                                      'username': 'test',
                                      'password': '12345'
                                  }),
                                  content_type='application/json')
        self.assertEqual(result.status_code, 201)
 
    def test_login_user(self):
        result = self.client.post('/api/accounts/login/',
                                  data=json.dumps({
                                      'email': 'admin@admin.com',
                                      'password': '12345',
                                  }),
                                  content_type='application/json')
        print(result)