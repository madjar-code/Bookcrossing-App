import random, string
from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin
)
from rest_framework_simplejwt.tokens import RefreshToken
from common.models import UUIDModel
from .managers import UserManager


class User(UUIDModel, AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True, db_index=True)

    avatar = models.ImageField(null=True, blank=True, upload_to='avatars/')
    description = models.TextField(blank=True, null=True)
    address = models.CharField(max_length=255, null=True, blank=True)

    slug = models.SlugField(
        max_length=255,
        unique=True, 
        null=True, 
        blank=True)

    # is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('username',)

    objects = UserManager()

    def __str__(self) -> str:
        return self.username

    def tokens(self) -> dict:
        """
        Возврат токенов для пользователя.
        """
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    @staticmethod
    def generate_user_string(length: int=6) -> str:
        """
        Генерирование постфикса для slug
        """
        letters = string.ascii_letters
        random_string = ''.join(random.choice(letters) for _ in range(length))
        return random_string

    def save(self, *args, **kwargs):
        """
        Slug generation
        """
        if not self.slug:
            slug = slugify(self.username)
            random_string = User.generate_user_string()
            self.slug = slug + "-" + random_string
        super().save(*args, **kwargs)
