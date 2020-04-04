from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TimesSerializer
from .models import Times


class TimesView(viewsets.ModelViewSet):
  serializer_class = TimesSerializer
  queryset = Times.objects.all()

class TimesCustomerView(viewsets.ModelViewSet):
  serializer_class = TimesSerializer
  queryset = Times.objects.filter(taken="False")
