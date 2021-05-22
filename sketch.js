var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    // .ref()
    var ball_P=database.ref("ball") 
    // .on()
    // what? => "value"
    // which function to do after getting data
ball_P.on("value",read_position)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write_position(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write_position(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write_position(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write_position(0,+1);
    }
    drawSprites();
}

function read_position(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function write_position(x,y){
    // .set()
    database.ref("ball").set({
    x:position.x+x,
    y:position.y+y    
    })
    
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
