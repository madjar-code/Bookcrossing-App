from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import \
    ListAPIView, CreateAPIView,\
    RetrieveUpdateDestroyAPIView
from rest_framework.parsers import \
    MultiPartParser, FormParser, JSONParser
from ads.models import *
from .serializers import *


class BookGenreListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = BookGenreSerializer
    queryset = BookGenre.objects.all()


class AdListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = SimpleAdSerializer
    queryset = Ad.objects.filter(is_active=True)


class GenreAdListView(ListAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = SimpleAdSerializer
    queryset = Ad.objects.filter(is_active=True)

    def get(self, request, genre_slug):
        genre = BookGenre.objects.get(slug=genre_slug)
        genre_ads = self.queryset.filter(book_genre=genre)        
        serializer = self.serializer_class(genre_ads, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MyAdList(ListAPIView):
    serializer_class = SimpleAdSerializer
    queryset = Ad.objects.filter(is_active=True)

    def get(self, request):
        user = request.user
        ads = self.queryset.filter(owner=user)
        serializer = self.serializer_class(ads, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AdDetailsView(RetrieveUpdateDestroyAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = AdSerializer
    queryset = Ad.objects.filter(is_active=True)
    lookup_field = 'slug'
