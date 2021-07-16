from django.urls import path
import dataManagement.views

urlpatterns = [path('monitoring-data/', dataManagement.views.data, name='monitoring-data')]
