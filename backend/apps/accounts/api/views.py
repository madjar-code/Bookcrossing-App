from rest_framework import status
from rest_framework.generics import \
    GenericAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import \
    MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response

from .serializers import *


class RegisterAPIView(GenericAPIView):
    """
    API view for register user
    TODO: Exception handling
    """
    serializer_class = RegisterSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

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


class CurrentUserAPIView(RetrieveUpdateAPIView):
    """
    API view for work with current user
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        serializer_data = request.data.get('user', {})

        serializer = self.serializer_class(
            request.user, data=serializer_data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
