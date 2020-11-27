/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import '../styles/app.scss';

//const getNiceMessage = require('./get_a_nice_message');
import getNiceMessage from './components/get_a_nice_message';
import $ from 'jquery';
import 'bootstrap'; // adds function to jQuery
//uncomment to support legacy code
//global.$ = $;


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log(getNiceMessage(5));

$('.dropdown-toggle').dropdown();
$('.custom-file-input').on('change', function(event) {
    var inputFile = event.currentTarget;
    $(inputFile).parent()
        .find('.custom-file-label')
        .html(inputFile.files[0].name);
});
