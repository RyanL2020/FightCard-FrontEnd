class Comment {

    static all = []

    constructor({id, author_name, detail, fighter_id}) {

        this.id = id,
        this.author_name = author_name,
        this.detail = detail,
        this.fighter_id = fighter_id
        
        Comment.all.push(this)

    }

    makeCardDiv = () => { console.log(this)
    
        return `<br><br>
        <div class="overlay__text">   
        <p id="${this.id}" data-id="${this.id}"></p>
        <p> Name: ${this.author_name}</p>
        <p> Comment: ${this.detail}  </p> 
        </div>  
        `
    
    
    
    }

    renderComment = (comment) => {

        const cardDiv = document.createElement('div')

        cardDiv.classList.add('card__overlay')
        cardDiv.setAttribute('data-id', comment.id)
        cardDiv.innerHTML = this.makeCardDiv()

        const collectionDiv = document.getElementById(`${comment.fighter_id}`)

        collectionDiv.append(cardDiv)
        
        
    }
}