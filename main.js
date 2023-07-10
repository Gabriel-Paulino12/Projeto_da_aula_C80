var array=[];
function EnviarNomes(){
    array.push(document.getElementById("nome").value)
    console.log(array);
    document.getElementById("Mostrarnome").innerHTML=array;
     //document.getElementById("nome").value=" ";
}
function mostrarnomes(){
    var name="";
    for(i=0; i<array.length; i++){
    name=name+array[i]+"<br>" 
    }
    console.log(name);
    document.getElementById("nomesmostrados").innerHTML=name;
}
function submit(){
    array.sort();
    var listaNomesFinalOrdenada=[];
    for(i=0; i<array.length; i++){
        listaNomesFinalOrdenada=listaNomesFinalOrdenada+array[i]+"<br>" 
        }
        console.log(listaNomesFinalOrdenada);
    document.getElementById("Ordenarnomes").innerHTML=listaNomesFinalOrdenada;
}
function search()
{
    var s=document.getElementById("pesquisa").value;
    var found=0;
    var j;
    for(j=0; j<array.length; j++){
        if(s==array[j]){
            found=found+1;
        }
     }
     document.getElementById("p2").innerHTML=s +" "+found+" vez(es)";
     console.log("pesquisar "+found+" vez(es)");
}
