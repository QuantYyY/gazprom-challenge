from .models import Main
from rest_framework import viewsets, permissions
from .serializers import MainSerializers


class MainViewSet(viewsets.ModelViewSet):
    queryset = Main.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MainSerializers
