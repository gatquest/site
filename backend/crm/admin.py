from django.contrib import admin
from django import forms
from .models import Sale

# Register your models here.

class SaleAdminForm(forms.ModelForm):
    class Meta:
        model = Sale
        fields = "__all__"
@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ("num_order", "created_at")
    # readonly_fields = ("created_at",)
    form = SaleAdminForm

