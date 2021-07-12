from rest_framework import serializers

from dataManagement.models import Monitoring


class MonitoringSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Monitoring
        fields = ['date_hour', 'energy', 'reactive_energy', 'pow', 'maximeter',
                  'reactive_power', 'voltage', 'intensity', 'power_factor']
