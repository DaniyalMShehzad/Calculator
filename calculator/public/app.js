function getNumber(num){
    var inp = document.getElementById("inp");
    inp.value += num;

}


function Clearvalue(){
    var inp = document.getElementById("inp");
    inp.value = ""
}

function getResult(){
    var inp = document.getElementById("inp");
    inp.value = eval(inp.value);
}