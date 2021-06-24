class api {


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
    fetch(URL_FIGHTER, {
        method: "Post",
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
        name: 'name',
        image: 'image_url'
        })
    })
    .then(response => response.json())
    .then(fighterPosted => renderFighter(fighterPosted) )

    



}
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
        
//
//    static connorID = 1
//
//static fetch_Comments() {
    //    fetch(`${this.URL_FIGHTER}/${connorID}/comments`).then(response => response.json())
    //    .then(commentsArray => {console.log(commentsArray);
    //        const collectionDiv = document.querySelector('#comments')
    //        console.log(collectionDiv)
    //        collectionDiv.innerHTML = ''
//
    //        commentsArray.forEach(comment => {console.log(comment)
    //        const newComment = new Comment(comment)
    //        newComment.renderComment(comment)
    //    })
    //    }) 
    //
}
