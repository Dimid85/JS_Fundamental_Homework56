//Завдяння 1
/*function showListItems() {
   const items = document.querySelectorAll(".list li");
   let output = "";
   for (let i = 0,j=items.length-1; i < j; ++i,--j)
   {
      output +=items[i].textContent + ", "+items[j].textContent + ", ";
      }
   alert(output);   
}
showListItems();*/

//Завдяння 2
/*const bigHeader = document.querySelector("h1");
bigHeader.style.backgroundColor = 'green';
const paragraph = document.querySelectorAll("#myDiv p");
paragraph[0].style.fontWeight = '900';
paragraph[1].style.color = 'red';
paragraph[2].style.textDecoration = 'underline';
paragraph[3].style.fontStyle = 'italic';
let div = document.createElement("div");
div.innerHTML = "Makemehorizontal!";
div.style.left = "100px";
div.style.position = "absolute";
document.getElementById("myDiv").appendChild(div);

const horizontalText = document.querySelectorAll('#myList li');
horizontalText.forEach(item => item.remove());

const invisibleText = document.querySelector('span');
invisibleText.style.display = 'none';*/


//Завдяння 3
/*let main = document.createElement("main");
main.className = "mainClass";
document.body.prepend(main);

const mainTag = document.querySelector(".mainClass");
let div = document.createElement("div");
div.className = "myDiv";
mainTag.appendChild(div);

const divTag = document.querySelector(".myDiv");
let paragraph = document.createElement("p");
paragraph.innerHTML = "First paragraph";
divTag.appendChild(paragraph);*/


//Завдяння 4

/*const submitButton = document.querySelector(".btn");
         const outBlock = document.querySelector(".out");
         submitButton.addEventListener("click", function(event) {
            event.preventDefault();
         
            const inputFields = document.querySelectorAll(".arr");
            const fieldsArray = [...inputFields];
         
            let output = "";
         
            fieldsArray.map(function(field) {
               const fieldName = field.getAttribute("data-form");
               const fieldValue = field.value;
               output += `${fieldName}: ${fieldValue}<br>`;
            });
            outBlock.innerHTML = output;
         });*/


         //Завдяння 5
         /*const inputFields = document.querySelectorAll(".circle");
         const fieldsArray = [...inputFields];
                  console.log(fieldsArray);          
         fieldsArray.map(function(field) {
            const fieldName = field.getAttribute("data-anim");
            field.classList.add(fieldName);
         });*/


         //Завдяння 6
    
         /*document.addEventListener("DOMContentLoaded", function () {
            const initialPrice = document
              .querySelector(".color.active")
              .getAttribute("data-price");
            const initialColor = document
              .querySelector(".color.active")
              .getAttribute("color");
            document.getElementById("outprice").textContent = initialPrice;
          
            const shoeImages = Array.from(document.querySelectorAll(".shoe"));
            shoeImages.map(function (shoeImage) {
              if (shoeImage.getAttribute("color") === initialColor) {
                shoeImage.classList.add("show");
              } else {
                shoeImage.classList.remove("show");
              }
            });
          
            const colorVariations = Array.from(document.querySelectorAll(".color"));
            colorVariations.map(function (variation) {
              variation.addEventListener("click", function () {
                colorVariations.map(function (variation) {
                  variation.classList.remove("active");
                });
                this.classList.add("active");
                const price = this.getAttribute("data-price");
                const color = this.getAttribute("color");
                document.getElementById("outprice").textContent = price;
                shoeImages.map(function (shoeImage) {
                  if (shoeImage.getAttribute("color") === color) {
                    shoeImage.classList.add("show");
                  } else {
                    shoeImage.classList.remove("show");
                  }
                });
              });
            });
          });*/
          
            //Завдяння 7

          function setDigitalClock() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
          
            const digitalClock = document.getElementById('digital-clock');
            const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
            digitalClock.textContent = formattedTime;
          
            setTimeout(setDigitalClock, 1000);
          }
          
          function formatTime(time) {
            return time < 10 ? '0' + time : time;
          }
          
          setDigitalClock();
          