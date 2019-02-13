module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: './lesson-2/Julia_Ki/**/*.ts' }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
    karmaTypescriptConfig: {
      tsconfig: "./lesson-2/Julia_Ki/tsconfig.json",
      reports: {
        "html": "coverage",
        "text": ""
      }
    }
  })
}