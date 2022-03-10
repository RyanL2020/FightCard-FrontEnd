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
        let image = event.target.image.value
        const style = event.target.style.value
        const organization = event.target.organization.value
        const wins = event.target.wins.value
        const losses = event.target.losses.value
        const submit = event.target.submit

        if (image === "") {
            image = "data:image/jpeg;base64,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"
        }
        fetch(this.URL_FIGHTER, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({

                "name": name,
                "image_url": image, 
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
        newFighterForm.reset()
    })
    }

            //delete fighter fetch

        static deleteFighters(){
        
            const fighterCollection = document.querySelector('#fighter-collection') 
            fighterCollection.addEventListener('click', event =>{ event.preventDefault();

            if (event.target.matches('.delete-btn')) { 
                console.log(event.target)

            const id = event.target.dataset.id
            const koFighter = document.getElementById(id)
            fetch(`${this.URL_FIGHTER}/${id}`, 

            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }

            })

            koFighter.remove()
         }
      })
            
    }

        //Comments Fetch
    static URL_COMMENT = "http://localhost:3000/comments"
    static fetchComments(){
    fetch(this.URL_COMMENT).then(response => response.json())
    .then(json => { console.log(json);
    json.forEach(comment => {  console.log(comment)

        setTimeout(function() {
            const newComment = new Comment(comment)
        console.log(newComment)
        newComment.renderComment(comment)}, 
        5000);

    
    }) 
    })
    }
        
        
}      



