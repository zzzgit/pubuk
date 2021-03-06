/* eslint-env node */
const path = require("path")
// const babel = require("rollup-plugin-babel")
const replace = require("rollup-plugin-replace")
const pkg = require("./package.json")

module.exports = {
	input: path.resolve(__dirname, "./src/index.ts"),
	output: {
		file: path.resolve(__dirname, pkg.main),
		format: "cjs",
		name: "kaze",
		banner: "/* eslint-disable */",
	},
	plugins: [
		// babel({
		// 	exclude: 'node_modules/**',
		// }),
		replace({
			NODE_ENV: JSON.stringify(process.env.NODE_ENV === "production" ? "production" : "develop"),
		}),
	],
	// sourcemap: 'none',
}
