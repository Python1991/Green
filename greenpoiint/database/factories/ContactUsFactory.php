<?php

use Faker\Generator as Faker;

$factory->define(App\ContactUs::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'phone' => $faker->phoneNumber,
        'email' => $faker->email,
        'company_name' => $faker->company,
        'content' => $faker->sentence,
    ];
});
