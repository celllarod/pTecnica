from rest_framework import serializers
from dataManagement.models import Monitoring


class MonitoringSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitoring
        fields = '__all__'
