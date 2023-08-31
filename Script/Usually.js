var x,y,action,res,conf,names,welcome;
function start(){
    names = prompt("Введите своё имя:");
    welcome = confirm("Добро пожаловать!");
    if(welcome == true){
        contin();
    }
    else{
        alert("До свидания , " + names);
    }
}
function deistvie(){
    action = prompt("Введите действие: 1.+ , 2.-, 3.*, 4./,  5.%");
    if(action == "+" || action == "1"){
        res = parseInt(x) + parseInt(y);
        conf = confirm ("Резульат = " + res);
        if(conf == true){
            start();
        }
        else{
            alert("До свидания , " + names);
        }
    }
    else if(action == "-" || action == "2"){
        res = parseInt(x) - parseInt(y);
        conf = confirm ("Резульат = " + res);
        if(conf == true){
            start();
        }
        else{
            alert("До свидания , " + names);
        }
    }
    else if(action == "*" || action == "3"){
        res = parseInt(x) * parseInt(y);
        conf = confirm ("Резульат = " + res);
        if(conf == true){
            start();
        }
        else{
            alert("До свидания , " + names);
        }
    }
    else if(action == "/" || action == "4"){
        res = parseInt(x) / parseInt(y);
        conf = confirm ("Резульат = " + res);
        if(conf == true){
            start();
        }
        else{
            alert("До свидания , " + names);
        }
    }
    else if(action == "%" || action == "5"){
        res = parseInt(x) % parseInt(y);
        conf = confirm ("Резульат = " + res);
        if(conf == true){
            start();
        }
        else{
            alert("До свидания , " + names);
        }
    }
}
function contin(){
    x = prompt("Введите занчение x:");
    y = prompt("Введите значение y:");
    if((x != "" && x != " ") && (y != "" && y != " ")){
        deistvie();
    }
    else{
        alert("До свидания , " + names);
    }
}
start();