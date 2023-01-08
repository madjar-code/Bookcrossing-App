from django.db import models
from common.models import *
from common.utils import create_slug
from accounts.models import User


class BookGenre(UUIDModel):
    """Book genre model."""

    GENRE_CHOICES = (
      ("Роман", "Роман"),
      ("Детектив", "Детектив"),
      ("Фантастика", "Фантастика"),
    )

    name = models.CharField(max_length=255, choices=GENRE_CHOICES)
    slug = models.SlugField(unique=True)

    def __str__(self) -> str:
        return self.name


class Book(UUIDModel, TimeStampedModel):
    """
    Book model. It is assumed that
    the book has one genre and author.
    """
    slug = models.SlugField(
        max_length=16,
        unique=True,
        null=True,
        blank=True)

    title = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='photos_of_books', blank=True)
    description = models.TextField(blank=True, null=True)
    
    author = models.CharField(max_length=255)
    genre = models.ForeignKey(to=BookGenre, on_delete=models.PROTECT)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = create_slug('book', Book)
        super().save(*args, **kwargs)
    

class Ad(UUIDModel, TimeStampedModel):
    """Ad model."""
    slug = models.SlugField(
        max_length=16,
        unique=True,
        null=True,
        blank=True
    )
    requirements_text = models.TextField(null=True, blank=True)
    offered_books = models.ManyToManyField(
        to=Book,
        related_name='ads'
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return f'Ad of user {self.user}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = create_slug('ad', Ad)
        super().save(*args, **kwargs)