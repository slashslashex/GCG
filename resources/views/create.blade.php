<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавить продукт</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7fafc;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .form-group .error {
            color: red;
            font-size: 14px;
        }

        .form-group .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .form-group .btn:hover {
            background-color: #45a049;
        }

        .attribute-group {
            margin-bottom: 10px;
        }

        .attribute-group input {
            margin-right: 10px;
        }

        .attribute-group .btn-remove {
            background-color: #ff0000;
        }
    </style>
</head>
<body>
<div class="container">
    <h3>Добавить продукт</h3>
    <form action="{{ route('products.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="article">Артикул</label>
            <input id="article" type="text" name="article" autofocus>
            @error('article')
            <span class="error">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-group">
            <label for="name">Название</label>
            <input id="name" type="text" name="name" autofocus>
            @error('name')
            <span class="error">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-group">
            <label for="status">Статус</label>
            <select id="status" name="status" autofocus>
                <option value="available">Доступен</option>
                <option value="unavailable">Недоступен</option>
            </select>
            @error('status')
            <span class="error">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-group">
            <label for="data">Атрибуты</label>
            <div class="row">
                <div class="col-md-2">
                    Key:
                </div>
                <div class="col-md-4">
                    Value:
                </div>
            </div>
            @for ($i=0; $i <= 1; $i++)
                <div class="row">
                    <div class="col-md-2">
                        <input type="text" name="properties[{{ $i }}][key]" class="form-control" value="{{ old('properties['.$i.'][key]') }}">
                    </div>
                    <div class="col-md-4">
                        <input type="text" name="properties[{{ $i }}][value]" class="form-control" value="{{ old('properties['.$i.'][value]') }}">
                    </div>
                </div>
            @endfor
            @error('data')
            <span class="error">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-group">
            <button type="submit" class="btn">Добавить</button>
        </div>
    </form>
</div>

<script>

</script>
</body>
</html>
