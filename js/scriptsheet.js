$(document).ready(function(){

	$('select').material_select();

	$("#login").addClass("setnotvisible");
	$("#login-screen").addClass("center-reg-expand");
	$("#register").addClass("setnotvisible");
	$("#reg-form").removeClass("setnotvisible");

	$("#login").click(function(e) {
		e.preventDefault(); 
		
		$("#login").addClass("setnotvisible");
		$("#login-screen").addClass("center-login-expand");
		$("#register").addClass("setnotvisible");
		$("#login-form").removeClass("setnotvisible");
	});			//End click function

});