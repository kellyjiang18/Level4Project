const nasty = ["Are your clicks always that weak?",
"You'll never kill us all!","I bet your fingers are sticky, ew.",
"I hope both sides of your pillow are warm!","I hope you get a splinter!","I hope you accidentally delete your files.","Us bugs are the best!!!","Humans suck."];

const plead = ["Please don't kill us!",
"I'll give you my first child, just don't kill us!",
"Please! I have a wife and kids!!!","AAAAAHHHH","Someone help! Please!!","You\'re so cruel","So long world"];

var nasties = nasty;
var pleads = plead;
var bugs=15;

function initialize()
{
    bugs=15;
    console.log("initialize");
}

function reset()
{
    bugs=15;
    nasties=["Are your clicks always that weak?",
    "You'll never kill us all!","I bet your fingers are sticky, ew.",
    "I hope both sides of your pillow are warm!","I hope you get a splinter!","I hope you accidentally delete your files.","Us bugs are the best!!!","Humans suck."];
    pleads=["Please don't kill us!",
    "I'll give you my first child, just don't kill us!",
    "Please! I have a wife and kids!!!","AAAAAHHHH","Someone help! Please!!","You\'re so cruel","So long world"];
    document.getElementById("msg").innerHTML="";
    unsquash();
    console.log("reset");
    console.log("plead: "+plead);
    console.log("nasty: "+nasty);
    console.log(pleads);
    console.log(nasties);
}

function squash(num)
{
    var id='bug'+num;
    document.getElementById(id).src='bugSplat.png';
    if(bugs>7)
    {defy();}
    else
    beg();
    bugs--;
    console.log("squash");
}

function defy()
{
    var num = parseInt(Math.random()*nasties.length);
    
    document.getElementById("msg").innerHTML=nasties[num];
    nasties.splice(num,1);
    console.log("defy");
}

function beg()
{
    if(bugs==1)
    {
        document.getElementById("msg").innerHTML='You\'ve splatted us all :(';
    }
    else if(bugs>1){
        var num = parseInt(Math.random()*nasties.length);
        document.getElementById("msg").innerHTML=pleads[num];
        pleads.splice(num,1);
    }
    console.log("beg");
}

function unsquash()
{
    for(i=1;i<16;i++)
    {
        var id='bug'+i;
        document.getElementById(id).src='bug.png';
    }
}
