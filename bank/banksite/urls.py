from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='banksite-home'),
    path('about/', views.about, name='banksite-about'),
    path('transfers/', views.transfers, name='banksite-transfers'),
    path('transfer/',views.transfer, name='banksite-transfer'),
    path('confirm/',views.transfer_confirm, name='banksite-transfer-confirm'),
    path('summary/',views.transfer_summary, name='banksite-transfer-summary'),
    path('find_transfer/',views.find_transfer, name='banksite-find_transfer'),
    path('forgery/',views.forgery, name='banksite-forgery')
]
