from django.urls import path
from .views import create_inquiry, inquiry_list

urlpatterns = [
    path('inquiries/', inquiry_list, name='inquiry-list'),
    path('inquiries/create/', create_inquiry, name='inquiry-create'),
]
