jQuery(document).ready(function ($) {
  $('.selectFilter').change((e) => {
    window.isotope.addFilterSelectToList($(e.target).attr('data-group'), $(e.target).val());
  })
})
