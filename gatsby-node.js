const { func } = require("prop-types")
const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWebLinksJson {
        edges {
          node {
            channel
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Error loading channels", queryResult.errors)
    return
  }

  // Generate single project pages
  const channels = result.data.allWebLinksJson.edges

  //console.log(channels)

  channels.forEach(edge => {
    if (edge.node.channel) {
      const channelName = edge.node.channel.toLowerCase()

      createPage({
        path: `/channels/${channelName}`,
        component: path.resolve(`./src/templates/channels.js`),
        context: {
          channel: edge.node.channel,
        },
      })
    }
  })
}
