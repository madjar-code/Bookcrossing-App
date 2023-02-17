from django.urls import path, include
from accounts.statistics.views import *
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('current/', CurrentUserAPIView.as_view(), name='current_user'),
    path('avatar/', UploadUserAvatar.as_view(), name='current_user_avatar'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('<slug:slug>/', UserAPIView.as_view(), name='some_user'),
]

urlpatterns += [
    path('statistics/avatars', get_statistics_by_avatars, name='stats_by_avatar'),
    path('statistics/addresses', get_statistics_by_addresses, name='stats_by_addresses'),
]