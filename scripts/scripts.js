

let clickCount = 0;

function seatClick() {
   

   // SelectedSeats('.btn');
   function SelectedSeats(elements) {
      var buttons = document.querySelectorAll(elements);
      const selectedSeats = document.getElementById('selected-seats')
   
      buttons.forEach(function (button) {
         button.addEventListener('click', function () {
            console.log('hello')
   
            clickCount++;
            selectedSeats.innerHTML =
               clickCount;
            return clickCount;
         });
   
         ;
      })
   }

   SelectedSeats('.btn');
   


   function setBG(elements) {
      const buttons = document.querySelectorAll(elements);
      buttons.forEach(function (button) {
         button.addEventListener('click', function () {

            button.classList.add('bg-[#1DD100]');
            console.log('hello');


            ;
         })
      })
   }


   setBG('.btn');


}



function success() {
   const elementMain = document.getElementById('next-btn');
   elementMain.addEventListener('click', function () {
      const elementOne = document.getElementById('primary-part');
      elementOne.classList.add('hidden');
      const elementTwo = document.getElementById('second-part');
      elementTwo.classList.remove('hidden');


   })
}



function returningMainUI() {
   const elementMinor = document.getElementById('last-btn');
   elementMinor.addEventListener('click', function () {

      const elementOne = document.getElementById('primary-part');
      elementOne.classList.remove('hidden');
      const elementTwo = document.getElementById('second-part');
      elementTwo.classList.add('hidden');

   }
   )
}