class Form{
    constructor(){
        this.heading=createElement('h1') 
        this.instructions=createElement('h4')
        this.story1=createElement('h4')
        this.story2=createElement('h4')
        this.story3=createElement('h4')
       button=createButton('Start!') 
       this.trajectory=[]
    }
    hide(){
        this.heading.hide()
        this.instructions.hide()
        this.story1.hide()
        this.story2.hide()
        this.story3.hide()
        button.hide()
    }
    story(){
        if(gameState==='Story'){
        this.heading.html('erf')
        this.heading.style("color",rgb(255,0,93))
  this.heading.position(600,100)
this.instructions.html('Instructions:  space to jump,right arrow to turn right,left arrow to turn left')
this.instructions.position(50,200)
this.instructions.style("color","blue")
this.story1.html('Story:  You are  a thief  and you broke out of the prison and the police is behind you (they have many weapons)')
this.story1.position(50,220)
this.story1.style("color",rgb(255,255,0))
this.story2.html("there is an escape veichle waiting for you (you don't have much time as they will leave after some minutes)")
this.story2.style("color",rgb(251,232,0))
this.story2.position(50,240)
        this.story3.html("there are many roads in front of you with a lot of traffic ")
        this.story3.position(50,260)
        this.story3.style("color",rgb(201,212,0))
button.position(600,600)
button.style('background',rgb(255,0,67))

button.mousePressed(()=>{
    gameState='Play'
    this.heading.hide()
        this.instructions.hide()
        this.story1.hide()
        this.story2.hide()
        this.story3.hide()
        button.hide()
})
        }}
    }