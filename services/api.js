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
}