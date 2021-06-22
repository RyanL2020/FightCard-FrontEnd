class Fighter {


    static all = []


    constructor({id, name, image_url, highlight_url, style, organization, wins, losses}){

        this.id = id,
        this.name = name,
        this.image = image_url,
        this.highlight_url = highlight_url,
        this.style = style,
        this.organization = organization,
        this.wins = wins,
        this.losses = losses

        Fighter.all.push(this)
        

    }

    makeACard =()=>{ console.log(this)
        
        return `
  
            <h2 id="lesseeee" data-id="${this.id}">${this.name}</h2>
            <img src="data:image/jpeg;base64,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" class="fighter-icon" />
            <img src="https://media0.giphy.com/media/tH1Sm30jZGCjZT1V8A/giphy.gif" class="fighter-icon" />
            <p> Style: ${this.style} </p>
            <p> Organization: ${this.organization} </p>
            <p> Wins: ${this.wins} </p>
            <p> Loses: ${this.losses} </p>
            

            

  
            `
    
    }
    renderFighter =(fighter)=> {  
  
        const cardDiv = document.createElement("div")

        cardDiv.classList.add("card")
          cardDiv.setAttribute("data-id", fighter.id)
          cardDiv.id = fighter.id

        cardDiv.innerHTML = this.makeACard()
        



        cardDiv.addEventListener("click", (event) => { 
            console.log("🧐✨🕶😲Ooooooooh,Classy!😎👓😉✨    >>>>  ", event.target)

            if(event.target.className === "fighter-icon"){
                console.log("With  (===)  ", event.target) }
            if(event.target.matches("img")){ 
                console.log("With  (.matches)  ", event.target) }

            if(event.target.matches(".edit-btn")){

                const editForm = document.createElement("form")
                    editForm.innerHTML = `
            
                        <br><br>
                        <h2>Editing This Fighter In a Class!✨:</h2>
                        <form class="name-change-form">
                        <br>
                        <button class="close-button">✖️CLOSE✖️THE✖️EDIT✖️FORM✖️</button>
                        <br>
                        <h4>Name:</h4>
                        <input
                        type="text"
                        name="name"
                        value="${cardDiv.querySelector("h2").innerText}"
                        placeholder="${cardDiv.querySelector("h2").innerText}"
                        class="input-text-name"
                        />        
                          <br />
                        <h4>Image URL:</h4>
                        <input
                        type="text"
                        name="image"
                        value="${cardDiv.querySelector("img").src}"
                        placeholder="${cardDiv.querySelector("img").src}"
                        class="input-text-image"
                        />        
                          <br />
                        <input
                        type="submit"
                        name="submit"
                        value="Update Fighter Name!!!!"
                        class="submit-button"
                        />
                        </form>
                        <br><br><br><br>
                        `
                      console.log(editForm)  

                    cardDiv.append(editForm)
                      console.log(">>>>>>>>", cardDiv)  


            }

        })

        


        const collectionDiv = document.querySelector("#fighter-collection")
        collectionDiv.append(cardDiv)
       
        
        
    }; 
   






}


