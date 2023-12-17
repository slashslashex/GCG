<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (auth()->check()) {
        return redirect('/products');
    } else {
        return redirect('/login');
    }
});

Route::middleware('isAdmin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/products', [ProductController::class, 'listProducts'])->name('products');
    Route::get('/products/available', [Product::class, 'scopeAvailable'])->name('products.available');
    Route::get('/products/card/{id}', [ProductController::class, 'productCard'])->name('product.card');
    Route::get('/products/create', [ProductController::class, 'createProduct'])->name('products.create');
    Route::post('/products/create', [ProductController::class, 'storeProduct'])->name('products.store');
    Route::get('/products/edit/{id}', [ProductController::class, 'editProduct'])->name('products.edit');
    Route::post('/products/update/{id}', [ProductController::class, 'updateProduct'])->name('products.update');
    Route::get('/products/delete/{id}', [ProductController::class, 'deleteProduct'])->name('products.delete');
});


require __DIR__.'/auth.php';
