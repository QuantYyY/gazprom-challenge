from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index),
    path('participants', views.index),
    path('add', views.index),
    path('*', views.index),
]
