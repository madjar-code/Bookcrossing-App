import os
from .models import Ad

from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver


@receiver(post_delete, sender=Ad)
def auto_delete_image_on_delete(sender, instance, *args, **kwargs):
    """
    Deletes book image from filesystem
    when corresponding `Ad` object is deleted.
    """
    if instance.book_image:
        if os.path.isfile(instance.book_image.path):
            os.remove(instance.book_image.path)

@receiver(pre_save, sender=Ad)
def auto_delete_image_on_change(sender, instance, **kwargs):
    """
    Deletes old image from filesystem
    when corresponding `Ad` object is updated
    with new image.
    """
    if not instance.pk:
        return False

    try:
        old_image = Ad.objects.get(pk=instance.pk).book_image
    except Ad.DoesNotExist:
        return False

    new_image = instance.book_image
    if not old_image == new_image:
        if os.path.isfile(old_image.path):
            os.remove(old_image.path)
