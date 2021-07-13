from rest_framework.views import APIView
from rest_framework.response import Response
from dataManagement.api.selializers import MonitoringSerializer
from dataManagement.models import Monitoring


class MonitoringAPIView(APIView):

    def get(self, request):
        measures = Monitoring.objects.all()
        # TODO: el problema está aquí. No sugiere el atributo 'objects'. Salta el error al solicitar la uri: http://127.0.0.1:8000/monitoring/monitoring/
        monitoring_serializer = MonitoringSerializer(measures, many=True)
        return Response(monitoring_serializer.data)
