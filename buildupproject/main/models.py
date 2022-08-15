from distutils.command.upload import upload
from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title

class Member(models.Model):
    name = models.CharField(max_length=70)
    # image = models.ImageField(upload_to = 'uploads/')
    field = models.CharField(max_length=70)
    tech_stack = models.CharField(max_length=70)
    career_period = models.IntegerField(default=0)
    pr_text = models.CharField(max_length=500)

    def __str__(self):
        return self.name
