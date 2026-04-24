import { say } from "cowsay";

import { moo } from "./moo.js";

const name = "boot.dev";
console.log(
  say({
    text: moo(name),
  }),
);
