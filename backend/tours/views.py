# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ToursSerializer
from .models import Tours

class ToursView(viewsets.ModelViewSet):
  serializer_class = ToursSerializer
  queryset = Tours.objects.all()

# Create your views here.
