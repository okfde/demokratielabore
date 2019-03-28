jQuery(document).ready(function ($) {
  var selectedThema = $('#selectedFilters');
  $("select").change(function (e) {
    window.isotope.addFilterSelectToList($(e.target).attr('data-group'), '.' + $(e.target).val());
    selectedThema.empty();
    for (let k in window.isotope.filterGroups) {
      for (let f of window.isotope.filterGroups[k]) {
        let filter = f.slice(1)
        let option = $('option[value="'+ filter + '"]');
        option[0].disabled = true
        let selectedButton = $('<span class="enabled ' + k +'">' + option.text() + ' ×</span>');
        selectedButton.click(function () {
           window.isotope.removeFilterFromList(k, filter, true)
           var option = $('option[value="'+ filter + '"]');
           option[0].disabled = false
           $(this).remove()
        });
        selectedThema.append(selectedButton);
      }
    }
    this.selectedIndex = 0;
   });
})
