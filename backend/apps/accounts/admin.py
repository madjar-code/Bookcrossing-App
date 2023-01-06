from django.db import models
from django.forms import Textarea
from django.contrib import admin, messages
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class UserAdmin(UserAdmin):
    model = User
    search_fields = ('email', 'username',)
    list_filter = ('is_active',)
    ordering = ('-created_at',)
    list_display = (
        'email', 'username', 'created_at', 'slug', 'is_active'
    )
    fieldsets = (
        (None, {'fields': ('email', 'username', 'avatar',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Others', {'fields': ('id', 'created_at', 'updated_at')})
    )
    readonly_fields = ('id', 'created_at', 'updated_at')
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'avatar', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )