from django.db import models

class Team_TOP(models.Model):
    code = models.CharField(max_length=3)
    flag_url = models.CharField(max_length=3)  # Use CharField for flag_url

    def __str__(self):
        return self.code

class Group(models.Model):
    group_name = models.CharField(max_length=100)

    def __str__(self):
        return self.group_name

class Team(models.Model):
    group = models.ForeignKey(Group, related_name='teams', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    played = models.IntegerField(default=0)
    won = models.IntegerField(default=0)
    drawn = models.IntegerField(default=0)
    lost = models.IntegerField(default=0)
    gf_ga = models.CharField(max_length=20)  # Goals for:Goals against
    points = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Channel(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='channel_icons/')

    def __str__(self):
        return self.name

class Fixture(models.Model):
    team1 = models.CharField(max_length=100)
    team2 = models.CharField(max_length=100)
    team1_image = models.ImageField(upload_to='team_images/', blank=True, null=True)
    team2_image = models.ImageField(upload_to='team_images/', blank=True, null=True)
    date_time = models.DateTimeField()
    channels = models.ManyToManyField(Channel)

    def __str__(self):
        return f"{self.team1} vs {self.team2} on {self.date_time}"
