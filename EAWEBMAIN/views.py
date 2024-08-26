from django.shortcuts import render
from .models import *
from django.http import JsonResponse

def home_view(request):
    return render(request, 'EAWEBMAIN/EA_WELCOME.html')

def calendar_view(request):
    return render(request, 'EAWEBMAIN/CALENDAR.html')

def get_calendar_fixtures_view(request):
    fixtures = Fixture.objects.prefetch_related('channels').all()
    
    fixtures_list = []
    
    for fixture in fixtures:
        fixtures_list.append({
            'team1': fixture.team1,
            'team2': fixture.team2,
            'team1Image': fixture.team1_image.url if fixture.team1_image else None,
            'team2Image': fixture.team2_image.url if fixture.team2_image else None,
            'dateTime': fixture.date_time.strftime('%b %d %H:%M %Z'), 
            'channels': [{'name': channel.name, 'icon': channel.icon.url} for channel in fixture.channels.all()]
        })
    
    return JsonResponse({'fixtures': fixtures_list})

# Above both functions for calendar view

def fixtures_view(request):
    return render(request, 'EAWEBMAIN/FIXTURES.html')


def table_of_points_view(request):
    groups = Group.objects.prefetch_related('teams').all()
    return render(request, 'EAWEBMAIN/TABLEOFPOINTS.html', {'groups': groups})


def get_team_data(request):
    try:
        # Fetch all teams and their data
        teams = list(Team_TOP.objects.all().values('code', 'flag_url'))
        return JsonResponse({'teams': teams})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
