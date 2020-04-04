from rest_framework import serializers
from .models import Times


class TimesSerializer(serializers.ModelSerializer):
    class Meta:
      model = Times
      fields = ('id','date', 'time', 'taken', 'appointment_id')
