class Game{
    constructor(){
        
    }

    //get the gameState
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    //update the gameState
    update(state){
          database.ref('/').update({
              gameState: state
          })
      }
    //will check the gameState value, if 0, it will perform the functions
      start(){
          if(gameState === 0){
              player = new Player();
              player.getCount();
              form = new Form();
              form.display();
          }
      }
}