from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    
    path('calendar/', views.calendar_view, name='calendar_view'),
    path('get_fixtures/', views.get_calendar_fixtures_view, name='get_fixtures_view_name'),
    # Above both urls are dedicated to Calendar
    
    path('fixtures/', views.fixtures_view, name='fixtures_view'),
    
    # Above url is for fixtures tab
    
    path('tableofpoints/', views.table_of_points_view, name='tableofpoints_view'),
    path('team-data/', views.get_team_data, name='get_team_data'),
    
    # Above url is for tabel of points tab
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)