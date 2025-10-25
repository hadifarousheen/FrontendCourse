const container=document.querySelector(".container");
const card=document.querySelector(".card");
let i=1;



card.addEventListener("click",()=>{
   const newCard=document.createElement('div');
newCard.className="card"
const h1=document.createElement('h1');
h1.className="heading"
h1.innerText=i++;
newCard.appendChild(h1);
// newCard.addEventListener("click",()=>{
//     newCard.remove();
// })
container.appendChild(newCard); 
})

// for(let i=1;i<=10;i++){
// const newCard=document.createElement('div');
// newCard.className="card"
// const h1=document.createElement('h1');
// h1.className="heading"
// h1.innerText=i;
// newCard.appendChild(h1);
// newCard.addEventListener("click",()=>{
//     newCard.remove();
// })
// container.appendChild(newCard);
// }

container.addEventListener("click", (e) => {
  // Check if a card (not the "+") was clicked
  const clickedCard = e.target.closest(".card");
  if (!clickedCard) return; // Clicked outside a card

  // Don't delete the "+" card
  if (clickedCard === card) return;

  // Remove the clicked card
  clickedCard.remove();
});