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
  
            <h2 id="fighter" data-id="${this.id}">${this.name}</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCvtWetSBUjXe1GcKeWV5Y20K8gaD-XkUNg&usqp=CAU"
            <h4><a href="https://www.youtube.com/watch?v=LWE79K2Ii-s">Highlights</a></h4>
            <h4> Style: ${this.style} </h4>
            <h4> Organization: ${this.organization} </h4>
            <h4>  Wins: ${this.wins} </h4>
            <h4> Loses: ${this.losses} </h4>
            

            

  
            `
    
    }
    renderFighter =(fighter)=> {  

        const cardDiv = document.createElement("div")

        cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", fighter.id)
        cardDiv.id = fighter.id

        cardDiv.innerHTML = this.makeACard()
        


 
        cardDiv.addEventListener("click", (event) => { 
            console.log("fighter clicked", event.target)
            if(event.target.className === "fighter-icon"){
                console.log("With  (===)  ", event.target) }
            if(event.target.matches("img")){ 
                console.log("With  (.matches)  ", event.target) }
            if(event.target.matches(".edit-btn")){
                const editForm = document.createElement("form")
                    editForm.innerHTML = `
            
                        <br><br>
                        <h2>Editing This Fighter In a Class!:</h2>
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

