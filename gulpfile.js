var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');


elixir.config.assetsPath = 'themes/cosidor-theme/assets/';
elixir.config.publicPath = 'themes/cosidor-theme/assets/compiled/';


elixir(function(mix){
	
	mix.sass('styles.scss');

	mix.scripts([
		'app.js',
		'jquery.js',
	]);

	mix.livereload([
		'themes/cosidor-theme/assets/compiled/css/styles.css',
		'themes/cosidor-theme/**/*.htm',
		'themes/cosidor-theme/assets/compiled/js/*.js',
	])
})
