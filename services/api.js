class Api {
    


    static URL_FIGHTER = "http://localhost:3000/fighters"
    static fetchFighters(){
    fetch(this.URL_FIGHTER).then(response => response.json())
    .then(json => { console.log(json);
    json.forEach(fighter => {  console.log(fighter) 

    const newFighter = new Fighter(fighter)
    newFighter.renderFighter(fighter)


    }) 

    })
 }

   //Post Fetch

   
    static postFetchFighters(){
        
        const newFighterForm = document.querySelector('.add-fighter-form')
        console.log(newFighterForm)
        newFighterForm.addEventListener('submit', event => { event.preventDefault();

        const name = event.target.name.value
        const image = event.target.image.value
        const submit = event.target.submit
        
        fetch(this.URL_FIGHTER, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                image_url: image 
            })
       })
       .then(response => response.json())
       .then(fighterPosted => {console.log(fighterPosted)
        const newFighter = new Fighter(fighterPosted)
        newFighter.renderFighter(fighterPosted)
       
        })
    
    })
   
}

    static URL_COMMENT = "http://localhost:3000/comments"
    static fetchComments(){
    fetch(this.URL_COMMENT).then(response => response.json())
    .then(json => { console.log(json);
    json.forEach(comment => {  console.log(comment) 
    const newComment = new Comment(comment)
    console.log(newComment)
    newComment.renderComment(comment)

    
    }) 
    })
}
        

}
