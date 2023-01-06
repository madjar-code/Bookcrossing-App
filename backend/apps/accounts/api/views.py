from django.contrib import auth

from rest_framework import status
from rest_framework.generics import \
    GenericAPIView, RetrieveUpdateAPIView
from rest_framework.parsers import \
    MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import *


class RegisterAPIView(GenericAPIView):
    """
    API view for register user
    TODO: Exception handling
    """
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPIView(GenericAPIView):
    """
    API view for login user
    TODO: Exception handling
    """
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserAPIView(RetrieveUpdateAPIView):
    """
    API view for getting some user by slug field 
    """
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    serializer_class = UserSerializer
    queryset = User.objects.filter(is_active=True)
    lookup_field = 'slug'


@api_view(['GET'])
def get_current_user(request):
    """
    Getting current user, that autenticated on backend
    """
    user = auth.get_user(request)
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)
