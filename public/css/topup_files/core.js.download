$(document).ready(function () {


    $(".umenu").hover(function () {
        $(".umenu").removeClass("active");
        $(this).addClass("active");
    });

    $(function (e) {
        var url = document.location.toString();
        if (url.match('#')) {
            $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
        }

        // Change hash for page-reload
        $('.nav-tabs a').on('shown', function (e) {
            window.location.hash = e.target.hash;
        })
    });

//AJAX NOTIFICATOR:
    jQuery(document).ajaxStart(function () {
        ajaxNoty = myNotify('<img src="/images/ajax-loader(2).gif" /> Sending your request..', 'information', false);
    });

    jQuery(document).ajaxStop(function () {
        ajaxNoty.close();
    });

    $("#createOperationAmountSubmit").on("click", null, function () {

        var grid = $('.grid-view').attr("id");

        var data = {};
        data['amount'] = $("#createOperationAmountInput").val();
        data['payment_type'] = $("#createOperationType").val();


        $.ajax({
            type: 'GET',
            url: "/operations/history/add",
            data: data,
            success: function (result) {
                $('#' + grid).yiiGridView.update(grid);
            },
            error: function () {
                myNotify(ajaxError, 'error', 3);
            },
            dataType: 'json'
        });
    });

    jQuery.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }


});

