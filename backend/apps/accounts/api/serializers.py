from django.contrib import auth
from rest_framework import serializers
from rest_framework.serializers import ValidationError
from rest_framework.serializers import SerializerMethodField
from rest_framework.exceptions import AuthenticationFailed
from accounts.models import User
from common.utils import transform_date


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(min_length=3, required=True, allow_blank=True)
    email = serializers.EmailField(required=True, allow_blank=True)
    password = serializers.CharField(max_length=68, write_only=True, allow_blank=True)
    confirm_password = serializers.CharField(max_length=68, write_only=True, allow_blank=True)
  
    class Meta:
        model=User
        fields = (
            'email',
            'username',
            'password',
            'confirm_password',
        )

    def validate_username(self, value):
        username = self.get_initial().get('username')
        if username == '':
            raise ValidationError('Это поле не должно быть пустым')
        return value

    def validate_email(self, value):
        email = self.get_initial().get('email')
        if email == '':
            raise ValidationError('Это поле не должно быть пустым')
        if User.objects.filter(email=email).exists():
            raise ValidationError('Этот email уже используется')
        return value

    def validate_password(self, value):
        password = self.get_initial().get('password')
        if password == '':
            raise ValidationError('Это поле не должно быть пустым')
        if len(password) < 5:
            raise ValidationError(
                'Пароль должен состоять минимум из 5 символов')
        return value

    def validate_confirm_password(self, value):
        password = self.get_initial().get("password")
        confirm_password = self.get_initial().get("confirm_password")

        if confirm_password == '':
            raise ValidationError('Это поле не должно быть пустым')
        if password != confirm_password:
            raise ValidationError(
                'Несовпадение паролей.')
        return value

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        del validated_data['confirm_password']

        user = self.Meta.model(**validated_data)

        if password:
            user.set_password(password)

        user.save()
        return user


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
            raise AuthenticationFailed('Некорректный логин или пароль')

        if not user.is_active:
            raise AuthenticationFailed('Аккаунт отключен, обратитесь к админу')

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
    number_of_ads = SerializerMethodField()

    def get_creation_date(self, obj):
        return transform_date(obj.created_at)

    def get_number_of_ads(self, obj):
        return len(obj.ads.filter(is_active=True))

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'password',
            'slug',
            'avatar',
            'number_of_ads',
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