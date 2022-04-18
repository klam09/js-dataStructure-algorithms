import chalk from 'chalk';
import createSuite from '../createSuite.mjs';

const TEST_NAME = 'Array_removeOneByIndex';
const ARRAY_SIZE = parseInt(process.env.ARRAY_SIZE) || 100;
const TEST_ARRAY = new Array(ARRAY_SIZE).fill('').map(() => String.fromCharCode(Math.ceil(Math.random() * 100)));
const TEST_INDEX = parseInt(process.env.TEST_INDEX) || 5;

const suite = createSuite(TEST_NAME);

suite
	.add('Array.prototype.splice', function() {
		const array = Array.from(TEST_ARRAY);
		array.splice(TEST_INDEX, 1);
	})
	.add('Array.prototype.slice', function() {
		const array = Array.from(TEST_ARRAY);
		array.slice(0, TEST_INDEX).concat(array.slice(TEST_INDEX + 1));
	})
	.add('Array.prototype.filter', function() {
		const array = Array.from(TEST_ARRAY);
		array.filter((item, index) => index !== TEST_INDEX);
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log(chalk.green(`Fastest is ${this.filter('fastest').map('name')}`));
	})
	.run({ 'async': false });