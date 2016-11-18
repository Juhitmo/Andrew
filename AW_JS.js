$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $("#header");
    var head = startchange.height() -20;
    var exper = $("#expDivider").offset().top;
    var port = $("#portDivider").offset().top;

    $(document).scroll(
        
        function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start < head) {
                $('#nav').css('background-color', '');
                $( "#navHome" ).addClass( "active" );
                $( "#navExp" ).removeClass( "active" );
                $( "#navPort" ).removeClass( "active" );
            } else {
                $('#nav').css('background-color', '#317873');
            }
            if (scroll_start > exper){
                $('#nav').css('background-color', '#317873');
                $( "#navHome" ).removeClass( "active" );
                $( "#navExp" ).addClass( "active" );
                $( "#navPort" ).removeClass( "active" );
            } 
            if (scroll_start > port){
                $('#nav').css('background-color', '#317873');
                $( "#navHome" ).removeClass( "active" );
                $( "#navExp" ).removeClass( "active" );
                $( "#navPort" ).addClass( "active" );
            }
        });
});

//scrolling menu function
function navSelect(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top + 1},'slow');
}