# Create your views here.
from rest_framework import viewsets

from dataManagement.selializers import MonitoringSerializer
from dataManagement.models import Monitoring


class MonitoringViewSet(viewsets.ModelViewSet):
    queryset = Monitoring.objects.all().order_by('date_hour')
    serializer_class = MonitoringSerializer
