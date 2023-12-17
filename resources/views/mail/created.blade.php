{{--<x-mail::message>--}}
{{--# Introduction--}}

{{--The body of your message.--}}

{{--<x-mail::button :url="''">--}}
{{--Button Text--}}
{{--</x-mail::button>--}}

{{--Thanks,<br>--}}
{{--{{ config('app.name') }}--}}
{{--</x-mail::message>--}}
    <!DOCTYPE html>
<html>
<head>
    <title>New Product Created</title>
</head>
<body>
<h1>New Product Created</h1>
<p>A new product has been created.</p>
<p>Product Name: {{ $product->name }}</p>
<p>Product Article: {{ $product->article }}</p>
    <tr>
{{--        <pre>--}}
{{--<?php--}}
{{--    print_r($product)--}}
{{--?>--}}
{{--        </pre>--}}
        <td>
            @foreach ($product->data->attributes as $atributes)
                <b>{{ $atributes->name }}</b>: {{ $atributes->value }}<br />
            @endforeach
        </td>
</body>
</html>
