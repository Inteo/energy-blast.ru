$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip(); 
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
	$(".modal-inline").fancybox({
    type: 'inline',
    fixed: true,
 		width       : '100%',
		height      : '100%',
		minWidth: "100%",
		minHeight: "100%",
		afterLoad: function(cur){
			if(this.content.hasClass("popup_dark")) {
				$.fancybox.helpers.overlay.overlay.css("background", "#282b2b");
				$.fancybox.helpers.overlay.overlay.addClass("tpl-dark");
			}
		}
	});	
});
