var array=[];
function EnviarNomes(){
    array.push(document.getElementById("nome").value)
    console.log(array);
    //document.getElementById("nome").innerHTML.value="B ";
    document.getElementById("Mostrarnome").innerHTML=array;
}
function mostrarnomes(){
    var name="";
    for(i=0; i<array.length; i++){
    name=name+array[i]+"<br>" 
    }
    console.log(name);
    document.getElementById("nomesmostrados").innerHTML=array;
}
function submit(){
    array.sort();
    var listaNomesFinalOrdenada=[];
    for(var k=0; k<array.length; k++)
    {
        listaNomesFinalOrdenada.push("<h4>NOME - "+ array[k]+"</h4>");
    }
    var listaNomesFinal=listaNomesFinalOrdenada.join(" ");
    document.getElementById("Ordenarnomes").innerHTML=array;
}
function search()
{
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<nome.length; j++){
        if(s==nome[j]){
            found=found+1;
        }
     }
     document.getElementById("p2").innerHTML="pesquisar "+found+" vez(es)";
     console.log("pesquisar "+found+" vez(es)");
}