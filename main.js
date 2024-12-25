
let para = document.getElementById("colorCode");
para.textContent = "#FFFFFF";
// console.log(para)

document.getElementById("generate").onclick = function()
{
    let randomNumber = Math.random();
    let hexValue = "#"+ Math.floor(randomNumber*16777215).toString(16);
    para.textContent= hexValue;
    document.body.style.backgroundColor=hexValue;
};