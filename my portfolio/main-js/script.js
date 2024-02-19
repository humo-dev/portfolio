const burger = document.querySelector('#burger');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
     header.classList.toggle('open');
});

function splitting(){
   //selected the footerText
   const footerText = document.querySelector("#footerText");
   // make the brake the words in to slides
   const wordArr = footerText.textContent.split('');

   footerText.innerHTML = ""
   
   for(let i = 0; i < wordArr.length; i++){
        footerText.innerHTML += `<span>${wordArr[i]}</span>`
   }
   
   let letterIndex = 0;
   
   const spans = footerText.querySelectorAll("span")
   
   let timer = setInterval(() => {
      spans[letterIndex].classList.add("show")
   
      letterIndex++
   
      if(letterIndex === spans.length){
       clearInterval(timer)
      }
   
   }, 120)
   
}
splitting()


function firstModal(){

   const firstModalOpen = document.querySelector("#firstModalOpen");
   const modalFirst = document.querySelector("#modalFirst");
   const firstRemove = document.querySelector("#firstRemove");

   firstModalOpen.addEventListener("click", () => {
      modalFirst.classList.add("open")
   })


   firstRemove.addEventListener("click", () => {
      modalFirst.classList.remove("open")
   })

}
firstModal()


function secondModal(){

   const secondModalOpen = document.querySelector("#secondModalOpen");
   const modalSecond = document.querySelector("#modalSecond");
   const clickRemove = document.querySelector("#clickRemove");

   secondModalOpen.addEventListener('click', () => {
        modalSecond.classList.add("open")
   })

   clickRemove.addEventListener('click', () => {
      modalSecond.classList.remove("open")
   })
}
secondModal()


function threedModal(){

   const threedModal = document.querySelector("#threedModal");
   const threedModalOpen = document.querySelector("#threedModalOpen");
   const removeThreed = document.querySelector("#removeThreed");

   threedModalOpen.addEventListener('click', () => {
      threedModal.classList.add("open")
   })

   removeThreed.addEventListener('click', () => {
      threedModal.classList.remove("open")
   })
}
threedModal()


function lastModal(){

   const fourModalOpen = document.querySelector("#fourModalOpen");
   const modalFour = document.querySelector("#modalFour");
   const deletFour = document.querySelector("#deletFour") 

   fourModalOpen.addEventListener('click', () => {
      modalFour.classList.add('open')
   })

   deletFour.addEventListener('click', () => {
      modalFour.classList.remove('open')
   })
     
}
lastModal()


function scrollToElement(elementSelector, instance = 0){
   // select all elements that match the given selector
   const allElements = document.querySelectorAll(elementSelector);
   // check if there are elements matching the selector and if the requested insatance exsixt
   if(allElements.length > instance) {
      allElements[instance].scrollIntoView({
          behavior: "smooth"
      });
   }
}
scrollToElement();

const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");


link1.addEventListener('click', () => {
   scrollToElement(".header-3")
})

link2.addEventListener('click', () => {
   scrollToElement(".header-4")
})

link3.addEventListener('click', () => {
   scrollToElement(".header-2")
})

link4.addEventListener("click", () => {
   scrollToElement(".header-7")
})


const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
     event.preventDefault()

      const elements = event.target.elements;

      const data = {
         name: elements.name.value,
         email: elements.email.value,
         msg: elements.msg.value
      }

      console.log(data)
})
