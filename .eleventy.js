module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("./src/scss/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");

    eleventyConfig.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].sort((a, b) => {
            const aDate = a.data.updatedAt || a.data.createdAt;
            const bDate = b.data.updatedAt || b.data.createdAt;
            if (aDate < bDate) {
                return 1;
            }
            if (aDate > bDate) {
                return -1;
            }
            return 0;
        });
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "dist"
        }
    }
}