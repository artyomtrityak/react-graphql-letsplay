module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "ReactElement": true,
        "ReactComponent": true,
        "rx$SubscribtionT": true,
        "rx$ObservableT": true,
        "gq$PayloadT": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": 2,
        "semi": 2,
        "quotes": 0,
        "no-unused-vars": 0,
        "comma-dangle": 0,
        "no-console": 0
    }
};