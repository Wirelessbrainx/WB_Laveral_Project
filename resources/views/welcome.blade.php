<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="container">
            <h2 class="pg-header"> Laravel and React application </h2>
            <div class='pg-content' id='root'></div>
            <script src="{{mix('js/app.js')}}" ></script> 
            <div class='pg-footer'>
            <p>&copy; Copyright 2019 Oliver Grimes <strong>Ollie.gee42@btinternet.com</strong></p>

            </div>   
        </div>
    </body>
</html>
