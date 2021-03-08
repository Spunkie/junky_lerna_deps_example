module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: `babel-eslint`,
	},
	extends: [`@nuxtjs`, `prettier`, `prettier/vue`, `plugin:prettier/recommended`, `plugin:nuxt/recommended`],
	plugins: [`html`, `prettier`],
	// add your custom rules here
	rules: {
		'prefer-template': `error`,
		quotes: [`error`, `backtick`, { avoidEscape: true }],
		'vue/no-v-html': `off`, // Only use v-html with i18n translations
		camelcase: [
			`error`,
			{
				properties: `never`,
				allow: [`^[$]_`],
			},
		],
	},
}
