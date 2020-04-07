from djongo import models
from tours import models as tours_models

# Create your models here.


class Times(models.Model):
  date = models.DateField()
  time = models.TextField()
  taken = models.BooleanField(default=False)
  appointment_id = models.ForeignKey(
      tours_models.Tours, on_delete=models.DO_NOTHING, blank=True, null=True)


  def __str__(self):
      return self.time
