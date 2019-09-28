<?php

use Faker\Generator as Faker;

$factory->define(App\News::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        'meta' => $faker->sentence,
        'content' => $faker->paragraph,
        'image' => 'images/v' . $faker->numberBetween(1, 5) . '.jpg',
        'status' => $faker->numberBetween(0, 1),
        'date' => $faker->dateTimeThisMonth()->format('Y-m-d')
    ];
});
