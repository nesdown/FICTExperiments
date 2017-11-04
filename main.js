'use strict';

//so, we have the base
const cities = [
  [ 'City', 'Population', 'Area', 'Density', 'Country'],
  [ 'Shanghai', 24256801, 6341, 3827, 'China' ],
  [ 'Beijing', 21516001, 16412, 1312, 'China' ],
  [ 'Delhi', 16787942, 1485, 11314, 'India' ],
  [ 'Lagos', 16060304, 1172, 13713, 'Nigeria' ],
  [ 'Tianjin', 15200001, 11761, 1294, 'China' ],
  [ 'Karachi', 14910353, 3528, 4573, 'Pakistan' ],
  [ 'Istanbul', 14160468, 5462, 2594, 'Turkey' ],
  [ 'Tokyo', 13513735, 2192, 6169, 'Japan' ],
  [ 'Guangzhou', 13080501, 7435, 1760, 'China' ],
  [ 'Mumbai', 12442374, 6035, 20681, 'India' ],
];

//let's print it out
console.dir(cities);

//lets find out the size
const size = cities.length;
console.log('\nThe size is: ' + size + '\n');

//now we'll delete the first line
cities.splice(-1, 1);
console.dir(cities);

//let's get a concrete value
console.log('\nTianjin?\n' + cities[5][0] + '!\n');

//we can add a value now
cities.push('Some stuff');
console.dir(cities);
