from django.contrib import admin
from .models import Times
# Register your models here.

class TimesAdmin(admin.ModelAdmin):
  list_display = ('date', 'time', 'taken', 'appointment_id')

admin.site.register(Times, TimesAdmin)
