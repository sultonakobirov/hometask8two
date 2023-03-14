let i = 0
let j = 0
let max = 8
let space = ""
let star = ""

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
}