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

            <img src=${this.image} alt ${this.name}/> 
            <h4> Style: ${this.style} </h4>
            <h4> Organization: ${this.organization} </h4>
            <h4>  Wins: ${this.wins} </h4>
            <h4> Loses: ${this.losses} </h4>
            <button data-id="${this.id}" class="delete-btn"> DELETE FIGHTER </button>
            
            `
            

            

  
    
    }
    renderFighter =(fighter)=> {  

        const cardDiv = document.createElement("div")

        cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", fighter.id)
        cardDiv.id = fighter.id

        cardDiv.innerHTML = this.makeACard()
    
        
        
        
            
            
            const collectionDiv = document.querySelector("#fighter-collection")
            collectionDiv.append(cardDiv)



        
        
    }; 

    
    




}

