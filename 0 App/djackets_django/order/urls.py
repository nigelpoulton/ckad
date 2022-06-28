from django.urls import path

from order import views

urlpatterns = [
    path('checkout/', views.checkout),
    path('orders/', views.OrdersList.as_view()),  
    path('me/', views.UserInfoView.as_view()),  
]
