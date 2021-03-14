var canvas = new fabric.Canvas("myCanvas");

body_Part_width = 30;
body_Part_height = 30;

player_X = 10;
player_Y = 10;

var player_object = "";
var body_Part_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);

        player_object.scaleToHeight(140);
        player_object.set({
            top: player_X,
            left: player_Y
        });
        canvas.add(player_object);

    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        body_Part_image = Img;

        body_Part_image.scaleToWidth(body_Part_width);
        body_Part_image.scaleToHeight(body_Part_height);
        body_Part_image.set({
            top: player_X,
            left: player_Y
        });
        canvas.add(body_Part_image);
    });
}
window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    //increase the size of body_Part
    if (e.shiftKey == true && keypressed == '80') {
        console.log("P and shift pressed together");
        body_Part_width = body_Part_width + 10;
        body_Part_height = body_Part_height + 10;
        document.getElementById("current_width").innerHTML = body_Part_width;
        document.getElementById("current_height").innerHTML = body_Part_height;
    }
    //decrease the size of body_Part
    if (e.shiftKey == true && keypressed == '77') {
        console.log("M and shift pressed together");
        body_Part_width = body_Part_width - 10;
        body_Part_height = body_Part_height - 10;
        document.getElementById("current_width").innerHTML = body_Part_width;
        document.getElementById("current_height").innerHTML = body_Part_height;
    }

    //To move up
    if (keypressed == '38') {
        up();
        console.log("up");
    }

    //To move down
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    //To move left
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    //To move right
    if (keypressed == '39') {
        right();
        console.log("right");
    }

    //head
    if (keypressed == '70') {
        new_image('head.jpg')
        console.log("f");
    }

    //legs
    if (keypressed == '76') {
        new_image("legs.png")
        console.log("l");
    }
    //torso
    if (keypressed == '84') {
        new_image('torso.jpg')
        console.log("t");
    }
    //hand
    if (keypressed == '72') {
        new_image('head.jpg')
        console.log("hammer.jfif");
    }
    //sheild
    if (keypressed == '83') {
        new_image('sheild.jpg')
        console.log("s");
    }
   
}

function up() {
    if (player_Y >= 0) {
        player_Y = player_Y - body_Part_height;
        console.log("body_Part image height = " + body_Part_height);
        console.log("When Up arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }

}
function down() {
    if (player_Y <= 500) {
        player_Y = player_Y + body_Part_height;
        console.log("body_Part image height = " + body_Part_height);
        console.log("When Down arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_X > 0) {
        player_X = player_X - body_Part_width;
        console.log("body_Part image width = " + body_Part_width);
        console.log("When Left arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}



function right() {
    if (player_X <= 850) {
        player_X = player_X + body_Part_width;
        console.log("body_Part image width = " + body_Part_width);
        console.log("When Right arrow key is pressed, X =  " + player_X + " , Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }


}