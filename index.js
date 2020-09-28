require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }]
	}
}
