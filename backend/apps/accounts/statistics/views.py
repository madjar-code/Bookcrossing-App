"""Endpoints for obtaining the following statistics:
number of users with avatars, number of users by city,
number (percentage) of users with a description"""
from rest_framework import status
from rest_framework.response import Response
from rest_framework.request import Request
# from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from accounts.models import User
from .utils import *


@api_view(['GET'])
def get_statistics_by_avatars(request: Request) -> Response:
    users = User.objects.all()
    statistics = check_user_for_avatars(users)
    return Response(data=statistics, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_statistics_by_addresses(request: Request) -> Response:
    users = User.objects.all()
    statistics = address_analysis(users)
    return Response(data=statistics, status=status.HTTP_200_OK)
