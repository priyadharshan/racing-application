import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import { setGlobalConfig } from "@storybook/testing-react";
import { parameters, decorators } from "../.storybook/preview"; // path of your preview.js file
import { format } from "util";

setGlobalConfig({ parameters, decorators });

const error = global.console.error;
global.console.error = function (...args) {
  error(...args);
  throw new Error(format(...args));
};

jest.setTimeout(10000);
