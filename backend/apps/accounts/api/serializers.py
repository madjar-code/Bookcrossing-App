from rest_framework import serializers
from rest_framework.serializers import SerializerMethodField
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from accounts.models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=2, write_only=True)
  
    class Meta:
        model=User
        fields = (
            'email',
            'username',
            'password'
        )
    
    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError(
                'The username should contain alphanumeric characters'
            )
        return attrs
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3, write_only=True)
    password = serializers.CharField(max_length=68, min_length=2, write_only=True)
    # username = serializers.CharField(max_length=255, min_length=3)
    access = serializers.CharField(max_length=68, min_length=6, read_only=True)
    refresh = serializers.CharField(max_length=68, min_length=6, read_only=True)

    class Meta:
        model = User
        fields = (
            'email',
            'password',
            'access',
            'refresh'
        )

    def validate(self, attrs):
        """During validation, authentication occurs on the backend"""
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        user = auth.authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')

        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')

        return {
            'access': user.tokens()['access'],
            'refresh': user.tokens()['refresh']}


class SimpleUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'password',
            'slug'
        )

        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    creation_date = SerializerMethodField()

    def get_creation_date(self, obj):
        start_string = str(obj.created_at)[:10]
        DD = start_string[8:10]
        MM = start_string[5:7]
        YYYY = start_string[:4]
        result_string = DD+'.'+MM+'.'+YYYY
        return result_string

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'password',
            'slug',
            'avatar',
            'description',
            'address',
            'creation_date',
        )
        read_only_fields = (
            'username',
            'email',
            'slug',
        )
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user