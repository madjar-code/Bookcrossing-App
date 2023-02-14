from rest_framework.serializers import\
    ModelSerializer, SerializerMethodField
from ads.models import *
from common.utils import transform_date


class BookGenreSerializer(ModelSerializer):
    class Meta:
        model = BookGenre
        fields = (
            'id',
            'name',
            'slug'
        )


class SimpleAdSerializer(ModelSerializer):
    creation_date = SerializerMethodField()
    owner_slug = SerializerMethodField()
    owner_avatar = SerializerMethodField()

    def get_creation_date(self, obj):
        return transform_date(obj.created_at)

    def get_owner_slug(self, obj):
        return obj.owner.slug

    def get_owner_avatar(self, obj):
        if obj.owner.avatar:
            return obj.owner.avatar.url

    class Meta:
        model = Ad
        fields = (
            'book_title',
            'book_image',
            'book_genre',
            'creation_date',
            'slug',
            'owner_slug',
            'owner_avatar',
        )


class CreateAdSerializer(ModelSerializer):
    class Meta:
        model = Ad
        fields = (
            'book_title',
            'book_image',
            'book_author',
            'book_genre',
            'description',
            'requirements_text',
            'owner',
        )


class AdSerializer(ModelSerializer):
    creation_date = SerializerMethodField()
    owner_username = SerializerMethodField()
    owner_slug = SerializerMethodField()
    genre_title = SerializerMethodField()
    owner_avatar = SerializerMethodField()

    def get_genre_title(self, obj):
        return obj.book_genre.name

    def get_creation_date(self, obj):
        return transform_date(obj.created_at)

    def get_owner_username(self, obj):
        return obj.owner.username

    def get_owner_slug(self, obj):
        return obj.owner.slug

    def get_owner_avatar(self, obj):
        if obj.owner.avatar:
            return obj.owner.avatar.url

    class Meta:
        model = Ad
        fields = (
            'book_title',
            'book_image',
            'book_author',
            'book_genre',
            'genre_title',
            'creation_date',
            'description',
            'requirements_text',
            'slug',
            'owner',
            'owner_username',
            'owner_slug',
            'owner_avatar',
        )
