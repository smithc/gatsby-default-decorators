// gatsby-browser.js
import { registerDecorator } from "webpack-decorators"

export const onClientEntry = () => {
  const decorator = {
    createElement: function (originalFunc, ...args) {
      console.log("[decorator client]: Decorated React.createElement...")
      return originalFunc(...args)
    },
  }

  registerDecorator("react", decorator, "createElement")
}
