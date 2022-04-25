class FightCard {

    static all = []

    constructor({id, fighter_id, comment_id}){

        this.id = id,
        this.fighter_id,
        this.comment_id


        FightCard.all.push(this)
        

    }
}