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

        $('.filter-item').each(function(i,e) {
          var group = $(e).attr('data-filter-group')
          filterGroups[group] = []
        });

        filterList = [];

        $itemsWrap = $('.isotope-wrap');
        $items = $itemsWrap.find('.isotope-item ');
        $noFilterResult = $itemsWrap.find('.no-results');

        // filter items when filter link is clicked
        $('.filter-item, .filter-icon').click(function(e){

            e.preventDefault();

            var filterGroup = ''
            if (ref.options.multiple) {
                filterGroup = $(this).attr('data-filter-group')
            } else {
                filterGroup = 'default';
            }

            var filter = $(this).attr('data-filter');


            if(!$(this).hasClass('active')){
                //add filter

                if ($(this).hasClass('not-active')) {
                  $(this).removeClass('not-active');
                }

                if(!ref.options.multiple){
                    filterList = [];
                    filterGroups[filterGroup] = []
                    $('.filter-item').not(this).addClass('not-active');
                } else {
                }

                ref.addFilterToList(filterGroup, filter);

                $('.filter-item[data-filter-group="' + filterGroup + '"]').each(function (i, e) {
                    var f = $(e).attr('data-filter');
                    if (filterGroups[filterGroup].indexOf(f) < 0) {
                       $(this).addClass('not-active')
                    }
                })

                $(this).addClass('active');

            } else {
                // $('.filter-item').removeClass('not-active');

                if(!ref.options.multiple){
                    filterList = [];
                    filterGroups[filterGroup] = []
                }

                //remove filter
                ref.removeFilterFromList(filterGroup, filter);

                $('.filter-item[data-filter-group="' + filterGroup + '"]').each(function (i, e) {
                    var f = $(e).attr('data-filter');
                    if (filterGroups[filterGroup].indexOf(f) < 0) {
                       $(this).addClass('not-active')
                    }
                })

                if (filterGroups[filterGroup].length === 0) {
                   $('.filter-item[data-filter-group="' + filterGroup + '"]').removeClass('not-active');
                }

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
           var filter = [];
           var groups = Object.keys(obj)

           var recconcat = function (t, i) {
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

           console.log(obj)

           filter = recconcat(obj[groups[0]], 0)
           return filter.join(',')
    }

    IsotopeController.prototype.setTileZindex = function($e){
        for(var a=0; a<$items.length;++a){
            var $t = $items.eq(a);
            if($t == $e){
                $t.css('zIndex',20);
            } else $t.css('zIndex',-1);
        }
    };

    IsotopeController.prototype.addFilterToList = function(group, filter){
        Logger.log("add filter -> " + filter, group);
        filterGroups[group].push(filter);
        ref.filterList();
    };

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
                multiple: true,
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
