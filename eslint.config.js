import js from "@eslint/js"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import ts from "typescript-eslint"
import svelte from "eslint-plugin-svelte"
import globals from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs["flat/recommended"],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.svelte"],
        languageOptions: {
            parserOptions: {
                // project: true,
                parser: ts.parser,
                svelteFeatures: {
                    experimentalGenerics: true,
                }
            },
        },
    },
    {
        ignores: [
            "build/",
            ".svelte-kit/",
            ".vercel",
            "dist/",
            "css/",
            "src/lib/queries.ts",
        ],
    },
    {
        plugins: {
            "@stylistic/ts": stylisticTs,
        },
    },
    {
        rules: {
            "arrow-parens": [
                "error",
                "as-needed",
                { requireForBlockBody: false },
            ],
            "no-constant-condition": ["error", { checkLoops: false }],
            "no-implicit-coercion": [
                "error",
                {
                    allow: ["!!"],
                },
            ],
            // disallow semi-colon
            semi: ["error", "never"],
            quotes: ["error", "double"],
            "array-element-newline": ["error", "consistent"],
            "no-self-assign": "off",
            // "indent": ["error", 4, { "SwitchCase": 1 }],
            "no-empty": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrors: "none",
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports" },
            ],
            "svelte/indent": [
                "error",
                {
                    indentScript: false,
                    ignoredNodes: ["script"],
                    indent: 4,
                },
            ],
            "svelte/prefer-style-directive": ["error"],
            "svelte/sort-attributes": ["error"],
            "svelte/shorthand-directive": [
                "error",
                {
                    prefer: "always",
                },
            ],
            "svelte/no-spaces-around-equal-signs-in-attribute": ["error"],
            "svelte/html-quotes": [
                "error",
                {
                    prefer: "double",
                    dynamic: {
                        quoted: false,
                        avoidInvalidUnquotedInHTML: false,
                    },
                },
            ],
            "svelte/no-at-html-tags": "warn",
            "svelte/mustache-spacing": [
                "error",
                {
                    textExpressions: "always", // or "always"
                    attributesAndProps: "never", // or "always"
                    directiveExpressions: "always", // or "always"
                    tags: {
                        openingBrace: "never",
                        closingBrace: "never",
                    },
                },
            ],
            "svelte/max-attributes-per-line": [
                "error",
                {
                    multiline: 1,
                    singleline: 1,
                },
            ],
            "svelte/first-attribute-linebreak": [
                "error",
                {
                    multiline: "below", // or "beside"
                    singleline: "beside", // "below"
                },
            ],
            "@typescript-eslint/no-unused-expressions": "off",
            "@stylistic/ts/object-property-newline": ["error", {

            }],
            "@stylistic/ts/indent": ["error", 4],
            "@stylistic/ts/object-curly-newline": [
                "error",
                {
                    ObjectExpression: {
                        multiline: true,
                        consistent: true,
                        minProperties: 3,
                    },
                    ObjectPattern: {
                        multiline: true,
                        consistent: true,
                        minProperties: 3,
                    },
                    ImportDeclaration: {
                        multiline: true,
                        consistent: true,
                        minProperties: 4,
                    }
                },
            ],
        },
    },
]
