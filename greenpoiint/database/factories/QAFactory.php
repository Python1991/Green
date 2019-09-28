<?php

use Faker\Generator as Faker;

$factory->define(App\QA::class, function (Faker $faker) {
    return [
        'question' => $faker->word,
        'answer' => $faker->sentence,
    ];
});
