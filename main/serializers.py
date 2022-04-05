from rest_framework import serializers
from .models import Main


class MainSerializers(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = '__all__'
