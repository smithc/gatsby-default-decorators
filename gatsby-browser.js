// gatsby-browser.js
import { registerDecorator } from "webpack-decorators"
import { DecoratorComponent } from "./src/decorators/Decorator"

export const onClientEntry = () => {
  const decorator = {
    createElement: function (originalFunc, ...args) {
      const elementFactory = (type, config, children) => originalFunc(type, config, children);

      const type = args[0];
      const isFunc = typeof type === 'function';
      const isProvider = isFunc && type.name === 'Text';

      if (isProvider || (args[0] === "div" && args[2] && args[2] === "This is a text")) {
        const element = elementFactory(
          DecoratorComponent,
          { title: "cooperman" },
          elementFactory(...args)
        );

        return element;
      }

      return originalFunc(...args)
    },

    useEffect: function (originalFunc, ...args) {
      const [ effect, deps ] = args;
      const callback = () => {        
        try {
          return effect();
        }
        catch (ex) {
          console.error(ex);
        }
      };

      return originalFunc(callback, deps);
    }
  }

  registerDecorator("react", decorator, "createElement", "useEffect");
}