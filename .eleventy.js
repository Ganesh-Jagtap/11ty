const pluginRss = require("@11ty/eleventy-plugin-rss"); 
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const baseUrl = process.env.BASE_URL || 'http://localhost:8080';

const pathPrefix = process.env.PATH_PREFIX || '/';

console.log('baseUrl is set to ...', baseUrl);
console.log('pathPrefix is set to ...', pathPrefix);

const globalSiteData = {
  title: "UI Demo",
  description: "UI Demo for static site generator Eleventy with Boostrap 5 and SCSS/JS compilation via laravel-mix.",
  locale: 'en',
  baseUrl: baseUrl,
  pathPrefix: pathPrefix,
}

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [600, 1200],
    formats: ['webp', 'jpeg'],
    urlPath: `${pathPrefix}img`,
    outputDir: './_site/img/' 

  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<picture>
    ${Object.values(metadata).map(imageFormat => {
    return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
  }).join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

module.exports = function (eleventyConfig) {

  // Set site title
  eleventyConfig.addGlobalData("site", globalSiteData);

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy dist/ files from laravel mix
  eleventyConfig.addPassthroughCopy("dist/"); // path is relative from root

  // Copy (static) files to output (_site)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy transformed images
  // TODO: this is executed too soon? imgs not there?
  eleventyConfig.addPassthroughCopy("img/");


  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./src/assets"); // normal (static) assets
  eleventyConfig.addWatchTarget("./dist") // laravel-mix output changes

  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  // eleventy-img config
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Base Config
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes", // this path is releative to input-path (src/)
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: pathPrefix
  };
};
