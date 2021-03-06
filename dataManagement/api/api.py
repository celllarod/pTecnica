from django.views.decorators.cache import cache_control
from rest_framework import status, viewsets
from rest_framework.response import Response
import logging
from dataManagement.api.selializers import MonitoringSerializer


class MonitoringViewSet(viewsets.ModelViewSet):
    serializer_class = MonitoringSerializer

    # Consulta
    def get_queryset(self, pk=None):
        if pk is None:
            return self.get_serializer().Meta.model.objects.all().order_by("id")
        return self.get_serializer().Meta.model.objects.filter(id=pk).first()

    """ Consulta de la tabla 'monitoring' completa """

    def list(self, request):
        logging.debug("[DEBUG]", "Inside api.list()")
        monitoring_serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(monitoring_serializer.data, status=status.HTTP_200_OK)

    """ Inserción de una nueva medida en la tabla 'monitoring' """

    def create(self, request):
        logging.debug("[DEBUG]", "Inside api.create()")
        monitoring_serializer = self.serializer_class(data=request.data)
        if monitoring_serializer.is_valid():
            monitoring_serializer.save()
            return Response({'message': 'Measure succesfully recorded !'}, status=status.HTTP_201_CREATED)
        return Response(monitoring_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    """ Consulta de una fila de la tabla 'monitoring' según su id """

    def retrieve(self, request, pk=None):
        logging.debug("[DEBUG]", "Inside api.retrieve()")
        monitoring_serializer = MonitoringSerializer(self.get_queryset(pk))
        return Response(monitoring_serializer.data, status=status.HTTP_200_OK)

    """ Actualizar elemento de la tabla 'monitoring' """

    def update(self, request, pk=None):
        logging.debug("[DEBUG]", "Inside api.update()")
        if self.get_queryset(pk):
            monitoring_serializer = self.serializer_class(self.get_queryset(pk), data=request.data)
            if monitoring_serializer.is_valid():
                monitoring_serializer.save()
                return Response(monitoring_serializer.data, status=status.HTTP_200_OK)
            return Response(monitoring_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    """ Actualizar elemento de la tabla 'monitoring' """

    def destroy(self, request, pk=None):
        logging.debug("[DEBUG]", "Inside api.update()")
        monitoring = self.get_queryset().filter(id=pk).first()  # get instance
        if monitoring:
            monitoring.state = False
            monitoring.delete()
            return Response({'message': 'Measure removed successfully!'}, status=status.HTTP_200_OK)
        return Response({'error': 'No existe un Producto con estos datos!'}, status=status.HTTP_400_BAD_REQUEST)
