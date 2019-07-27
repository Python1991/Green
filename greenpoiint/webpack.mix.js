const mix = require('laravel-mix');
const glob = require('glob')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Vendor assets
 |--------------------------------------------------------------------------
 */

function mixAssetsDir(query, cb) {
    (glob.sync('resources/assets/' + query) || []).forEach(f => {
        f = f.replace(/[\\\/]+/g, '/');
        cb(f, f.replace('resources/assets', 'public'));
    });
}

const sassOptions = {
    precision: 5,
    implementation: () => require('node-sass')
};

// Core stylesheets
mix.sass('resources/assets/vendor/sass/bootstrap.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/bootstrap-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/appwork.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/appwork-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/colors.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/colors-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/uikit.scss', 'public/vendor/css', sassOptions);

// Themes
mix.sass('resources/assets/vendor/sass/theme-air.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-air-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-corporate.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-corporate-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-cotton.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-cotton-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-gradient.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-gradient-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-paper.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-paper-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-shadow.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-shadow-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-soft.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-soft-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-sunrise.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-sunrise-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-twitlight.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-twitlight-material.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-vibrant.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-vibrant-material.scss', 'public/vendor/css', sassOptions);

// Core javascripts
mixAssetsDir('vendor/js/**/*.js', (src, dest) => mix.scripts(src, dest));

// Libs
mixAssetsDir('vendor/libs/**/*.js', (src, dest) => mix.scripts(src, dest));
mixAssetsDir('vendor/libs/**/!(_)*.scss', (src, dest) => mix.sass(src, dest.replace(/\.scss$/, '.css'), sassOptions));

// Pages
mixAssetsDir('vendor/sass/pages/**/!(_)*.scss', (src, dest) => mix.sass(src, dest.replace(/(\\|\/)sass(\\|\/)/, '$1css$2').replace(/\.scss$/, '.css'), sassOptions));

// Fonts
mixAssetsDir('vendor/fonts/*.css', (src, dest) => mix.copy(src, dest));
mixAssetsDir('vendor/fonts/*/*', (src, dest) => mix.copy(src, dest));

/*
 |--------------------------------------------------------------------------
 | Application assets
 |--------------------------------------------------------------------------
 */

mix.js('resources/assets/js/application.js', 'public/js')
   .sass('resources/assets/sass/application.scss', 'public/css');

mix.version();