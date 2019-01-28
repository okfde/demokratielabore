
function sendContentToStaticman(formSel, waitMsgDiv, successMsgDiv, errorMsgDiv, spamInfo) {
    return function () {
      var form = $(formSel);
      console.log(form)
      $(waitMsgDiv).toggle();
      $(errorMsgDiv).hide();

      $(spamInfo).remove();

      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            form.toggle();
            $(waitMsgDiv).toggle();
            $(successMsgDiv).toggle();
            window.scrollTo(0, 0);
        },
        error: function (err) {
            $(waitMsgDiv).toggle();
             $(errorMsgDiv).show();

            if (err.status === 429) {
                 console.log("Too many requests");
            }
        }
      });

      return false;
    }
}

jQuery(document).ready(function($) {
  $('#edit-idea-form').submit(sendContentToStaticman('#edit-idea-form', '#idea-submit-waiting', '#idea-submit-message', '#idea-submit-error', '#spam_info'));

  console.log('Configure Staticman');

  // This is the maximum number of characters in the idea description
  var maxShortDesc = 500;

  $projectShortDescLeft = $('#project-form-short-description-left');
  var updateShortDescCounter = function () {
      if($projectShortDesc.val()){
          var Length =  $projectShortDesc.val().length;
          var AmountLeft = maxShortDesc - Length;
          $projectShortDescLeft.html('(noch ' + AmountLeft + ' Zeichen)');
      }
  };

  $projectShortDesc = $('#project-form-short-description');
  $projectShortDesc.keypress(function(event){
      var Length =  $projectShortDesc.val().length;
      var AmountLeft = maxShortDesc - Length;
      if(Length >= maxShortDesc) {
          if (event.which != 8) {
              return false;
          }
      }
  }).on('input', function(event) {
      updateShortDescCounter();
  });
});

