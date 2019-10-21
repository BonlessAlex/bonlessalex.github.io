$(document).ready(function(){

    function moveToBlogs(){
        var p = $("#labelContainer").position().top -55 ;
        $('html, body').animate({ scrollTop: p+'px'}, 500);
    } ;

    $("#pages").click(function(){
        moveToBlogs();
    });

	$("#homepageButton").click(function(){
		$("#Original").show();
        $("#Arsenal").hide();
		$("#Munich").hide();
        $("#Food").hide();
        moveToBlogs();
        $("#homepageButton").css("background-color","transparent").css("color","black");
        $("#arsenalButton").css("color","rgb(116, 109, 109)");
        $("#munichButton").css("color","rgb(116, 109, 109)");
        $("#foodButton").css("color","rgb(116, 109, 109)");

    });
	$("#arsenalButton").click(function(){
        $("#Original").hide();
        $("#Arsenal").show();
		$("#Munich").hide();
        $("#Food").hide();
        moveToBlogs();
        $("#arsenalButton").css("background-color","transparent").css("color","black");
        $("#munichButton").css("color","rgb(116, 109, 109)")
        $("#homepageButton").css("color","rgb(116, 109, 109)")
        $("#foodButton").css("color","rgb(116, 109, 109)")

    });
	$("#munichButton").click(function(){
        $("#Original").hide();
        $("#Arsenal").hide();
		$("#Munich").show();
        $("#Food").hide();
        moveToBlogs();
        $("#munichButton").css("background-color","transparent").css("color","black");
        $("#homepageButton").css("color","rgb(116, 109, 109)");
        $("#foodButton").css("color","rgb(116, 109, 109)");
        $("#arsenalButton").css("color","rgb(116, 109, 109)");

    });
	$("#foodButton").click(function(){
        $("#Original").hide();
        $("#Arsenal").hide();
		$("#Munich").hide();
        $("#Food").show();
        moveToBlogs();
        $("#foodButton").css("background-color","transparent").css("color","black");
        $("#homepageButton").css("color","rgb(116, 109, 109)");
        $("#munichButton").css("color","rgb(116, 109, 109)");
        $("#arsenalButton").css("color","rgb(116, 109, 109)");

    });
	

    $("#gengarTrigger").click(function(){
        $("#Gengar").fadeToggle(4000);
        switchAboutMeColor("gengarTrigger");
    });

    $("#head-icon").hover(
        function(){
            $(this).animate({opacity: '1'}, "slow");
        },
        function(){
            $(this).animate({opacity: '0.8'}, "slow");
        }
    )

    $("#aboutMe").click(function(){
        $("#selfIntroduce").fadeToggle("slow");
        switchAboutMeColor("aboutMe");
    });

    function switchAboutMeColor(name) {
        x=document.getElementById(name); 
        if(x.style.color!="white"){
            x.style.color="white";    
        }
        else{
            x.style.color="rgba(255,255,255,.75)"; 
        }
    }
    
});


