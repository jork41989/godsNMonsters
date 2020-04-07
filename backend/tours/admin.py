# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Tours

class ToursAdmin(admin.ModelAdmin):
  list_display = ('date', 'time', 'phone', 'email', 'name', 'notes', 'completed')

admin.site.register(Tours, ToursAdmin)
