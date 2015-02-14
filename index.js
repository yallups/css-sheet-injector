module.exports = {
  injectSheet: makeSheet,
  addCSSRule: addCSSRule
};

function makeSheet () {
  var sheet;
  var head = document.head;
  var style = document.createElement("style");

  // WebKit hack
  style.appendChild(document.createTextNode(""));

  head.insertBefore(style, head.firstElementChild);

  sheet = style.sheet;
  sheet.addCSSRule = addCSSRule.bind(sheet, sheet);
  return sheet;
}

function addCSSRule(sheet, selector, rules, index) {
  if("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  }
  else if("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
  }
}