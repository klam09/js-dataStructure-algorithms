import Benchmark from 'benchmark';
import chalk from 'chalk';

const createSuite = (name, options = {}) => {
	console.log(chalk.blue(`Test suite: ${name}`));

	return new Benchmark.Suite(name, {
		minSamples: parseInt(process.env.MIN_SAMPLE) || 50,
		initCount: parseInt(process.env.INIT_COUNT) || 1,
		...options,
	});
};

export default createSuite;