# from django.utils.decorators import method_decorator
# from django.views.decorators.cache import cache_page
# from django.views.decorators.vary import vary_on_headers
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.generics import \
    ListAPIView, CreateAPIView,\
    RetrieveUpdateDestroyAPIView
from rest_framework.parsers import \
    MultiPartParser, FormParser, JSONParser
from accounts.permissions import IsJWTAuthenticated    
from ads.models import *
from .serializers import *


class BookGenreListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = BookGenreSerializer
    queryset = BookGenre.objects.all()


class AdListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = SimpleAdSerializer
    queryset = Ad.active_objects.all()

    # @method_decorator(cache_page(60))
    def get(self, *args, **kwargs):
        return super().get(*args, **kwargs)


class GenreAdListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = SimpleAdSerializer
    queryset = Ad.active_objects.all()

    # @method_decorator(cache_page(60))
    def get(self, request: Request, genre_slug: str) -> Response:
        genre = BookGenre.objects.get(slug=genre_slug)
        genre_ads = self.queryset.filter(book_genre=genre)
        serializer = self.serializer_class(genre_ads, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MyAdList(ListAPIView):
    serializer_class = SimpleAdSerializer
    queryset = Ad.active_objects.all()
    permission_classes = (IsJWTAuthenticated,)

    # @method_decorator(cache_page(60))
    # @method_decorator(vary_on_headers("Authorization",))
    def get(self, request: Request) -> Response:
        user = request.user
        ads = self.queryset.filter(owner=user)
        serializer = self.serializer_class(ads, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateAdView(CreateAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = CreateAdSerializer
    permission_classes = (IsJWTAuthenticated,)

    def post(self, request: Request) -> Response:
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class AdDetailsView(RetrieveUpdateDestroyAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = AdSerializer
    permission_classes = (IsJWTAuthenticated,)
    queryset = Ad.active_objects.all()
    lookup_field = 'slug'

    # @method_decorator(cache_page(60))
    def get(self, *args, **kwargs):
        return super().get(*args, **kwargs)

    def delete(self, request: Request, slug: str) -> Response:
        ad = Ad.objects.filter(slug=slug).first()
        ad.soft_delete()
        return Response('Deletion complete', status=status.HTTP_204_NO_CONTENT)