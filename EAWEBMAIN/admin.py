from django.contrib import admin
from .models import Channel, Fixture
from .models import Group, Team
from .models import Team_TOP

@admin.register(Team_TOP)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('code', 'flag_url')
    search_fields = ('code',)

@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ('group_name',)
    search_fields = ('group_name',)

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'group', 'played', 'won', 'drawn', 'lost', 'gf_ga', 'points')
    list_filter = ('group',)
    search_fields = ('name',)

@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')

@admin.register(Fixture)
class FixtureAdmin(admin.ModelAdmin):
    filter_horizontal = ('channels',)
    list_display = ('team1', 'team2', 'date_time', 'team1_image', 'team2_image')
