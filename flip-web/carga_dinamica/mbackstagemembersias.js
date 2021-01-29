//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// LLAMADOS A SERVICOS ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////// BACKSTAGE ///////////////////////////////////////////////////////////

var respuesta;
var _html;
$(document).ready(function () {
   // alert(urlbase_api);
    $.ajax({
        type: 'POST',
        url: urlbase_api +"Post/SeeHomeBackstage",
        data: JSON.stringify({ userid: 1 }),
        contentType: "application/json",
        dataType: "text",

        success: function (data, textStatus, jqXHR) {
         
            respuesta = JSON.parse(data);
           // console.log(respuesta.item[0]);

            //carga escritorio 
            $("#img-backstage-01").attr("src", respuesta.item[0].photoSlider);
            $("#p-backstage-01").text(respuesta.item[0].description);
            $("#d-backstage-01").html(respuesta.item[0].whatIstitle);
            $("#d-backstage-02").html(respuesta.item[0].whatIstitle);
            $("#RoomB").html(respuesta.item[0].membershipTitle);
            $("#membre").html(respuesta.item[0].membershipTitle);
            var divsfaq= "";
            for (var i = 0; i < respuesta.item[0].faqs.length; i++)
            {
                divsfaq +=  "<div style='background: #EBE7E6;'>"+respuesta.item[0].faqs[i].question+"</div>";
                divsfaq += "<div>"+respuesta.item[0].faqs[i].answer+"</div>"

            }
            $("#d-faqs-01").html(divsfaq);
            //carga mobil
            $("#d-mbackstage-03").html(respuesta.item[0].membershipTitle);
            $("#img-mbackstage-01").attr("src", respuesta.item[0].photoMobileSlider);
            $("#p-mbackstage-01").text(respuesta.item[0].description);
            $("#queescoliving").html(respuesta.item[0].whatIstitle);
           // $("#d-mbackstage-02").html(respuesta.item[0].whatIstitle);
            $("#d-mbackstage-04").html(respuesta.item[0].membershipTitle);

            $("#d-faqs-01").html(divsfaq);
        },
        error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR, textStatus, errorThrown); },
    });

    /*
    $.ajax({
        type: 'POST',
        url: urlbase_api +"Post/SeeBackstageWhatIs",
        data: JSON.stringify({ userid: 1 }),
        contentType: "application/json",
        dataType: "text",

        success: function (data, textStatus, jqXHR) {
            respuesta = JSON.parse(data);

            $("#p-what-01").text(respuesta.item[0].description);
            $("#img-what-01").attr("src", respuesta.item[0].photoSlider);
            $("#label-01-01-01").text(respuesta.item[0].titleIcon);
            $("#icon-01-01-01").attr("src", respuesta.item[0].icon);
            $("#icon-01-01-01").mouseover(function () {
                $("#icon-01-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#label-01-02-01").text(respuesta.item[1].titleIcon);
            $("#icon-01-02-01").attr("src", respuesta.item[1].icon);
            $("#icon-01-02-01").mouseover(function () {
                $("#icon-01-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#label-01-03-01").text(respuesta.item[2].titleIcon);
            $("#icon-01-03-01").attr("src", respuesta.item[2].icon);
            $("#icon-01-03-01").mouseover(function () {
                $("#icon-01-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#label-01-04-01").text(respuesta.item[3].titleIcon);
            $("#icon-01-04-01").attr("src", respuesta.item[3].icon);
            $("#icon-01-04-01").mouseover(function () {
                $("#icon-01-04-01").attr("src", respuesta.item[3].icon2);
            });



            $("#p-what-02").text(respuesta.item[1].description);
            $("#img-what-02").attr("src", respuesta.item[1].photoSlider);
            $("#label-02-01-01").text(respuesta.item[0].titleIcon);
            $("#icon-02-01-01").attr("src", respuesta.item[0].icon);
            $("#icon-02-01-01").mouseover(function () {
                $("#icon-02-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#label-02-02-01").text(respuesta.item[1].titleIcon);
            $("#icon-02-02-01").attr("src", respuesta.item[1].icon);
            $("#icon-02-02-01").mouseover(function () {
                $("#icon-02-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#label-02-03-01").text(respuesta.item[2].titleIcon);
            $("#icon-02-03-01").attr("src", respuesta.item[2].icon);
            $("#icon-02-03-01").mouseover(function () {
                $("#icon-02-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#label-02-04-01").text(respuesta.item[3].titleIcon);
            $("#icon-02-04-01").attr("src", respuesta.item[3].icon);
            $("#icon-02-04-01").mouseover(function () {
                $("#icon-02-04-01").attr("src", respuesta.item[3].icon2);
            });


            $("#p-what-03").text(respuesta.item[2].description);
            $("#img-what-03").attr("src", respuesta.item[2].photoSlider);
            $("#label-03-01-01").text(respuesta.item[0].titleIcon);
            $("#icon-03-01-01").attr("src", respuesta.item[0].icon);
            $("#icon-03-01-01").mouseover(function () {
                $("#icon-03-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#label-03-02-01").text(respuesta.item[1].titleIcon);
            $("#icon-03-02-01").attr("src", respuesta.item[1].icon);
            $("#icon-03-02-01").mouseover(function () {
                $("#icon-03-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#label-03-03-01").text(respuesta.item[2].titleIcon);
            $("#icon-03-03-01").attr("src", respuesta.item[2].icon);
            $("#icon-03-03-01").mouseover(function () {
                $("#icon-03-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#label-03-04-01").text(respuesta.item[3].titleIcon);
            $("#icon-03-04-01").attr("src", respuesta.item[3].icon);
            $("#icon-03-04-01").mouseover(function () {
                $("#icon-03-04-01").attr("src", respuesta.item[3].icon2);
            });


            $("#p-what-04").text(respuesta.item[3].description);
            $("#img-what-04").attr("src", respuesta.item[3].photoSlider);
            $("#label-04-01-01").text(respuesta.item[0].titleIcon);
            $("#icon-04-01-01").attr("src", respuesta.item[0].icon);
            $("#icon-04-01-01").mouseover(function () {
                $("#icon-04-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#label-04-02-01").text(respuesta.item[1].titleIcon);
            $("#icon-04-02-01").attr("src", respuesta.item[1].icon);
            $("#icon-04-02-01").mouseover(function () {
                $("#icon-04-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#label-04-03-01").text(respuesta.item[2].titleIcon);
            $("#icon-04-03-01").attr("src", respuesta.item[2].icon);
            $("#icon-04-03-01").mouseover(function () {
                $("#icon-04-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#label-04-04-01").text(respuesta.item[3].titleIcon);
            $("#icon-04-04-01").attr("src", respuesta.item[3].icon);
            $("#icon-04-04-01").mouseover(function () {
                $("#icon-04-04-01").attr("src", respuesta.item[3].icon2);
            });


            //MOBIL 
           // textmenuamenidades

            $("#p-mwhat-01").text(respuesta.item[0].description.substring(0, limit_desc_slide_mobil));
            $("#img-mwhat-01").attr("src", respuesta.item[0].photoSlider);
            $("#mlabel-01-01-01").text(respuesta.item[0].titleIcon.substring(0,limit_desc_icon_slide));
            $("#textmenuamenidades").text(respuesta.item[0].membershipTitle);
            $("#micon-01-01-01").attr("src", respuesta.item[0].icon);
            $("#micon-01-01-01").mouseover(function () {
                $("#micon-01-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#mlabel-01-02-01").text(respuesta.item[1].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-01-02-01").attr("src", respuesta.item[1].icon);
            $("#micon-01-02-01").mouseover(function () {
                $("#micon-01-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#mlabel-01-03-01").text(respuesta.item[2].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-01-03-01").attr("src", respuesta.item[2].icon);
            $("#micon-01-03-01").mouseover(function () {
                $("#micon-01-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#mlabel-01-04-01").text(respuesta.item[3].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-01-04-01").attr("src", respuesta.item[3].icon);
            $("#micon-01-04-01").mouseover(function () {
                $("#micon-01-04-01").attr("src", respuesta.item[3].icon2);
            });

           
            $("#p-mwhat-02").text(respuesta.item[1].description.substring(0, limit_desc_slide_mobil));
            $("#img-mwhat-02").attr("src", respuesta.item[1].photoSlider);

            $("#mlabel-02-01-01").text(respuesta.item[0].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-02-01-01").attr("src", respuesta.item[0].icon);
            $("#micon-02-01-01").mouseover(function () {
                $("#micon-02-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#mlabel-02-02-01").text(respuesta.item[1].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-02-02-01").attr("src", respuesta.item[1].icon);
            $("#micon-02-02-01").mouseover(function () {
                $("#micon-02-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#mlabel-02-03-01").text(respuesta.item[2].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-02-03-01").attr("src", respuesta.item[2].icon);
            $("#micon-02-03-01").mouseover(function () {
                $("#micon-02-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#mlabel-02-04-01").text(respuesta.item[3].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-02-04-01").attr("src", respuesta.item[3].icon);
            $("#micon-02-04-01").mouseover(function () {
                $("#micon-02-04-01").attr("src", respuesta.item[3].icon2);
            });



            $("#p-mwhat-03").text(respuesta.item[2].description.substring(0, limit_desc_slide_mobil));
            $("#img-mwhat-03").attr("src", respuesta.item[2].photoSlider);

            $("#mlabel-03-01-01").text(respuesta.item[0].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-03-01-01").attr("src", respuesta.item[0].icon);
            $("#micon-03-01-01").mouseover(function () {
                $("#micon-03-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#mlabel-03-02-01").text(respuesta.item[1].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-03-02-01").attr("src", respuesta.item[1].icon);
            $("#micon-03-02-01").mouseover(function () {
                $("#micon-03-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#mlabel-03-03-01").text(respuesta.item[2].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-03-03-01").attr("src", respuesta.item[2].icon);
            $("#micon-03-03-01").mouseover(function () {
                $("#micon-03-03-01").attr("src", respuesta.item[2].icon2);
            });
            $("#mlabel-03-04-01").text(respuesta.item[3].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-03-04-01").attr("src", respuesta.item[3].icon);
            $("#micon-03-04-01").mouseover(function () {
                $("#micon-03-04-01").attr("src", respuesta.item[3].icon2);
            });



            $("#p-mwhat-04").text(respuesta.item[3].description.substring(0, limit_desc_slide_mobil));
            $("#img-mwhat-04").attr("src", respuesta.item[3].photoSlider);
          
            $("#mlabel-04-01-01").text(respuesta.item[0].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-04-01-01").attr("src", respuesta.item[0].icon);
            $("#micon-04-01-01").mouseover(function () {
                $("#micon-04-01-01").attr("src", respuesta.item[0].icon2);
            });
            $("#mlabel-04-02-01").text(respuesta.item[1].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-04-02-01").attr("src", respuesta.item[1].icon);
            $("#micon-04-02-01").mouseover(function () {
                $("#micon-04-02-01").attr("src", respuesta.item[1].icon2);
            });
            $("#mlabel-04-03-01").text(respuesta.item[2].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-04-03-01").attr("src", respuesta.item[2].icon);
            $("#micon-04-03-01").mouseover(function () {
                $("#micon-04-03-01").attr("src", respuesta.item[2].icon2);
            });
           // alert($("#mlabel-04-04-01").text)
          // alert(respuesta.item[3].titleIcon.substring(0,limit_desc_icon_slide))
            $("#mlabel-04-04-01").text(respuesta.item[3].titleIcon.substring(0,limit_desc_icon_slide));
            $("#micon-04-04-01").attr("src", respuesta.item[3].icon);
            $("#micon-04-04-01").mouseover(function () {
                $("#micon-04-04-01").attr("src", respuesta.item[3].icon2);
            });
        }, 
        error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR, textStatus, errorThrown); },
    });*/

    $.ajax({
        type: 'POST',
        url: urlbase_api +"Post/SeeBackstageMembershipSections",
        data: JSON.stringify({ userid: 1 }),
        contentType: "application/json",
        dataType: "text",

        success: function (data, textStatus, jqXHR) {
            respuesta = JSON.parse(data);
            console.log("========MEMBERSHIP====>");
            console.log(respuesta);
            
            //A
            $("#m1title").text(respuesta.item[0].title);
            $(".m1title").text(respuesta.item[0].title);
            $("#m1imagen").attr("src",respuesta.item[0].photoMobileSlider);
            $(".m1description").text(respuesta.item[0].description);
            let plantilla = "";
            for(let i = 0 ; i < 8; i++){
                let icon = respuesta.item[0].backstageMembershipItems[i];
                if (icon != undefined) //Se valida que icon traiga informacion..
                plantilla += `
                             <label data-target="#myCarousel6" data-slide-to="0"   class="yogaam paddingmovil ">   
                                <a href="#">
                                  <img  class="iconsback" src="${icon.icon}" 
                                        onmouseover="this.src='${icon.icon2}'"
                                         onmouseout="this.src='${icon.icon}'"
                                         border="0" alt=""/>
                                </a>
                              <br>${icon.titleIcon}</label>
                `;
            }
            plantilla += ` <br> 
                                <label class="margintopmovilmem">
                                       <p style="margin-bottom: 8%" > Price 2  <br> </p> <p> 
                                            <strong>$${respuesta.item[0].price1}</strong>
                                       </p>
                                </label>
                                <label class="margintopmovilmem">
                                       <p style="margin-bottom: 8%" > Price 1  <br> </p> <p> 
                                            <strong>$${respuesta.item[0].price}</strong>                                                                
                                       </p>
                                </label>`;
            $('#icon1').html(`${plantilla}`);
            
            
            //B

            $("#m2title").text(respuesta.item[1].title);
            $(".m2title").text(respuesta.item[1].title);
            $("#m2imagen").attr("src",respuesta.item[1].photoMobileSlider);
            $(".m2description").text(respuesta.item[1].description);
            plantilla = "";
            for(let i = 0 ; i < 8; i++){
                let icon = respuesta.item[1].backstageMembershipItems[i];
                if (icon != undefined) //Se valida que icon traiga informacion..
                plantilla += `
                             <label data-target="#myCarousel6" data-slide-to="0"   class="yogaam paddingmovil ">   
                                <a href="#">
                                  <img  class="iconsback" src="${icon.icon}" 
                                        onmouseover="this.src='${icon.icon2}'"
                                         onmouseout="this.src='${icon.icon}'"
                                         border="0" alt=""/>
                                </a>
                              <br>${icon.titleIcon}</label>
                `;
            }
            plantilla += ` <br> 
                                <label class="margintopmovilmem">
                                       <p style="margin-bottom: 8%" > Price 2  <br> </p> <p> 
                                            <strong>$${respuesta.item[1].price1}</strong>
                                       </p>
                                </label>
                                <label class="margintopmovilmem">
                                       <p style="margin-bottom: 8%" > Price 1  <br> </p> <p> 
                                            <strong>$${respuesta.item[1].price}</strong>                                                                
                                       </p>
                                </label>`;
            $('#icon2').html(`${plantilla}`);
            
            //c
            $("#m3title").text(respuesta.item[2].title);
            $(".m3title").text(respuesta.item[2].title);
            $("#m3imagen").attr("src",respuesta.item[2].photoMobileSlider);
            $(".m3description").text(respuesta.item[2].description);
            plantilla = "<br>";
            for(let i = 0 ; i < 8; i++){
                let icon = respuesta.item[2].backstageMembershipItems[i];
                plantilla += `
                             <label data-target="#myCarousel6" data-slide-to="0"   class="yogaam paddingmovil ">   
                                <a href="#">
                                  <img  class="iconsback" src="${icon.icon}" 
                                        onmouseover="this.src='${icon.icon2}'"
                                         onmouseout="this.src='${icon.icon}'"
                                         border="0" alt=""/>
                                </a>
                              <br>${icon.titleIcon}</label>
                `;
            }
            plantilla += ` <br> 
                                <label class="margintopmovilmem">
                                       <p style="margin-bottom: 8%" > Price 2  <br> </p> <p> 
                                            <strong>$${respuesta.item[2].price1}</strong>
                                       </p>
                                </label>
                                <label class="margintopmovilmem">
                                       <p style="margin-bottom: 8%" > Price 1  <br> </p> <p> 
                                            <strong>$${respuesta.item[2].price}</strong>                                                                
                                       </p>
                                </label>`;
            $('#icon3').html(`${plantilla}`);
           // alert(respuesta.item[0].title);
        }, 
        error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR, textStatus, errorThrown); },
    });
});

function change_image(item) {
    //Imagen que cambia 
    $("#amenidadesrightimg1").attr("src", respuesta.item[item].build);
}

function change_image_movil(item) {
   // console.log(respuesta.item[item].buildmobile);
    //Imagen que cambia 
    $("#amenidadesrightimgm1").attr("src", respuesta.item[item].buildmobile);
}


function getBackstageData() {

    const xhttp = new XMLHttpRequest(),
        ws_data = {
            id: 1
        };

        xhttp.onreadystatechange = function( response ) {

            const result = response.target;

            if( result.readyState == 4 && result.status == 200 ) {

                const ws_data = JSON.parse( result.response );
                
                createContentForWhatIsColiving( ws_data.item );

            }

        }
        xhttp.open('POST', urlbase_api +'Post/SeeBackstageWhatIs', true);
        xhttp.open('POST','http://34.237.214.147/back/api_flip/api/Post/SeeBackstageWhatIs', true);
        xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhttp.send( JSON.stringify( ws_data ) );

}

function createContentForWhatIsColiving( data_content ) {

    const wi_backstage_container = document.getElementById('wi_backstage');

    data_content.forEach( (slide, index) => {

        const slide_html = `
            <div class="item ${ index == 0 ? 'active' : '' }">
            <img id= "img-what-01" src="${ slide.photoSlider }" alt="Los Angeles" />
            <div class="header-text-room  ">
                <div class="col-md-12 text-center"><br />
                    <span>
                        <div class="row"> 
                            <div class="col-sm-6" style="margin-left: -2%;"><br> 
                                <p id= "p-what-01" class="textamen">
                                    ${ slide.description }
                                </p>
                            </div> 
                            <div class="col-sm-6">
                                <div class="text-center">
                                    <h2>
                                        <span id="comserv-activetext" class="beneficios-title" style="font-size: 0.75em;">¿WHAT IS INCLUDED?</span>
                                    </h2> 
                                </div><br> 
                                ${ generateWicIconsSection() }
                            </div>
                        </span><br /> 
                    </div>
                </div>
            </div>
        `;

        //wi_backstage_container.innerHTML += slide_html;

        });

        function generateWicIconsSection() {

            let result = '';

            data_content.forEach( (icon, index) => {

                const icons_html = `
                    <div class ="col-sm-6 icondiv" >
                        <label data-target="#myCarousel7" style="margin-bottom: 15px;" data-slide-to="${ index }">
                            <a href="#">
                                <img id="icon-01-01-01"  class="iconsback" src="${ icon.icon }" 
                                    onmouseover="this.src='${ icon.icon2 }'"
                                    onmouseout="this.src='${ icon.icon }'"
                                    border="0" alt="" />
                            </a>
                            &nbsp;<span id="label-01-01-01">${ icon.titleIcon }</span> 
                        </label>
                    </div>
                `;

                result += icons_html;

            });

            return result;

        }

}

function getFlipnetworkData() {

    const xhttp = new XMLHttpRequest(),
        ws_data = {
            userid: 1, 
            id: 1
        };

        xhttp.onreadystatechange = function( response ) {

            const result = response.target;

            if( result.readyState == 4 && result.status == 200 ) {

                const ws_data = JSON.parse( result.response );
                
                console.log('Network ==> ', ws_data);
                $(".net").text(ws_data.backStageNetworkSection[0].title);
                let plantilla = ``;
                let primerslide;
                for(let i = 0; i < ws_data.backStageNetworkSlides.length;i++){
                    let slide = ws_data.backStageNetworkSlides[i];
                    if(i == 0){
                         plantilla += `<div class="item active ">`;
                    }else if(i > 0){
                         plantilla += `<div class="item">`;
                    }
                    
                         for(let j = 0; j < slide.networkBenefits.length; j ++){
                    let beneficio = slide.networkBenefits[j];
                    var beneficiostring = JSON.stringify(beneficio);
                    if(j == 0){
                        plantilla += ` <button id="butben${beneficio.id}" class="centerMe" style="top: 15%; left: 80%;">
                                                            <div id="buttonicon" class="icon"  onclick='datos(${beneficiostring})'>
                                                                <i class="fa fa fa-plus"></i>
                                                            </div>
                                                            <div class="text">
                                                                <span>${beneficio.title}</span>
                                                            </div>
                                                        </button>`;
                        
                    }
                            
                    if(j == 1){
                         plantilla += `<button id="butben${beneficio.id}" class="centerMe" style="top: 30%; left: 60%;" onclick='datos(${beneficiostring})'>
                                                            <div id="buttonicon" class="icon">
                                                                <i class="fa fa fa-plus"></i>
                                                            </div>
                                                            <div class="text">
                                                                <span>${beneficio.title}</span>
                                                            </div>
                                                        </button>`;
                    }
                             
                   if(j == 2){
                         plantilla += `<button id="butben${beneficio.id}" class="centerMe" style="top: 45%; left: 40%;" onclick='datos(${beneficiostring})'>
                                                            <div id="buttonicon" class="icon">
                                                                <i class="fa fa fa-plus"></i>
                                                            </div>
                                                            <div class="text">
                                                                <span>${beneficio.title}</span>
                                                            </div>
                                                        </button>`;
                    }
                
                    if(j == 3){
                         plantilla += `<button id="butben${beneficio.id}" class="centerMe" style="left: 20%; top: 60%;" onclick='datos(${beneficiostring})'>
                                                            <div id="buttonicon" class="icon">
                                                                <i class="fa fa fa-plus"></i>
                                                            </div>
                                                            <div class="text">
                                                                <span>${beneficio.title}</span>
                                                            </div>
                                                        </button>`;
                    }
                             

                }

                plantilla += ` 
                             <img src="${slide.photoMobileSlider}">
                             <div class="header-text  No_PaDdInG " style="top: 74%;">
                                 <div class="col-md-12  No_PaDdInG ">
                                     <div class="col-xs-5">

                                         <span id="comserv-activetext" class="left-content">
                                             <h4 style="width: 100%; margin-top: 6%; margin-bottom: 16%;" class="aux-back beneficiosredflip" id="beneficiosredflip">
                                                   
                                               </h4>
                                         </span>
                                         <p class="textamen textoredflip" id="textoredflip">
                                               Lorem ipsum dolor sit amet, consectetur
                                           </p>
                                       </div>

                                     <div style="margin-top: -20%; " class="col-xs-7 No_PaDdInG ">
                                         <img class="redflipcontent redmarginmovil imgredflip" id="imgredflip" src="assets/images/Communities/Coahuila/coahuila1.jpg" alt="build" />
                                       </div>

                                     <br>


                                     <br>
                                   </div>
                               </div><!-- /header-text -->
                           </div>`;
                    }
                $("#network-carrucel").html(`${plantilla}`);

            }

        }
        xhttp.open('POST', urlbase_api +'Post/SeeBacksNetworkSection', true);
        xhttp.open('POST','http://34.237.214.147/back/api_flip/api/Post/SeeBacksNetworkSection', true);
        xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhttp.send( JSON.stringify( ws_data ) );

}

function mainCardData( card_data ) {

    const fnc_title_container = document.getElementById('fnc_title'),
        fnc_desc_container = document.querySelector('[fnc_desc]');

    fnc_title_container.innerHTML = card_data.title;
    fnc_desc_container.innerHTML = `
        ${ card_data.description }
        <span  id="butredflipmas"class="glyphicon glyphicon-plus pointer" style="font-size: 1.25em; left: 50%; color: white; position: absolute; top: 110%; transform: translate(-50%,-50%);"></span> 
    `;

}

getBackstageData();
getFlipnetworkData();