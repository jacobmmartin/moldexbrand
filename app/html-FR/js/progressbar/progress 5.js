(function($) {
 "use strict";

(function( $ ){
  // Simple wrapper around jQuery animate to simplify animating progress from your app
  // Inputs: Progress as a percent, Callback
  // TODO: Add options and jQuery UI support.
  $.fn.animateProgress = function(progress, callback) {    
    return this.each(function() {
      $(this).animate({
        width: progress+'%'
      }, {
        duration: 2000, 
        
        // swing or linear
        easing: 'swing',

        // this gets called every step of the animation, and updates the label
        step: function( progress ){
          var labelEl = $('.ui-label', this),
              valueEl = $('.value', labelEl);
          
          if (Math.ceil(progress) < 10 && $('.ui-label', this).is(":visible")) {
            labelEl.hide();
          }else{
            if (labelEl.is(":hidden")) {
              labelEl.fadeIn();
            };
          }
          
     
        },
        complete: function(scope, i, elem) {
          if (callback) {
            callback.call(this, i, elem );
          };
        }
      });
    });
  };
})( jQuery );

$(function() {
  // Hide the label at start
  $('#progress_bar .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar .ui-progress').animateProgress(100, function() {
    $(this).animateProgress(91, function() {
      setTimeout(function() {
        $('#progress_bar .ui-progress').animateProgress(100, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});


$(function() {
  // Hide the label at start
  $('#progress_bar2 .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar2 .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar2 .ui-progress').animateProgress(15, function() {
    $(this).animateProgress(11, function() {
      setTimeout(function() {
        $('#progress_bar2 .ui-progress').animateProgress(15, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});


$(function() {
  // Hide the label at start
  $('#progress_bar3 .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar3 .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar3 .ui-progress').animateProgress(15, function() {
    $(this).animateProgress(11, function() {
      setTimeout(function() {
        $('#progress_bar3 .ui-progress').animateProgress(15, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});


$(function() {
  // Hide the label at start
  $('#progress_bar4 .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar4 .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar4 .ui-progress').animateProgress(65, function() {
    $(this).animateProgress(56, function() {
      setTimeout(function() {
        $('#progress_bar4 .ui-progress').animateProgress(65, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});

$(function() {
  // Hide the label at start
  $('#progress_bar5 .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar5 .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar5 .ui-progress').animateProgress(100, function() {
    $(this).animateProgress(90, function() {
      setTimeout(function() {
        $('#progress_bar5 .ui-progress').animateProgress(100, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});

$(function() {
  // Hide the label at start
  $('#progress_bar6 .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar6 .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar6 .ui-progress').animateProgress(100, function() {
    $(this).animateProgress(90, function() {
      setTimeout(function() {
        $('#progress_bar6 .ui-progress').animateProgress(100, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});

$(function() {
  // Hide the label at start
  $('#progress_bar7 .ui-progress .ui-label').hide();
  // Set initial value
  $('#progress_bar7 .ui-progress').css('width', '7%');

  // Simulate some progress
  $('#progress_bar7 .ui-progress').animateProgress(100, function() {
    $(this).animateProgress(90, function() {
      setTimeout(function() {
        $('#progress_bar7 .ui-progress').animateProgress(100, function() {
          $('#main_content').slideDown();
          $('#fork_me').fadeIn();
        });
      }, 2000);
    });
  });
  
});


})(jQuery);