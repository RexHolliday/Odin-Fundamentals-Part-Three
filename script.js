function add7() {
    return (+prompt("Pick a number")+7);
  }

function multiply() {
    return (+prompt("Pick a number") * (+prompt("Pick another Number")))
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function lastLetter(string) {
    return string.charAt(string.length -1);
}