module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget("./src/scss/");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");

    eleventyConfig.addCollection('posts', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].sort((a, b) => {
            const aDate = a.data.updatedAt || a.data.createdAt;
            const bDate = b.data.updatedAt || b.data.createdAt;
            return aDate === bDate
                ? 0
                : aDate < bDate 
                    ? 1
                    : -1;
        });
    });

    eleventyConfig.addCollection('featuredPosts', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md')].filter(post => post.data.featured)
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