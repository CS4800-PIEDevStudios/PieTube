# Generated by Django 4.2.19 on 2025-02-18 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('studentId', models.IntegerField()),
                ('name', models.CharField(max_length=45)),
                ('color', models.CharField(max_length=45)),
            ],
        ),
    ]
