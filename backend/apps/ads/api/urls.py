from django.urls import path
from .views import *

app_name = 'ads'

urlpatterns = [
    path('', AdListView.as_view(), name='ad-list'),
    path('genre-list/', BookGenreListView.as_view(), name='genre-list'),
    path('genre-<slug:genre_slug>/', GenreAdListView.as_view(), name='genre-ads'),
    path('current/', MyAdList.as_view(), name='my-ad-list'),
    path('create/', CreateAdView.as_view(), name='create-ad'),
    path('<slug:slug>/', AdDetailsView.as_view(), name='ad-detail'),
]