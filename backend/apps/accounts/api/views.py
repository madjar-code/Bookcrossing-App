from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers
from rest_framework import status
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework.generics import \
    GenericAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import \
    MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response

from .serializers import *


class RegisterAPIView(GenericAPIView):
    """API view for register user"""
    serializer_class = RegisterSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPIView(GenericAPIView):
    """API view for login user"""
    serializer_class = LoginSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UploadUserAvatar(GenericAPIView):
    """
    Upload an Avatar for current User
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = AvatarSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def post(self, request: Request):
        serializer = self.serializer_class(data=request.data)
        print(request.data)
        if serializer.is_valid():
            user = request.user
            user.avatar = request.data.get('avatar')
            user.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    @method_decorator(cache_page(60))
    @method_decorator(vary_on_headers("Authorization",))
    def retrieve(self, request: Request) -> Response:
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request: Request) -> Response:
        serializer = self.serializer_class(
            request.user, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
