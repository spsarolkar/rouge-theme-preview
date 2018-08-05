$(document).ready(function(){



});


function removeAllSyntaxStyles(){
        $('link[rel=stylesheet][href*="syntax"]').remove();
}

function addStyle(themename) {
    $('<link>').attr('rel','stylesheet')
          .attr('type','text/css')
          .attr('href','/css/syntax-'+themename+'.css')
          .appendTo('head');
}

function reaplyStyles(themename){
    removeAllSyntaxStyles();
    addStyle(themename);
    return true;
}

 $(function(){

    $(".dropdown-menu").on('click', 'li a', function(){
      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text());
   });

});