
$(document).ready(function() {

    //function to add html content in title for jquery ui
    $(document).tooltip({
        content: function() {
            return $(this).attr('title');
        }
    });

    //plays video in assignment container
    $(document).ready(function () {
        $(".assignment").hover(function () {
            $(this).children("video")[0].play();
        }, function () {
            var el = $(this).children("video")[0];
            el.pause();
            el.currentTime = 0;
        });
    });


    $('.chart').tooltip({ 
    	position: ({ 
    		within: ".chart",
    	}), 
    	track: true
    });

    $('.mapLegend').tooltip({ 
        position: ({ 
            within: ".svgMap",
        }), 
        track: true
    });

    $('.svgMap').tooltip({ 
        position: ({ 
            within: ".svgMap",
        }), 
        track: true
    });

    $('.more-info').tooltip({ 
        position: ({ 
            within: ".mapLegend",
        }), 
        track: true
    });

});