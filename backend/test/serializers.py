from rest_framework import serializers
from .models import Test

class TestSerializer(serializers.ModelSerializer):
  class Meta:
    fields = '__all__'
    model = Test