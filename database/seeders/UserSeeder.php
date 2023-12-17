<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'isAdmin'=>true,
            'username'=>'admin',
            'fullName'=>'Admin Adminovich',
            'password'=>bcrypt('adminadmin')
        ]);

        User::create([
            'username'=>'user',
            'fullName'=>'User Userovich',
            'password'=>bcrypt('useruser')
        ]);
    }
}
