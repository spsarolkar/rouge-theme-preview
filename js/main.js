$(document).ready(function(){

 $('.dropdown-menu a').click(function(){
    $('#selected').html("Current Selection: <span class='bg-info text-white p-3 mb-2'>"+$(this).text()+"</span>");
  });

});


function removeAllSyntaxStyles(){
        $('link[rel=stylesheet][href*="syntax"]').remove();
}

function addStyle(themename) {
    $('<link>').attr('rel','stylesheet')
          .attr('type','text/css')
          .attr('href','css/syntax-'+themename+'.css')
          .appendTo('head');
}

function reaplyStyles(themename){
    removeAllSyntaxStyles();
    addStyle(themename);
    return true;
}

