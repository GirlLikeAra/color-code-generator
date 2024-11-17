let firstContainer = document.getElementById( "firstContainer")
let secondContainer = document.getElementById( "secondContainer")
let thirdContainer = document.getElementById( "thirdContainer")
let button = document.getElementById( "button")

let code = [ "A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



button.addEventListener("click", function(){

    let result1 = "#"
    

   for (let colorCode = 0; colorCode < 6; colorCode++ ){
        let randomNumber= Math.floor(Math.random() * code.length);
        result1 += code[randomNumber];
    }

    firstContainer.style.backgroundColor = result1;
    firstContainer.textContent = result1;

    //for second container

    let result2 = "#"
    

    for (let colorCode2 = 0; colorCode2 < 6; colorCode2++ ){
         let randomNumber2= Math.floor(Math.random() * code.length);
         result2 += code[randomNumber2];
     }
 
     secondContainer.style.backgroundColor = result2;
     secondContainer.textContent = result2;

     //for third container

     let result = "#"
    

     for (let colorCode3 = 0; colorCode3 < 6; colorCode3++ ){
          let randomNumber3= Math.floor(Math.random() * code.length);
          result += code[randomNumber3];
      }
  
      thirdContainer.style.backgroundColor = result;
      thirdContainer.textContent = result;
})