<?php

namespace App\Http\Controllers;

use App\Jobs\SendProductCreatedMail;
use App\Models\Product;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Http\Middleware\AdminRole;
use Inertia\Inertia;

class ProductController extends Controller
{


    public function productCard($id)
    {
        $product = Product::where('id', $id)->firstOrFail();
        return Inertia::render('Products/card', [
            'product' => $product,
        ]);
    }

    public function listProducts()
    {
        return Inertia::render('Products/list', [
            'products' => Product::all(),
            'status' => session('status'),
        ]);

    }

    public function createProduct()
    {
        return Inertia::render('Products/create');
//        return view('create');
    }

    public function storeProduct(Request $request)
    {
        $validateData = $request->validate([
            'article' => [
                'required',
                'regex:/^[a-zA-Z0-9]+$/',
                Rule::unique('products')->ignore($request->id),
            ],
            'name' => 'required|min:10',
            'status' => 'required'

        ]);

        $newProduct = Product::create([
            'article' => $request->article,
            'name' => $request->name,
            'status' => $request->status,
            'data' => $request->attributesData,
            'user_id' => auth()->user()->id,

        ]);

        $send = SendProductCreatedMail::dispatch($newProduct);

        return redirect()->route('products')->with('status', 'ProductSeeder ' .$newProduct->name . ' created successfully');

    }

    public function editProduct($id)
    {

        $product = Product::where('id', $id)->firstOrFail();
        $user = auth()->user();
        return Inertia::render('Products/edit', [
            'product' => $product,
            'user'=>$user
        ]);
    }

    public function updateProduct(Request $request, $id)
    {
        $request->validate([
            'article' => [
                'required',
                'regex:/^[a-zA-Z0-9]+$/',
                Rule::unique('products', 'article')->ignore($request->id),
            ],
            'name' => 'required|min:10',
            'status' => 'required'
        ]);

        $editProduct = Product::where('id', $id)->first();
        $editProduct->update([
            'article' => $request->article,
            'name' => $request->name,
            'status' => $request->status,
            'data' => $request->attributesData,
            'user_id' => auth()->user()->id,
        ]);
        return redirect()->route('products')->with('status', 'ProductSeeder ' . $editProduct->name . ' updated successfully');
    }

    public function deleteProduct($id)
    {
        $product = Product::where('id', $id)->first();
        $product->delete();
        return redirect()->route('products')->with('status', 'ProductSeeder ' . $product->name . ' removed successfully');
    }
}
