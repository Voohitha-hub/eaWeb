# Generated by Django 5.1 on 2024-08-21 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EAWEBMAIN', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fixture',
            name='team1_image',
            field=models.ImageField(blank=True, null=True, upload_to='team_images/'),
        ),
        migrations.AddField(
            model_name='fixture',
            name='team2_image',
            field=models.ImageField(blank=True, null=True, upload_to='team_images/'),
        ),
    ]
