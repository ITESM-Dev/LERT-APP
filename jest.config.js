const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    "jest": {
        "preset": "react-native",
        "moduleFileExtensions": [
            "ts",
            "tsx",
            "js"
        ],
        "transform": {
            ...tsjPreset.transform,
            "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
            "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
        },
        "globals": {
            'ts-jest': {
                babelConfig: true,
            },
        },
        "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
        "testPathIgnorePatterns": [
            "\\.snap$",
            "<rootDir>/node_modules/"
        ],
        "cacheDirectory": ".jest/cache",
        "verbose": true,
        "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
    }
}