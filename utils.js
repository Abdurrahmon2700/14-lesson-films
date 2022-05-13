// Function orqali o'zgaruvchilarni chaqirib olish 
let $ = function (selector, node = document) {
  return node.querySelector(selector);
};

// let elHeading = $("h1");
// elHeading.textContent = "Pokimons"


// Function orqali elementlarni yaratish 
let elCreateElement = function(tagname, className, text) {
  let element = document.createElement(tagname);
  element.textContent = text;
  element.setAttribute("class", className);
  return element;
}

