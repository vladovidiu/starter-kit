import './index.css';

import numeral from 'numeral';
var test = "test";
console.log('test');

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
