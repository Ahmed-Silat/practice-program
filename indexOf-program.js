var text = "Hello world";
function customIndexOf(param) {
  for (var i = 0; i < text.length; i++) {
    if (param === text[i]) {
      return i;
    }
  }
  return i - text.length - 1;
}
console.log(customIndexOf("r"));
