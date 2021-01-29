﻿//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// LLAMADOS A SERVICOS ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////// INDEX HOME ///////////////////////////////////////////////////////////



$.ajax({
    type: 'POST',
    url: urlbase_api +"Post/SeeIndex",
    //url: "http://34.237.214.147/back/api_flip/api/Post/SeeIndex",
    data: JSON.stringify({ userid: 1, buildingid: 1 }),
    contentType: "application/json",
    dataType: "text",

    success: function (data, textStatus, jqXHR) {
        var respuesta = JSON.parse(data);
         // debugger;
          console.log(respuesta);

        fill_grid_images(respuesta);
    },
    error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR, textStatus, errorThrown); },
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// FUNCIONES DE CARGA DINAMICA ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////// INDEX HOME ///////////////////////////////////////////////////////////

var faces = [];
var faces_back = [];
function fill_grid_images(respuesta) {
    faces.push(document.getElementById('frontphoto1')); // 8
    faces.push(document.getElementById('frontphoto2')); //5
    faces.push(document.getElementById('frontphoto3')); //homes
    faces.push(document.getElementById('frontphoto4'));
    faces.push(document.getElementById('frontphoto5'));
    faces.push(document.getElementById('frontphoto6')); //about
    faces.push(document.getElementById('frontphoto7')); 
    faces.push(document.getElementById('frontphoto8')); // logo
    faces.push(document.getElementById('frontphoto9')); //9
    faces.push(document.getElementById('frontphoto10')); // design 
    faces.push(document.getElementById('frontphoto11'));
    faces.push(document.getElementById('frontphoto12'));
    faces.push(document.getElementById('frontphoto13')); //more
    faces.push(document.getElementById('frontphoto14'));
    faces.push(document.getElementById('frontphoto15'));
    // console.log(faces);

    faces_back.push(document.getElementById('backphoto1'));
    faces_back.push(document.getElementById('backphoto2'));
    faces_back.push(document.getElementById('backphoto3'));
    faces_back.push(document.getElementById('backphoto4'));
    faces_back.push(document.getElementById('backphoto5'));
    faces_back.push(document.getElementById('backphoto6'));
    faces_back.push(document.getElementById('backphoto7'));
    faces_back.push(document.getElementById('backphoto8'));
    faces_back.push(document.getElementById('backphoto9'));
    faces_back.push(document.getElementById('backphoto10'));
    faces_back.push(document.getElementById('backphoto11'));
    faces_back.push(document.getElementById('backphoto12'));
    faces_back.push(document.getElementById('backphoto13'));
    faces_back.push(document.getElementById('backphoto14'));
    faces_back.push(document.getElementById('backphoto15'));

    for (var i = 0; respuesta.item.length > i; i++) {
        var id_obj = "frontphoto" + respuesta.item[i].id;
        var id_obj_back = "backphoto" + respuesta.item[i].id;
        var elem = document.getElementById(id_obj);
        var elem_back = document.getElementById(id_obj_back);
        //debugger;
        if (elem == null || elem == 'undefined') {
            console.log(id_obj + " No existe")
        }
        else {
              // debugger;
            var index_ = faces.indexOf(elem);
            if (index_ > -1) {
                faces[index_].src = respuesta.item[i].frontphoto;
            }
        }
        if (elem_back == null || elem_back == 'undefined') {
            console.log(id_obj + " No existe")
        }
        else {
            //   debugger;
            var index_ = faces_back.indexOf(elem_back);
            if (index_ > -1) {
                faces_back[index_].src = respuesta.item[i].backphoto;
            }
        }
        
    
    }
    
    for(let m = 0; m < respuesta.titles.length; m++){
        var id_title = "title" + respuesta.titles[m].id;
        var title_elem = document.getElementById(id_title);
        console.log(title_elem);
        if(title_elem == null || title_elem == "undefined"){
            console.log(title_elem, "no encontrado");
        }else{
            title_elem.innerHTML = respuesta.titles[m].name.toUpperCase();
        }
    }
    
   // alert(document.getElementById('backphoto1').src)
}

