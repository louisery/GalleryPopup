(function ($) {
    $.fn.galleryPopUp = function () {

        //create overlay
        var $overlay = $("<div id = 'overlay'></div>");
        //image
        var $image = $("<img>");
        //close button
        var $close = $("<img id = 'closeImg'>");

        $("body").append($overlay);
        $overlay.append($image);
        $overlay.append($close);

        //prevent default settings on anchor tags
        $("#imgGallery a").click(function (event) {
            event.preventDefault();

            var imgSrc = $(this).attr("href");
            $image.attr("src", imgSrc);
            $close.attr("src", "images/close.png");

            $overlay.show();
        });

        //make the close button work
        $close.click(function () {
            $($overlay).hide();
        });

        //or click anywhere on the overlay to close
        $overlay.click(function () {
            $($overlay).hide();
        });

    }
}(jQuery));
