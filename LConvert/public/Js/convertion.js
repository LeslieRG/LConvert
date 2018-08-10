$(document).ready(inicio);

function inicio(){
    if(
    $("#tbNo1").val() !== ""  
 
     ){
        ValoresParesOImpares($("#tbNo1").val())
       
    }

}

function ValoresParesOImpares(){
    let array = 
        $("#tbNo1").val().replace(/[^0-9,]/g,'').split(',')
        
    
    pares = array.filter(a=>!(a%2)).length
    impares = array.length - pares

   

    if(pares > impares){
        title = document.getElementById("titleOcta");
        console.log(HexadecimalOctal(array));
    }
    else{
        console.log(OctalBinario(array));

        table = $('#asd');
       
        for(var i = 0; i< r.length; i++){
            tr = $('<tr>');
            td = $('<td>').html(r[i])
            tr.append(td)
            table.append(tr)
        }
        table.append(tr)
    }

}

var algo = Hexadecimal(array)


Hexadecimal = arr => arr.map(a=>a.toString(16))
Octal = arr => arr.map(a=>a.toString(8))

$(function() {	
    $("#asubmit").click(function() {
        if($('#tablecontainer').length > 0)
        {
            var row = $('<tr></tr>');
            for(i=0; i<Hexadecimal.length; i++){
                var row1 = $('<td></td>').addClass('bar').text('result ' + i);
                row.append(row1);
            }
            $('#tablecontainer').append(row);
        }
        else
        {
            var table = $('<table></table>').addClass('foo');
            for(i=0; i<10; i++){
                var row = $('<tr></tr>');
                for(i=0; i<10; i++){
                    var row1 = $('<td></td>').addClass('bar').text('result ' + i);
                    table.append(row);
                    row.append(row1);
                }
            }
            $('#someContainer').append(table);
        }
    });
});