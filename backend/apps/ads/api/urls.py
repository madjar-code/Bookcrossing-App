from django.urls import path
from .views import *

app_name = 'ads'

urlpatterns = [
    path('ads/', AdListView.as_view(), name='ad-list'),
    path('ads/genre-<slug:genre_slug>/', GenreAdListView.as_view(), name='genre-ads'),
    path('ads/current/', MyAdList.as_view(), name='my-ad-list'),
    path('ads/<slug:slug>/', AdDetailsView.as_view(), name='ad-detail'),
]