$(document).ready(inicio());

function inicio(){
    if(
    $("#tbNo1").val() !== ""  
 
     ){
        // ValoresParesOImpares($("#tbNo1").val())
       
    }

}

function ValoresParesOImpares(){
    
    var array = $('#tbNo1').val().split(",");
    
        $.each(array,function(i){
        alert(array[i]);
        });
    
    pares = array.filter(a=>!(a%2)).length
    impares = array.length - pares

    if(pares>impares){
        $("#titleOne").text("Octal"); 
        $("#titleTwo").text("Binario");
        for (i in array){
            i.toString(2);
            Hexadecimal = i.push();
            
        }
    
    }
    else{
        $("#titleTwo").text("Octal");
        $("#titleOne").text("Hexagesimal"); 
        Hexadecimal = array => array.map(a=>a.toString(16))
        Octal = array => array.map(a=>a.toString(8))
        console.log(Hexadecimal);
        console.log(Octal);
       
    }

}

// ConvertBase.dec2bin = function (array) {
//     return ConvertBase(array).from(10).to(2);
//     console.log(ConvertBase)
// };

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

