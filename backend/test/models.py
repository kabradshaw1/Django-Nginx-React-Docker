from django.db import models

class Test(models.Model):
  name = models.Charfield(max_length=10)

  def __str__(self):
    return self.name