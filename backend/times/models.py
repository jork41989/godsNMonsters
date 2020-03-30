from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Times(models.Model):
  date = models.DateField()
  times = ArrayField(models.CharField(max_length=200))


  def __str__(self):
      return self.date
