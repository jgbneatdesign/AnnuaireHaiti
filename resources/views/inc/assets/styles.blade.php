{{-- <link rel="stylesheet" type="text/css" href="{{ AH::asset(elixir('css/vendor.css')) }}"> --}}
@if(!App::isLocal())
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
@else
	<link rel="stylesheet" type="text/css" href="{{ AH::asset('css/font-awesome.min.css') }}">
@endif
<link rel="stylesheet" type="text/css" href="{{ AH::asset(elixir('css/app.css')) }}">