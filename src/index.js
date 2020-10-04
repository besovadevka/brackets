module.exports = function check(str, bracketsConfig) {
let newBr = bracketsConfig.join(" ").replace(/,/g, "").split(" ");
let count = newBr.length;
for (let h = 0; h <= count; h++) {
    newBr.forEach ((item) => {
        while (str.includes(item)) {
            for (let i = 0; i < newBr.length; i++) {
                while (str.includes(newBr[i])) {
                    str = str.replace(newBr[i], "");
                    console.log(str);
                }
            }
        }
    })
}
if (str === "") {
    return true;
} else {
    return false;
}
}
