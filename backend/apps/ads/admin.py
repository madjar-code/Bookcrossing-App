from django.contrib import admin
from .models import *

@admin.register(BookGenre)
class BookGenreAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('name', 'slug')
    readonly_fields = ('id',)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    search_fields = ('title', 'author')
    list_filter = ('genre', 'user')
    ordering = ('-created_at',)
    list_display = (
        'title',
        'genre',
        'author',
        'user',
        'slug',
        'is_active',
    )

@admin.register(Ad)
class AdAdmin(admin.ModelAdmin):
    search_fields = ('user',)
    list_filter = ('user',)
    ordering = ('-created_at',)
    list_display = (
        '__str__',
        'slug',
        'is_active',
    )