import n from "react";
const { multiplicar: i } = require("poc-lib-shared");
function u(t, o) {
  let e = 1;
  for (let r = 0; r < o; r++)
    e = i(e, t);
  return e / 3;
}
function c() {
  const t = "Hola Pow! ";
  return /* @__PURE__ */ n.createElement("div", null, t);
}
export {
  c as Greetings,
  u as potencia
};
