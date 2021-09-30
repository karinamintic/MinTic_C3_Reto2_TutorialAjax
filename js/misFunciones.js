function traerInformacion(){
    $.ajax({
            url:"https://g4ef86a70a56228-db202109252211.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
            type: "GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuesta(respuesta.items);
                /* for(var i=0;i<respuesta.items.length;i++)
                {
                    $("#resultado").append(respuesta.items[i].name+"<br>");
                }  */
            }
    });
}

function pintarRespuesta(items)
{
    let myTable = "<table>";
    for(var i=0;i<items.length;i++)
    {
        myTable+= "<tr>";
        myTable+= "<td>"+items[i].id+"</td>";
        myTable+= "<td>"+items[i].name+"</td>";
        myTable+= "<td>"+items[i].brand+"</td>";
        myTable+= "<td>"+items[i].model+"</td>";
        myTable+= "<td>"+items[i].category_id+"</td>";
        myTable+= "</tr>";

    } 
    myTable += "</table>";
    $("#resultado").append(myTable);
}