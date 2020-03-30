from django.db import models

# Create your models here.

class Times(models.Model):
  date = models.DateField()
  times = models.TextField()


  def __str__(self):
      return self.times