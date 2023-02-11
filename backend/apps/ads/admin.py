from django.contrib import admin
from .models import *


@admin.register(BookGenre)
class BookGenreAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('name', 'slug')
    readonly_fields = ('id',)


@admin.register(Ad)
class AdAdmin(admin.ModelAdmin):
    search_fields = ('book_title', 'book_author',)
    list_filter = ('book_genre', 'owner',)
    ordering = ('-created_at',)
    list_display = (
        'book_title', 'book_author',
        'book_genre', 'owner')
    readonly_fields = ('created_at', 'updated_at', 'id', 'slug')

