var playturn1 = document.getElementById("playerturn1");
var playturn2 = document.getElementById("playerturn2");
var starting = false;
var display_won = document.getElementById("who_won");
var player_turn = 1; // 1 for player 1 and 2 for player 2
//creating 1d array
var arr = new Array(3);
//creating 2d array

for(var i = 0;i<arr.length;i++){
    arr[i] = [];
}
initializing_zero();
//initializing the array with 0
// 0 means nothing
// 1 means X (cross)
// 2 means O (circle)
function initializing_zero(){
for(var i = 0;i<arr.length;i++){
    for(var j = 0; j<arr.length;j++){
        arr[i][j] = 0;
    }
}}

function who_won(){
    var anchor_point;
    for(var i=0;i<3;i++){
        anchor_point = arr[i][i];
        if(anchor_point == 0){
            continue;}
        else if(i==0){
            if(arr[0][1] == arr[0][2] && arr[0][1]== anchor_point)
                return anchor_point;
            else if(arr[1][0] == arr[2][0] && arr[1][0] == anchor_point)
                return anchor_point;
            else if(arr[1][1] == arr[2][2] && arr[1][1] == anchor_point)
                return anchor_point;
        }
        else if(i==1){
            if(arr[1][0] == arr[1][2] && arr[1][0] == anchor_point)
                return anchor_point;
            else if(arr[0][1] == arr[2][1] && arr[0][1] == anchor_point)
                return anchor_point;
            else if(arr[0][2] == arr[2][0] && arr[0][2] == anchor_point)
                return anchor_point;
        }
        else if(i==2){
            if(arr[2][0] == arr[2][1] && arr[2][0] == anchor_point)
                return anchor_point;
            else if(arr[0][2] == arr[1][2] && arr[0][2] == anchor_point)
                return anchor_point;
        }
    }
    return 0;
}


function getresponse(clicked_id){
    // console.log(clicked_id);
    if(starting == true){
    display_player_chance(player_turn);
    fill_grid(clicked_id);
    if(who_won() == 1 || who_won() == 2){
        starting = false;
        //console.log(who_won());
        xyz(who_won());
        playturn1.style.visibility = "hidden";
        playturn2.style.visibility = "hidden";
    }
    else if(who_won() == 0 && is_full(arr) == true){
        starting = false;
        //console.log(who_won());
        xyz(who_won());
        playturn1.style.visibility = "hidden";
        playturn2.style.visibility = "hidden";
    }
    }
}
function xyz(x){
    display_won.style.visibility = "visible";
    if(x == 1)
    display_won.innerHTML = "Player X Won";
    else if(x == 2)
    display_won.innerHTML = "Player O Won";
    else if(x == 0)
    display_won.innerHTML = "Its a Tie";
}

function is_full(arr){
    var count = 0;
    for(var i=0; i<3; i++){
        if(arr[i].indexOf(0) == -1)
            count+=1;
    }
    if(count == 3)
        return true;
    else
        return false;
}

function display_player_chance(player_turn){
    if(starting == true){
    if(player_turn == 2){
        // console.log("player x turn");
        //playturn2.style.display = "none";
        playturn1.style.visibility = "visible";
        playturn2.style.visibility = "hidden";
        //playturn1.style.visibility = "visible";
    }
    else if(player_turn == 1){
        // console.log("player o turn");
        playturn2.style.visibility = "visible";
        playturn1.style.visibility = "hidden";
        //playturn1.style.visibility = "visible";

    }
}}
function fill_grid(clicked_id){
    if(starting == true){
    var a = parseInt(clicked_id[0]) - 1;
    var b = parseInt(clicked_id[1]) - 1;
    if(arr[a][b] == 0){
        if(player_turn == 1){
            arr[a][b] = 1;
            player_turn = 2;
            display_cross(clicked_id);
        }
        else if(player_turn == 2){
            arr[a][b] = 2;
            player_turn = 1;
            display_circle(clicked_id);
        }
    }
}}

function display_cross(clicked_id){
    var img123 = document.createElement("img");
    img123.src = "image/cross.png";
    img123.style.position = "absolute"
    img123.className = "new_element";
    // img123.id = "new_element";
    display_at_position_clicked(clicked_id, img123);


}
function display_at_position_clicked(clicked_id, img123){
    var div_grid = document.getElementById("cant_think_of_anything");
    if(clicked_id == "11"){
        img123.style.top = "10px";
        img123.style.left = "140px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "12"){
        img123.style.top = "10px";
        img123.style.left = "282px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "13"){
        img123.style.top = "10px";
        img123.style.left = "424px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "21"){
        img123.style.top = "152px";
        img123.style.left = "140px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "22"){
        img123.style.top = "152px";
        img123.style.left = "282px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "23"){
        img123.style.top = "152px";
        img123.style.left = "424px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "31"){
        img123.style.top = "294px";
        img123.style.left = "140px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "32"){
        img123.style.top = "294px";
        img123.style.left = "282px";
        div_grid.appendChild(img123);
    }
    else if(clicked_id == "33"){
        img123.style.top = "294px";
        img123.style.left = "424px";
        div_grid.appendChild(img123);
    }
}
function reset_fun(){
    var new_elements = document.getElementsByClassName("new_element");
    var start_btn = document.getElementById("start_btn");
    var reset_btn = document.getElementById("reset_btn");
        // for(var i=0;i<new_elements.length;i++){
        //     new_elements[i].remove
        // }
        playturn1.style.visibility = "hidden";
        playturn2.style.visibility = "hidden";
        display_won.style.visibility = "hidden";
        initializing_zero();
        while(new_elements.length!=0){
            new_elements[0].remove();
        }
        start_btn.style.visibility = "visible";
        starting=false;
        reset_btn.style.visibility = "hidden";
    }
function start_fun(){
    var start_btn = document.getElementById("start_btn");
    var reset_btn = document.getElementById("reset_btn");
    starting = true;
    playturn1.style.visibility = "visible";
    start_btn.style.visibility = "hidden";
    reset_btn.style.visibility = "visible";
    player_turn = 1;
}

function display_circle(clicked_id){
    var img123 = document.createElement("img");
    img123.src = "image/circle.png";
    img123.style.position = "absolute"
    img123.className = "new_element";
    // img123.id = "new_element";
    display_at_position_clicked(clicked_id, img123);
}

function is_empty(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[i][j] == 0){
                return true;
            }
        }
    }
    return false
}