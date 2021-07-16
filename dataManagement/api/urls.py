from django.urls import path, re_path
from rest_framework import permissions, routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from dataManagement.api.api import MonitoringViewSet

schema_view = get_schema_view(
    openapi.Info(
        title="Documentación API",
        default_version='v1',
        description="Documentación de la API creada para el desarrollo de la prueba técnica de python",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email=""),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

router = routers.SimpleRouter()
router.register(r'monitoring-api', MonitoringViewSet, basename='monitoring-api')

urlpatterns = [
    re_path('swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
] + router.urls

