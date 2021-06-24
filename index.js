
console.log('Hello')
let fighterForm = false;

document.addEventListener('click', (event)=>{ console.log("You clicked ", event.target) }  )
document.addEventListener('DOMContentLoaded', () => {
    api.fetchFighters()
    api.fetchComments()
    const fighterFormContainer = document.querySelector('.container');
    const addBtn = document.querySelector('#new-fighter-button');
     //addBtn.addEventListener("click", () => {
        fighterForm = !fighterForm;
        if (fighterForm) {
        fighterFormContainer.style.display = "block";
        } else {
        fighterFormContainer.style.display = "none";
        }
    const newFighterForm = document.querySelector('.add-fighter-form')
    newFighterForm.addEventListener('submit', event =>{ event.preventDefault
    const name = event.target.value
    api.postFetchFighters()   })







});





//addBtn.addEventListener('click', () => { 
//    fighterForm = !fighterForm;
//    if (fighterForm) {
//        fighterFormContainer.style.display = 'block';
//    } else {
//        fighterFormContainer.style.display = 'none';
//    }
//});
