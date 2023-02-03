from rest_framework.serializers import\
    ModelSerializer, SerializerMethodField
from ads.models import *
from common.utils import transform_date


class BookGenreSerializer(ModelSerializer):
    class Meta:
        model = BookGenre
        exclude = ('id',)


class SimpleAdSerializer(ModelSerializer):
    creation_date = SerializerMethodField()
    owner_slug = SerializerMethodField()

    def get_creation_date(self, obj):
        return transform_date(obj.created_at)

    def get_owner_slug(self, obj):
        return obj.owner.slug

    class Meta:
        model = Ad
        fields = (
            'book_title',
            'book_image',
            'book_genre',
            'creation_date',
            'slug',
            'owner_slug',
        )


class AdSerializer(ModelSerializer):
    creation_date = SerializerMethodField()
    owner_slug = SerializerMethodField()
    genre_title = SerializerMethodField()

    def get_genre_title(self, obj):
        return obj.book_genre.name

    def get_creation_date(self, obj):
        return transform_date(obj.created_at)

    def get_owner_slug(self, obj):
        return obj.owner.slug

    class Meta:
        model = Ad
        fields = (
            'book_title',
            'book_image',
            'book_author',
            # 'book_genre',
            'genre_title',
            'creation_date',
            'description',
            'requirements_text',
            'slug',
            'owner_slug',
        )
