$(document).ready(function() {
	$(".switcher_active.switcher__btn").click(function(){
		$(this).closest(".switcher__control").find(".switcher__btn").removeClass("switcher__btn_active");
		$(this).addClass("switcher__btn_active");
		var holder = $(this).closest(".switcher").find(".switcher__holder");
		holder.removeClass("switcher__holder_active");
		holder.filter('[data-switch-hold='+$(this).data("switch-btn")+']').addClass("switcher__holder_active");
	});
	$(".popup-btn").click(function(){
		$(this).next(".popup-btn-content").addClass("popup-btn-content_active");
		return false;
	});
	$(".popup-btn-content__close").click(function(){
		$(this).closest(".popup-btn-content").removeClass("popup-btn-content_active");
	})
});