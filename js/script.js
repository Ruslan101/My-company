var check = new Boolean (true);

$("#icon").click(function ()
{
	if (check)
	{	
		$("header").css("flexDirection", 'column');
		$("nav").css({"display" : "flex", "flex-direction" : "column", "margin-left" : "0px"});
		$("nav a").css("display", "block");
	}
	else 
	{
		$("nav").css("diplay", 'block');
		$("header").css("flexDirection", "inherit");
		$("nav a").css("display", "none");
		$("#icon").css("display", "block");
	}
	check ? check = false : check = true;
});