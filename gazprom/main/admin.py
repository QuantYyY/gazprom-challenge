from django.contrib import admin
from .models import Main


class Admin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'team', 'link', 'date')
    list_display_links = ('id', 'name', 'email', 'team')
    search_fields = ('id', 'name', 'email', 'team', 'link')
    list_filter = ('name', 'email', 'team')


admin.site.register(Main, Admin)
