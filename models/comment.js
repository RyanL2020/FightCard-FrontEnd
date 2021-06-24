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
        
        <h2 id="${this.id}" data-id="${this.id}"></h2>
        <h4> Name: ${this.author_name}</h4>
        <p> Comment: ${this.detail}  </p> `
    
    
    
    }

    renderComment = (comment) => {

        const cardDiv = document.createElement('div')

        cardDiv.classList.add('card')
        cardDiv.setAttribute('data-id', comment.id)
        cardDiv.innerHTML = this.makeCardDiv()

        const collectionDiv = document.getElementById(`${comment.fighter_id}`)

        collectionDiv.append(cardDiv)



    }

};