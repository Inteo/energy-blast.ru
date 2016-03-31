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
			if(this.content.hasClass("popup_grey")) {
				$.fancybox.helpers.overlay.overlay.css("background", "#35393a");
				$.fancybox.helpers.overlay.overlay.addClass("tpl-grey");
			}
		}
	});	
	  $(".input.valid").unbind().blur( function(){
    var id = $(this).attr('id');
    var val = $(this).val();
    switch(id)
    {
      case "email":
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if(val != '' && rv_email.test(val))
        {
          $(this).addClass('input_success');
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
        }
      break;  
      case "name":
      case "company":
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if(val.length > 2 && val != '' && rv_name.test(val))
        {
          $(this).addClass('input_success');
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
        }
      break;   
      case "phone":
        var rv_phone = /^\d+$/;
        if(val.length > 5 && rv_phone.test(val) && val != '')
        {
           $(this).addClass('input_success');
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
        }
      break;      
    } 
  }); 
});
