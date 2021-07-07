class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
   update(){
     var playerIndex = "players/player"+this.index;
     //ref 
     var pRef = database.ref(playerIndex);
     pRef.set({
       name: this.name,
       distance: this.distance 
     })
   }
   //only 1 copy is mase : attahed to the class and not the objects
  static getPlayerInfo(){
     var pRef = database.ref('players');
     pRef.on("value",(data)=>{
       allPlayers = data.val();
     })
   }

}