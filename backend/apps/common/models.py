import uuid
from django.db import models
from .managers import SoftDeletionManager


class UUIDModel(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)

    class Meta:
        abstract=True


class SoftDeletionModel(models.Model):
    is_active = models.BooleanField(default=True)
    objects = models.Manager()
    active_objects = SoftDeletionManager()

    def soft_delete(self):
        self.is_active = False
        self.save()

    def restore(self):
        self.is_active = False
        self.save()
    
    class Meta:
        abstract=True


class TimeStampedModel(models.Model):    
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True
