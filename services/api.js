class Api {
    
    // fighter fetch

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
        const highlight = event.target.highlight.value
        const style = event.target.style.value
        const organization = event.target.organization.value
        const wins = event.target.wins.value
        const losses = event.target.losses.value
        const submit = event.target.submit
        
        fetch(this.URL_FIGHTER, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({

                "name": name,
                "image_url": image, 
                "highlight_url": highlight,
                "style": style,
                "organization": organization,
                "wins": wins,
                "losses": losses

            })
        })
        .then(response => response.json())
        .then(fighterPosted => {console.log(fighterPosted)
        const newFighter = new Fighter(fighterPosted)
        newFighter.renderFighter(fighterPosted)
        })
    
    })
    }

            //delete fighter fetch
        static deleteFighters(){
            const fighterCollection = document.querySelector('#fighter-collection') 
            fighterCollection.addEventListener('click', event =>{ event.preventDefault();
            if (event.target.matches('.delete-btn')) { 
                console.log(event.target)
            const id = event.target.dataset.id
            const deleteFighter = document.getElementById(id)
            fetch(`${URL_FIGHTER}/${id}`, 
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }

            })
            .then(response => response.json())
            .then(
                deleteFighter.remove()
            )
        }
        })
            
        }

        //Comments Fetch
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
