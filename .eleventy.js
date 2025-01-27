module.exports = (eleventyConfig) => {
    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    
    // Add a filter to get the locale from the file path
    eleventyConfig.addFilter("getLocale", (path) => {
        const locale = path.split('/')[1];
        return locale || 'es';
    });

    // Add current year for copyright
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Set default locale data
    eleventyConfig.addGlobalData("locale", "es");
    eleventyConfig.addGlobalData("year", new Date().getFullYear());

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true
    };
}; 