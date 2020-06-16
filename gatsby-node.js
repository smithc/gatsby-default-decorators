exports.onCreateWebpackConfig = ({ actions }, configOptions) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        react$: require.resolve(`webpack-decorators-react`),
        "___react-original___$": require.resolve(`react`),
      },
    },
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "react-dom$": require.resolve(`webpack-decorators-react-dom`),
        "___react-dom-original___$": require.resolve(`react-dom`),
      },
    },
  })

  console.log("Webpack configurations created")
}
