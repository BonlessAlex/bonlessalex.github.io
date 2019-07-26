$(document).ready(function(){
	$("#homepageButton").click(function(){
		$("#Original").show();
        $("#Arsenal").hide();
		$("#Munich").hide();
		$("#Food").hide();
    });
	$("#arsenalButton").click(function(){
        $("#Original").hide();
        $("#Arsenal").show();
		$("#Munich").hide();
		$("#Food").hide();
    });
	$("#munichButton").click(function(){
        $("#Original").hide();
        $("#Arsenal").hide();
		$("#Munich").show();
		$("#Food").hide();
    });
	$("#foodButton").click(function(){
        $("#Original").hide();
        $("#Arsenal").hide();
		$("#Munich").hide();
		$("#Food").show();
    });
	

    $("#gengarTrigger").click(function(){
        $("#Gengar").fadeToggle(4000);
        switchAboutMeColor("gengarTrigger");
    });

    $("#head-icon").hover(
        function(){
            $(this).animate({opacity: '0.8'}, "slow");
        },
        function(){
            $(this).animate({opacity: '0.4'}, "slow");
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


