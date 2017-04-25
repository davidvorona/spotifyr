module.exports = {
    "extends": "videoamp",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "comma-dangle": ["error", "never"],
        "no-console": 0,
        "no-param-reassign": ["error", { "props": false }]
    },
    "globals": {
        "document": true,
        "window": true
    }
};
