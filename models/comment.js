class comment {

    static all = []

    constructor({id, author_name, comment, fighter_id}) {

        this.id = id,
        this.author_name,
        this.comment,
        this.fighter_id
        
        Comment.all.push(this)

    }

};