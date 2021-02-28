module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("./src/scss/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "dist"
        }
    }
}