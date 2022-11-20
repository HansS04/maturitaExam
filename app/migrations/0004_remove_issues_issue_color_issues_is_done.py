# Generated by Django 4.1.3 on 2022-11-19 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_issues_class_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='issues',
            name='issue_color',
        ),
        migrations.AddField(
            model_name='issues',
            name='is_done',
            field=models.BooleanField(default=False, help_text='Je Issue hotov? ANO, NE'),
        ),
    ]