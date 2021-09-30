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
        /// id name brand model category_id
    } 
    myTable += "</table>";
    $("#resultado").append(myTable);
}
function guardarInformacion()
{
    let myData = {
        id:$("#id").val(),
        name:$("#name").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(), 
    }
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4ef86a70a56228-db202109252211.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "POST",
        data: myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();    
            alert("Se ha guardado los datos");
        }
    });
}