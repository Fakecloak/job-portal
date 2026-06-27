from django.contrib import admin
from django.urls import path, include
from .views import hello_api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("backend.urls")),
]
