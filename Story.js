class Story{
 constructor(){
this.trajectory=[]
this.roads=[]

 }
// follow(){
    
//     var position = [thief.x,thief.y];
//     this.trajectory.push(position);
    
//     for(var i=0; i<this.trajectory.length; i++){
//         police.x=this.trajectory[i][0]
//       }}


   start(){

if(gameState==='Play'){
    // story.hide()
     for (var  i = 20;i<780;i=i+10) {
         stroke('green')
        this.roads.push(createSprite(600,i,1200,20))
        
         
      
    //console.log(this.roads)
    
    
}
console.log(this.roads[1])
for(var b=0;b<this.roads.length;b++){
this.roads[b].addImage('image',roadImg)
}
    drawSprites()
}

}
}
