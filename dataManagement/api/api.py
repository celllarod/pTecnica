from rest_framework.decorators import api_view
from rest_framework.response import Response
from dataManagement.api.selializers import MonitoringSerializer
from dataManagement.models import Monitoring
from rest_framework import status


@api_view(['GET', 'POST'])
def monitoring_api_view(request):
    """Consulta de la tabla 'monitoring' completa"""
    if request.method == 'GET':
        measures = Monitoring.objects.all()
        monitoring_serializer = MonitoringSerializer(measures, many=True)
        return Response(monitoring_serializer.data, status=status.HTTP_200_OK)

    """Inserción de nuevo elemento en la tabla 'monitoring"""
    if request.method == 'POST':
        monitoring_serializer = MonitoringSerializer(data=request.data)
        if monitoring_serializer.is_valid():
            monitoring_serializer.save()
            return Response(monitoring_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(monitoring_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def monitoring_detail_api_view(request, pk=None):
    measure = Monitoring.objects.filter(id=pk).first()

    if measure:

        """Consultar tabla 'monitoring' por id"""
        if request.method == 'GET':
            monitoring_serializer = MonitoringSerializer(measure)
            return Response(monitoring_serializer.data, status=status.HTTP_200_OK)

        """Actualizar elemento de la tabla 'monitoring'"""
        if request.method == 'PUT':
            measure = Monitoring.objects.filter(id=pk).first()
            monitoring_serializer = MonitoringSerializer(measure, data=request.data)
            if monitoring_serializer.is_valid():
                monitoring_serializer.save()
                return Response(monitoring_serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(monitoring_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        """Eliminar elemento de la tabla 'monitoring'"""
        if request.method == 'DELETE':
            measure = Monitoring.objects.filter(id=pk).first()
            measure.delete()
            return Response({'message':'Measure removed successfully!'}, status=status.HTTP_200_OK)

    else:
        return Response({'message': 'No measure was found with the specified id'}, status=status.HTTP_400_BAD_REQUEST)

