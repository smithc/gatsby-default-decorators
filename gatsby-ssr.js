// gatsby-ssr.js
import { registerDecorator } from "webpack-decorators"
// This code can be executed immediately
const decorator = {
  createElement: function (originalFunc, ...args) {
    console.log("[decorator SSR]: Decorated React.createElement...")
    return originalFunc(...args)
  },
}
registerDecorator("react", decorator, "createElement")
