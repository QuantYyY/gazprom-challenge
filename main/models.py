from django.db import models


class Main(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    team = models.CharField(max_length=30)
    link = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

