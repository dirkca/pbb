$(document).ready(function(){
    var e=$(".primary-navigation"),t=$(".menu-toggle");
    t.click(function(){t.toggleClass("toggled");e.toggleClass("toggled");return!1});
    $(".primary-navigation .children").each(function(){
        $(this).append('<a href="#" class="dropdown-toggle icon plus">&darr;</a>')});
        $(".dropdown-toggle").click(function(e){$(this).siblings("ul").stop(!0,!0).slideToggle(120);e.preventDefault()});
              
        $(".select_contain .select_toggle, .select_contain.tag .select_toggle").click(function(e){e.stopPropagation();if($(".select_contain .select_toggle, .select_contain.tag .select_toggle").hasClass("active")){$(".select_contain .select_toggle, .select_contain.tag .select_toggle").removeClass("active");$(".select_contain .select_toggle, .select_contain.tag .select_toggle").next("ul.select").hide()}$(this).toggleClass("active");$(this).next("ul.select").toggle()}); 
        $(".select_contain .select_toggle").keydown(function(e){e.keyCode===13&&$(this).click()});
       
         $("html").click(function(){if($(".select_contain .select_toggle, .select_contain.tag .select_toggle").hasClass("active")){$(".select_contain .select_toggle, .select_contain.tag .select_toggle").removeClass("active");$(".select_contain .select_toggle, .select_contain.tag .select_toggle").next("ul.select").hide()}});
       
       
        $(".select_contain ul.select li.option").click(function(){$("ul.select li.option").removeClass("selected");$(this).addClass("selected");var e=$(this).attr("name"),t=$(this).html();$(this).parent("ul.select").next("input").val(e);$(this).parent("ul.select").prev(".select_contain .select_toggle").html("<a>"+t+"</a>");$(this).parent().prev(".select_contain .select_toggle").click();$(this).parent("ul.select").next("input").focus()});
        
        $(".select_contain ul.select li.option").each(function(){if($(this).hasClass("selected")){var e=$(this).html();$(this).parent("ul.select").prev(".select_contain .select_toggle").html("<a>"+e+"</a>")}})       
        
        
        });
