/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 16.06.2017
 * Created: 14:51
 **/
(function(window){

    IsotopeController.prototype.constructor = IsotopeController;
    IsotopeController.prototype = {
        options: {
            multiple: false
        }
    };

    var ref, controller, filterList, filterGroups,
        $itemsWrap, $items, $grid, isotopeInitialized, $noFilterResult;
    function IsotopeController(pController){
        ref = this;
        controller = pController;
    };

    IsotopeController.prototype.init = function(pOptions){

        Logger.log("Init IsotopeController.");

        ref.options = pOptions;

        filterGroups = {};
        ref.filterGroups = filterGroups;
        filterList = [];

        $itemsWrap = $('.isotope-wrap');
        $items = $itemsWrap.find('.isotope-item ');
        $noFilterResult = $itemsWrap.find('.no-results');

        // filter items when filter link is clicked
        $('.filter-item, .filter-icon').click(function(e){

            e.preventDefault();

            var $buttonGroup = $(this).parents('.filter');
            var filterGroup = ''
            if ($buttonGroup) {
                filterGroup = $buttonGroup.attr('data-filter-group');
            } else {
                filterGroup = 'default';
            }

            var filter = $(this).attr('data-filter');

            $('.filter-item').not(this).removeClass('active');

            if(!$(this).hasClass('active')){
                //add filter

                if ($(this).hasClass('not-active')) {
                  $(this).removeClass('not-active');
                }

                if(!ref.options.multiple){
                    filterList = [];
                    filterGroups[filterGroup] = []
                    $('.filter-item').not(this).addClass('not-active');
                }

                ref.addFilterToList(filterGroup, filter);

                $(this).addClass('active');
            } else {
                $('.filter-item').removeClass('not-active');

                if(!ref.options.multiple){
                    filterList = [];
                    filterGroups[filterGroup] = []
                }

                //remove filter
                ref.removeFilterFromList(filterGroup, filter);
                $(this).removeClass('active hover');
            }

            return false;
        }).mouseover(function()
        {
            $(this).addClass('hover');
        }).mouseout(function()
        {
            $(this).removeClass('hover');
        });

    };

    IsotopeController.prototype.concatValues = function ( obj  ) {
           var value = '';
           for ( var prop in obj  ) {
                   value += obj[ prop  ];

           }
             return value;
    }

    IsotopeController.prototype.setTileZindex = function($e){
        for(var a=0; a<$items.length;++a){
            var $t = $items.eq(a);
            if($t == $e){
                $t.css('zIndex',20);
            } else $t.css('zIndex',-1);
        }
    };

    IsotopeController.prototype.addFilterToList = function(group, filter, unique=false, andFilter=true){
        Logger.log("add filter -> ",  filter);
        //check if filter is already in list
        var found = false;
        if (!filter) {
          filterGroups[group] = []
          ref.filterList();
          return
        }

        if (filterGroups.hasOwnProperty(group)) {
            for (var a = 0; a < filterGroups[group].length; ++a) {
                var f = filterGroups[group][a];
                if(filter == f) found = true;
            }
        } else {
             filterGroups[group] = [];
             found = false;
        }
        if(!found) {
          if (!unique) {
            filterGroups[group].push(filter);
          } else {
            filterGroups[group] = filter;
          }
        }
        //ref.filterList(filterGroups.join());
        if (andFilter) {
          ref.filterList();
        }
    };

    IsotopeController.prototype.concatMultipleValues = function ( obj  ) {
      var filter = [];
      var groups = Object.keys(obj)

      var concat = function (t, i) {
        for (var r = 1; r < groups.length; ++r) {
          var nt = []
          if (t.length > 0) {
           for (var j = 0; j < t.length; ++j) {
             nt = nt.concat(obj[groups[r]].map(x => x + t[j]))
           }
           if (nt.length >= t.length) {
             t = nt
           }
          } else {
           t = obj[groups[r]]
          }
        }
        return t
      }

      filter = concat(obj[groups[0]], 0)
      return filter.join(',')
    }

    IsotopeController.prototype.addFilterSelectToList = function(group, filter){
      var filterValue = '';
      if (filter) {
        filterGroups[group] = filter.map(x=>'.'+x)
      } else {
        filterGroups[group] = [];
      }

      filterValue = ref.concatMultipleValues(filterGroups)

      $itemsWrap.isotope({ filter: filterValue });
    }

    IsotopeController.prototype.removeFilterFromList = function(group, filter){
        Logger.log("remove filter -> " + filter);
        //check if filter is already in list
        for (var a = 0; a < filterGroups[group].length; ++a) {
            var f = filterGroups[group][a];
            if(filter == f)filterGroups[group].splice(a, 1);
        }
        //ref.filterList(filterList.join());
        ref.filterList();
    };

    IsotopeController.prototype.filterList = function(filters){
        var filterValue = ref.concatValues(filterGroups);
        Logger.log("filterValue!!! -> ", filterValue);

        $noFilterResult.addClass('hidden');

        $itemsWrap.isotope({ filter: filterValue });
    };

    IsotopeController.prototype.resize = function(viewportChanged){

        /*
        $('.project-content-tile').css( "width", "");
        $('.isotope-item').each(function(){
            $(this).css( "width", "").width(parseInt($(this).width()));
            $(this).find('.back').height(parseInt($(this).find('.front').height()));
        });*/

        if(!isotopeInitialized){

            Logger.log("reinit isotope");

            $grid = $itemsWrap.imagesLoaded().progress( function( imgLoad, image ) {
                $itemsWrap.isotope('layout');
            }).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                masonry: {
                    // use element for option
                    columnWidth: '.grid-sizer',
                    horizontalOrder: true
                }/*,
                 getSortData: {
                 title: '[data-title]' // value of attribute
                 },
                 // sort by title
                 sortBy: 'title'*/
            });
            isotopeInitialized = true;
            setTimeout(function(){
                $itemsWrap.isotope('layout');
            }, 50);


            $grid.on( 'layoutComplete', function( event, filteredItems ) {
                Logger.log( '++++++++++++++++++++layoutComplete with ' + filteredItems.length + ' items' );
                if(filteredItems.length == 0) $noFilterResult.removeClass('hidden');
            });

        }

    };

    window.IsotopeController = IsotopeController;

}(window));
