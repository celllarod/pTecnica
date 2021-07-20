from django.urls import path
import dataManagement.views

urlpatterns = [path('monitoring-data/', dataManagement.views.data, name='monitoring-data'),
               path('monitoring-data-form/', dataManagement.views.dataForm, name='monitoring-data-form'),
               ]
