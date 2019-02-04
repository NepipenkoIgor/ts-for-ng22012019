module.exports = (config) => {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: './lesson-2/DarinaAnna/**/*.ts'}
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        singleRun: true,
        karmaTypescriptConfig: {
            tsconfig: "./lesson-2/DarinaAnna/tsconfig.json",
            reports: {
                "html": "coverage",
                "text": ""
            }
        }
    })
};
