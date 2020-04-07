# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from djongo import models

# Create your models here.


class Tours(models.Model):
  date = models.DateField()
  time = models.TextField()
  name = models.TextField(default="")
  interest = models.TextField()
  phone = models.TextField()
  email = models.TextField()
  notes = models.TextField()
  completed = models.BooleanField(default=False)

  def _str_(self):
    return self.email
        
