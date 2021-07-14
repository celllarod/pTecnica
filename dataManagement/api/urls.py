from django.urls import path

from dataManagement.api.api import monitoring_api_view, monitoring_detail_api_view

urlpatterns = [
    path('api/', monitoring_api_view, name='monitoring_api'),
    path('api/<int:pk>', monitoring_detail_api_view, name='monitoring_detail_api_view')
]
