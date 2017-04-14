//routing
var loadPg = function () {
    whereAreWe = window.location.href;
    pageCut = whereAreWe.indexOf("#/page");
    whatPg = whereAreWe.substring(pageCut + 6);
    if (pageCut === -1) {//set default
        whatPg = "1";
    } //end if
    $.ajax({
        url: "modules/page" + whatPg + ".html?uuid=" + uuid()
    }).done(function (data) {
        $("#target").html(data);
    }); //end  ajax
    $("a[href*='#/page']").removeClass("active").blur();//reset button selection
    $("a[href='#/page" + whatPg + "']").addClass("active");//make selcted button active in nav
}  //end loadPg()
$(window).bind('hashchange', function () {//listen for url change
    loadPg();
});
loadPg(); //onload