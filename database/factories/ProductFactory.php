<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductSeeder>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $statuses = ['available', 'unavailable'];
        $randomStatus = $statuses[array_rand($statuses)];
        return [
            'name' => fake()->name(),
            'article' => Str::random(10),
            'user_id' => rand(1, 2),
            'status' => $randomStatus,
            'data' => null,
        ];
    }

}
