class Player{
    constructor(){}

    //retrieve the playerCount
    
    getCount(){
      var playerCountRef = database.ref("playerCount") ;
      playerCountRef.on("value", function(data){
          playerCount = data.val();
      })
    }
    //update the PlayerCount
    updateCount(count){
        database.ref("/").update({
        playerCount: count
        })
    }
    //update the playerName
    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: name,
        })
    }
}