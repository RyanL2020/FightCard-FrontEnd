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

            <img src=${this.image} alt= ${this.name}/> 
            
            <p>Style: ${this.style} </p>
            <p class="p-organization">Organization: ${this.organization} </p>
            <p class="p-wins">Wins: ${this.wins} </p> 
            <p class="p-loses">Loses: ${this.losses} </p>
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
            
    }


        
        

    
    




};
