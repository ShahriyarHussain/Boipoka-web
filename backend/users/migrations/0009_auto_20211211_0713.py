# Generated by Django 3.2.9 on 2021-12-11 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='days_logged_id',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='profile',
            name='favorite_genre',
            field=models.IntegerField(blank=True, choices=[(1, 'Fantasy'), (2, 'Sci-Fi'), (3, 'Action & Adventure'), (4, 'Mystery'), (5, 'Horror'), (6, 'Thriller'), (7, 'Romance'), (8, 'Biography'), (9, 'Science & Technology'), (10, 'Humor'), (11, 'History'), (12, 'Children'), (13, 'Travel')], default=0),
        ),
    ]
