module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: '**/*.ts' }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      reports: {
        "html": "coverage",
        "text": ""
      }
    }
  })
}