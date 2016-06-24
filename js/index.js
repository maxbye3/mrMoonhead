

// append image into the modal
function appendImage(imgSrc,description){
    $(".appendImg").html('<img src="'+imgSrc+'" width="100%">'); 
    $(".modal-title").html(description);  

}