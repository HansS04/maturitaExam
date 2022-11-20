# Generated by Django 4.1.3 on 2022-11-19 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PROJECT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pro_name', models.CharField(help_text='Zadejte nazev projektu', max_length=45, verbose_name='Nazev')),
                ('pro_description', models.TextField(help_text='Zadejte strucny popis projektu', verbose_name='popis')),
            ],
        ),
        migrations.CreateModel(
            name='ISSUES_CLASS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issues_class_name', models.CharField(help_text='Zadejte nazev pro tridu ukolu', max_length=45, verbose_name='Nazev pro tridu ukolu')),
                ('issues_class_color', models.CharField(default='rgb(255,255,255)', help_text='Zadejte  barvu ve tvaru: rgb(255,255,255)', max_length=45, verbose_name='barva pro tridu ukolu')),
                ('class_detail', models.TextField(blank=True, help_text='Zadejte strucny popis tridy pro ukoly', verbose_name='popis')),
                ('class_image', models.ImageField(null=True, upload_to='uploads/Issue_class/%Y/%m/%d/', verbose_name='Ilustracni foto')),
                ('project_id', models.ManyToManyField(help_text='Pro jaky projekt je trida urcena', to='app.project', verbose_name='projekt')),
            ],
        ),
        migrations.CreateModel(
            name='ISSUES',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue_name', models.CharField(help_text='Zadejte nazev pro tridu ukolu', max_length=45, verbose_name='Nazev pro tridu ukolu')),
                ('issue_color', models.CharField(default='rgb(255,255,255)', help_text='Zadejte  barvu ve tvaru: rgb(255,255,255)', max_length=45, verbose_name='barva pro tridu ukolu')),
                ('issue_detail', models.TextField(blank=True, help_text='Zadejte strucny popis tridy pro ukoly', verbose_name='popis')),
                ('class_image', models.ImageField(null=True, upload_to='uploads/Issue/%Y/%m/%d/', verbose_name='Ilustracni foto')),
                ('issues_class', models.ManyToManyField(help_text='Pro jakou tridu ma byt issue urcen', to='app.issues_class', verbose_name='trida')),
            ],
        ),
        migrations.CreateModel(
            name='ASSESSEMENT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('as_percent', models.FloatField(blank=True, help_text=' Zadejte hodnoceni v procentech', null=True, verbose_name='Procenta hodnoceni')),
                ('as_mark', models.CharField(blank=True, choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], help_text='Zadejte znamku za projekt', max_length=1, verbose_name='Znamka')),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.project')),
            ],
        ),
    ]