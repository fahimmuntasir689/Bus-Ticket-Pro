// function setBG(elements) {
//     const buttons = document.querySelectorAll(elements);
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             // if (button.clicked == true) {
//             //     console.log("hello");
//             // }
//             // // console.log('hello');

//             button.classList.add('bg-[#1DD100]');
//             console.log('hello');


//             ;
//         })
//     })

// }
// let clickCount = 0;

// function SelectedSeats(elements) {
//     var buttons = document.querySelectorAll(elements);
//     const selectedSeats = document.getElementById('selected-seats')
   
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function () {

//             clickCount ++;
//             selectedSeats.innerHTML =
//                   clickCount ;
//                 return clickCount;
//         });

//         ;
//     })

    // let returnedValue = selectedSeats('.btn');
    // console.log(returnedValue);

    // let click = SelectedSeats('.btn');
    // console.log(click);








// function random(elements) {
//     var count = 0
//     var buttons = document.querySelectorAll(elements);
//     buttons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             count++;
//             var b = document.getElementById('selected-seats');
//             b.innerText = count;
//             return count;


//         })
//     })



// }


function removeBG(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-[#1DD100]');

}

// function success() {
// const elementMain = document.getElementById('next-btn');
// elementMain.addEventListener('click', function () {
//     const elementOne = document.getElementById('primary-part');
//     elementOne.classList.add('hidden');
//     const elementTwo = document.getElementById('second-part');
//     elementTwo.classList.remove('hidden');


// })}

// }

// function returningMainUI() {
// const elementMinor = document.getElementById('last-btn');
// elementMinor.addEventListener('click', function () {

//     const elementOne = document.getElementById('primary-part');
//     elementOne.classList.remove('hidden');
//     const elementTwo = document.getElementById('second-part');
//     elementTwo.classList.add('hidden');

// }
// )}

// function apply(elementID) {
//     const element = document.getElementById('apply')
//     element.addEventListener('click', function () {
//         console.log('hello')
//         if (element.clicked == true) {
//             alert("button was clicked");
//         }
//     })
// }

// var buttonclicked; 
// $("#testbtn").click(function(){ 
// if( buttonclicked!= true ) { 
//     buttonclicked= true; 
//     alert("Button is clicked for first time"); 
// }else{ 
//     alert("Button was clicked before"); 
// } 
// });


// let BtnEle = document.querySelector(".Btn");
// let resEle = document.querySelector(".result");
// let clickCount = 0;
// BtnEle.addEventListener("click", () => {
//     clickCount++;
//     resEle.innerHTML =
//         "The button has been clicked " + clickCount + " times ";
// });