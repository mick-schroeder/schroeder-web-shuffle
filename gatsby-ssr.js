/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: "en",
    className:
      "h-screen leading-normal text-lg bg-gray-100 dark:bg-gray-900 font-body text-gray-900 dark:text-gray-50 antialiased",
  })
}
