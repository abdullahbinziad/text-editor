// getting All Reference
const textBold = document.getElementById("text-bold");
const textItalic = document.getElementById("text-italic");
const textUnderLine = document.getElementById("text-under-line");
const textLeft = document.getElementById("text-left");
const textRight = document.getElementById("text-right");
const textCenter = document.getElementById("text-center");
const textJustify = document.getElementById("text-justify");
const textSize = document.getElementById("text-size");
const textColor = document.getElementById("text-color");

//geting align btn by class
const alignBtns = document.getElementsByClassName("align-btn");

//getting the text input Reference
const myText = document.getElementById("my-text");

// btn active function
for (let i = 0; i < alignBtns.length; i++) {
  alignBtns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}

//making bold
textBold.addEventListener("click", function () {
  myText.classList.toggle("bold");
  textBold.classList.toggle("active");
});
//making Italic
textItalic.addEventListener("click", function () {
  myText.classList.toggle("italic");
  textItalic.classList.toggle("active");
});
//making Underline
textUnderLine.addEventListener("click", function () {
  myText.classList.toggle("underline");
  textUnderLine.classList.toggle("active");
});
//making left align
textLeft.addEventListener("click", function () {
  myText.style.textAlign = "left";
});
//making center
textCenter.addEventListener("click", function () {
  myText.style.textAlign = "center";
});
//making right
textRight.addEventListener("click", function () {
  myText.style.textAlign = "right";
});
//making justify
textJustify.addEventListener("click", function () {
  myText.style.textAlign = "justify";
});
//Adjusting Font Size
textSize.value = "16";
textSize.addEventListener("change", function () {
  myText.style.fontSize = `${textSize.value}px`;
});
//making color
textColor.addEventListener("input", function () {
  myText.style.color = textColor.value;
});
