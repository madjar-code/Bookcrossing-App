from rest_framework import permissions
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import \
   TokenRefreshView,\
   TokenObtainPairView 
from .yasg import schema_view

API_PREFIX = 'api'

urlpatterns = [
   path("admin/", admin.site.urls),
   path(f'{API_PREFIX}/accounts/', include('accounts.api.urls')),
   path(f'{API_PREFIX}/ads/', include('ads.api.urls')),
   path(f'{API_PREFIX}/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path(f'{API_PREFIX}/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
   re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]