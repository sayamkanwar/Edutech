$(document).ready(function(){
	x = 0;

	ht = ($(window).height() / 8) + "px";
	wd = $(window).width();

	$(".nav div").css({height:ht});
	$(".nav p").css({"line-height":ht});

	$(".toggle").click(function(){

		if(wd > 500)
		{
			if(x == 0)
			{
				$(".nav").css({"left":"0px"});
				$("body,html").css({left:"7.5em"});
				$(".toggle").css({"left":"255px"});
				x = 1;
			}
			else if(x == 1)
			{
				$(".nav").css({"left":"-15em"});
				$(".toggle").css({"left":"25px"});
				$("body,html").css({left:"0em"});

				x = 0;
			}
		}

		else
		{
			if(x == 0)
			{
				$(".nav").css({"left":"0px"});
				$("body,html").css({left:"0em"});
				$(".toggle").css({top:"15px",left: "auto", right: "25px", transform:"scale(0.8)"});
				$('.bars').addClass('cross');
				x = 1;
			}
			else if(x == 1)
			{

				$(".nav").css({"left":"-100%"});
				$(".toggle").css({top:"10px","left":"25px", transform:"scale(1)"});
				$("body,html").css({left:"0em"});
				$('.bars').removeClass('cross');
				x = 0;
			}
		}
		
	});

	


});