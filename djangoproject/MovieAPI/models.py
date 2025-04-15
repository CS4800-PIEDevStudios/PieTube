from django.db import models
from django.db import connection

# Create your models here.
class Student(models.Model):
	studentId = models.IntegerField()
	name = models.CharField(max_length=45)
	color = models.CharField(max_length=45)
