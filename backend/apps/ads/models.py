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


class Ad(UUIDModel, SoftDeletionModel, TimeStampedModel):
    """Ad model."""
    book_title = models.CharField(max_length=255)
    book_image = models.ImageField(
        null=True, blank=True,
        upload_to='photos_of_books/'
    )
    book_author = models.CharField(max_length=255)
    book_genre = models.ForeignKey(to=BookGenre, on_delete=models.PROTECT)

    owner = models.ForeignKey(
        to=User, related_name='ads',
        on_delete=models.CASCADE,
    )

    requirements_text = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    slug = models.SlugField(
        max_length=255,
        unique=True, 
        null=True, 
        blank=True
    )

    def __str__(self) -> str:
        return self.book_title

    def save(self, *args, **kwargs):
        """Slug generation."""
        if not self.slug:
            slug_string = create_slug('ad', Ad)
            self.slug = slug_string
        super().save(*args, **kwargs)
