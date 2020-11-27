/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

//const getNiceMessage = require('./get_a_nice_message');
import getNiceMessage from './get_a_nice_message';
import $ from 'jquery';
//uncomment to support legacy code
//global.$ = $;

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log(getNiceMessage(5));
