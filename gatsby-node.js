const { registerDecorator } = require("webpack-decorators")
const decorator = {
  createElement: function (originalFunc, ...args) {
    console.log("[decorator]: Decorated React.createElement...")
    return originalFunc(...args)
  },
  Component: function (originalFunc, ...args) {
    console.log("[decorator]: Decorated React.Component...")
    return originalFunc(...args)
  },
}

registerDecorator("react", decorator, "createElement", "Component")

exports.onCreateWebpackConfig = gatsbyConfig => {
  gatsbyConfig.actions.setWebpackConfig({
    resolve: {
      alias: {
        react$: require.resolve(`webpack-decorators-react`),
        "___react-original___$": require.resolve(`react`),
      },
    },
  })

  gatsbyConfig.actions.setWebpackConfig({
    resolve: {
      alias: {
        "react-dom$": require.resolve(`webpack-decorators-react-dom`),
        "___react-dom-original___$": require.resolve(`react-dom`),
      },
    },
  })

  console.log("Webpack configurations created")
}
