
console.log('Hello')

let fighterForm = false;

document.addEventListener('click', (event)=>{ console.log("You clicked ", event.target) }  )
document.addEventListener('DOMContentLoaded', () => {
    Api.fetchFighters()
    //setInterval(Api.fetchComments(), 10000);
    const fighterFormContainer = document.querySelector('.container');
    const addBtn = document.querySelector('#new-fighter-btn');
    addBtn.addEventListener('click', () =>  {  console.log('showForm')
    
    fighterForm = !fighterForm;
    if (fighterForm) {
        fighterFormContainer.style.display = "block";
    } else {
        fighterFormContainer.style.display = "none";
    }
    
})




Api.postFetchFighters()
Api.fetchComments()

    Api.deleteFighters()







});





//addBtn.addEventListener('click', () => { 
//    fighterForm = !fighterForm;
//    if (fighterForm) {
//        fighterFormContainer.style.display = 'block';
//    } else {
//        fighterFormContainer.style.display = 'none';
//    }
//});
