const movies = require('./top-rated-movies-01.json');
const lodash = require( 'lodash' );

const titles = lodash.map(movies, 'imdbRating' );
console.log('titles', titles);


