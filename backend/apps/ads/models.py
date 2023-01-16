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
