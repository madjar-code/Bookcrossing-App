from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('current/', get_current_user, name='current'),
    path('<slug:slug>/', UserAPIView.as_view(), name='some_user'),
]