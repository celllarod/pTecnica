from django.urls import path

from dataManagement.api.api import MonitoringAPIView


urlpatterns = [
    path('monitoring/', MonitoringAPIView.as_view(), name='monitoring_api')
]
