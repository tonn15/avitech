$(function(){
	$("#point3").hide(-15000);
	$("#point4").hide(-15000);
	$("#point5").hide(-15000);
	$("#point6").hide(-15000);

	$("#point").animate({left:'600px'},3000,function(){
		$("#point3").show(0);
	});
	$("#point2").animate({left:'640px'},3000,function(){
		{
			$("#point").animate({left:'10px'},1500);
			$("#point2").animate({left:'1230px'},1500,function(){
				$("#point").animate({left:'580px'},1500);
				$("#point2").animate({left:'660px'},1500,function(){
					$("#point4").show(0);
					$("#point5").show(0);
					$("#point").animate({left:'400px'},1500);
				});
				
				$("#point2").animate({left:'1240px'},1500,function(){
					$("#point2").animate({left:'680px'},1500,function(){
						$("#point6").show(0);
						$("#point2").animate({left:'880px'},1500,function(){
							$("#point2").animate({left:'680px'},1500);
						});
					});
					$("#point").animate({left:'580px'},1500);
				});
			});
		}
	});
	
});