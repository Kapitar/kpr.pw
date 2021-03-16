$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(400);

	$("a.transition").click(function(event){
        event.preventDefault();
        $("body").fadeOut(400);
		var self = this;
		setTimeout(function () {
            window.location.href = $(self).attr("href");
        }, 400);
	});
});
