import React from "react";

function parseString(inputString) {
  const operators = ["+", "-", "/", "*"];
  const tokens = [];
  let currentToken = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (operators.includes(char)) {
      if (currentToken !== "") {
        tokens.push(currentToken);
      }
      tokens.push(char);
      currentToken = "";
    } else {
      currentToken += char;
    }
  }

  if (currentToken !== "") {
    tokens.push(currentToken);
  }

  return tokens;
}
export default perseString;
