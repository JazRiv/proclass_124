function setup(){
    canvas = createCanvas(300, 300);
    background("green");
    video = createCapture(VIDEO);
    video.position(300, 100);
    video.size(300, 300);
    poses = ml5.poseNet(video, modelolisto);
    poses.on("pose", obtener);
}

function draw(){
    
}

function modelolisto(){
    console.log("modelo listo");
}

function obtener(resultado){
    if(resultado.length > 0){
        console.log(resultado);
    }
}