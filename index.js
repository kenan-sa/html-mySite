const m1={
    Name:"FuncoBob Kakaroto",
    HairColor: "Black",
    amount: 5
}
const m2={
    Name:"FuncoBob GohanSayain 2",
    HairColor: "Light Yellow",
    amount: 0
}
const m3={
    Name:"FuncoBob VegetaSaiyan",
    HairColor: "Yellow",
    amount: 15
}
function mlay(amount){
    if(amount>10){
        return "In Stock"
    }
    else if(amount>1 &&amount<10){
        return "Last Units In Stock"
    }
    else{
        return "Out Of Stock"
    }
}
document.getElementById("motsr1").ondblclick=function(){
    document.getElementById("par1").innerHTML="Name :"+m1.Name+"<br>"+
                                              "HairColor :"+m1.HairColor+"<br>"+
                                              mlay(m1.amount);
    document.getElementById("par1").style.display= "block"; 
    document.getElementById("kakrot").style.display= "block"; 
};
document.getElementById("motsr2").ondblclick=function(){
    document.getElementById("par2").innerHTML="Name :"+m2.Name+"<br>"+
                                              "HairColor :"+m2.HairColor+"<br>"+
                                               mlay(m2.amount);
    document.getElementById("par2").style.display= "block"; 
    document.getElementById("gohan").style.display= "block"; 

};
document.getElementById("motsr3").ondblclick=function(){
    document.getElementById("par3").innerHTML="Name :"+m3.Name+"<br>"+
                                              "HairColor :"+m3.HairColor+"<br>"+
                                               mlay(m3.amount);
    document.getElementById("par3").style.display= "block"; 
    document.getElementById("vegeta").style.display= "block"; 
};

document.getElementById("motsr1").onclick=function(){
    document.getElementById("par1").style.display="none";
    document.getElementById("kakrot").style.display= "none"; 
};
document.getElementById("motsr2").onclick=function(){
    document.getElementById("par2").style.display="none";
    document.getElementById("gohan").style.display= "none"; 
};
document.getElementById("motsr3").onclick=function(){
    document.getElementById("par3").style.display="none";
    document.getElementById("vegeta").style.display= "none"; 
};
