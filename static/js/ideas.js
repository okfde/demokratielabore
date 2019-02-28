jQuery(document).ready(function ($) {
  $("select[multiple='multiple']").change((e) => {
    window.isotope.addFilterSelectToList($(e.target).attr('data-group'), $(e.target).val());
  }).chosen();
})
