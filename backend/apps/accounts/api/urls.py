from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('current/', CurrentUserAPIView.as_view(), name='current_user'),
    path('avatar/', UploadUserAvatar.as_view(), name='current_user_avatar'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('<slug:slug>/', UserAPIView.as_view(), name='some_user'),
]