module.exports = {
	preset: 'jest',
	verbose: true,
	testMatch: ['**/**.spec.js'],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testTimeout: 60000,
	setupFiles: ['dotenv/config'],
	testEnvironment: './src/jest-setup/jest-allure-environment.js',
}
