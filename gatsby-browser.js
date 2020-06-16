// gatsby-browser.js
import * as React from "___react-original___"
import { registerDecorator } from "webpack-decorators"
import { DecoratorComponent } from "./src/decorators/Decorator"

export const onClientEntry = () => {
  const decorator = {
    createElement: function (originalFunc, ...args) {
      console.log("type", args[0])
      if (args[0] === "div" && args[2] && args[2] === "This is a text") {
        console.log("it's our component!")
        return React.createElement(
          DecoratorComponent,
          null,
          originalFunc(...args) //text.jsx
        )
      }
      return originalFunc(...args)
    },
  }

  registerDecorator("react", decorator, "createElement")
}
