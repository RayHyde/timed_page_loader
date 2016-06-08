/* ----------------------------------------------------------------------
* File name:		jquery.timed-page-loader.js
* Version:			1.0
* Description:	show timer then automatically loads next page
* Website:			generic jQuery plugin
* Version:			3-1-2016
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

(function ($) {
	$.fn.timedPageLoader = function (options) {
		
		// default settings
		var settings = $.extend({
			fuseTime: 10000,
			loadPages : [ 
										{ 'load': 'page1.html',
											'title': 'Page 1'
										}, 
										{ 'load': 'page2.html',
											'title': 'Page 2'
										}, 
										{ 'load': 'page3.html',
											'title': 'Page 3'
										}, 
										{ 'load': 'page4.html',
											'title': 'Page 4'
										}, 
										{ 'load': 'page5.html',
											'title': 'Page 5'
										}
									]
		}, options);
		
		// some vars
		var $parent = this,
				$fuse = this.find('.fuse'),
				$verticalFuse = this.find('.fuse.vertical'),
				$horizontalFuse = this.find('.fuse.horizontal'),
				fuseContainerHeight = $('.fuse-container').height(),
				fuseContainerWidth = $('.fuse-container').width(),
				countPages = 0,
				fh, fw, howFarGone, nextPage, fuseTime;
		
		$(document).ready(function() {
			
			//load the first page and show it
			$( "#page-current" ).load( settings.loadPages[0].load );
			
			// load the next page into a hidden div
			$( "#page-new" ).load( "page2.html" );
			
			// if all the pages are listed next to the bar
				// calculate how far apart they need to be
				var totalPages = settings.loadPages.length;
				var incr = (fuseContainerHeight -30) / (totalPages -1);
				
				// then place them next to the bar
				for ( var i=0;i< totalPages;i++ ) {
					var pageToLoad = settings.loadPages[i].load;
					$parent.append('<div style="top: ' + (incr*i) + 'px" class="load-page" data-load="'+ pageToLoad +'">' + settings.loadPages[i].title +'</div>');
				}
				
				// now we need to multiply the timing of the bar by the number of intervals
				// between the pages
				fuseTime = settings.fuseTime * (totalPages - 1);
				
				// now we need to set a trigger to load the future pages when the fuse passes them
				
				
				
		});


		// this is the animation for a vertical bar
		function fuseVertical() {
			fh = $fuse.height();
			howFarGone = fh / fuseContainerHeight;
			
			$fuse.animate({
				height: 0
			}, fuseTime * howFarGone, 'linear', function () {
				pageSwitch();					
			});
		}
		
		// this is the animation for a horizontal bar
		function fuseHorizontal() {
			fw = $fuse.width();
			howFarGone = fw / fuseContainerWidth;
			
			$fuse.animate({
				width: 0
			}, fuseTime * howFarGone, 'linear', function () {
					pageSwitch();
			});
		}
		
		// this checks if a horizontal or vertical bar is present in the HTML
		// then directs to their respective animation functions
		function whichFuse() {			
			if ( $verticalFuse.length > -1 ) {
				fuseVertical();
			} else {
				fuseHorizontal();
			}
		}
				
		// this function switches the second page to the first page
		function pageSwitch() {
			
			$('#page-current').fadeOut(1000, function() {
				$(this).html( $('#page-new').html());
				$(this).fadeIn(1000);				
				if ( countPages < settings.loadPages.length) {
					nextPage = settings.loadPages[countPages].load;
				}
				if (nextPage.length > -1 ) {
					countPages++;
					whichFuse();
				} else {
					/***** check this ******/
					$parent.fadeOut();
				}
				$('#page-new').load( nextPage );				
			});
		}
		
		// this loads the intial Ajax pages after the main page is loaded
		whichFuse();
		
		// this happens when the bar is clicked
		$parent.click(function () {
			// swith the icon from pause to play and vive versa
			var state = $(this).find('.glyphicon:visible').attr('class');
			$(this).find('.glyphicon:visible').fadeOut().siblings('.glyphicon').fadeIn();
			
			// stop the animation or resume it, depending on its state
			if ( state.indexOf('pause') > -1 ) {
				$fuse.stop();
			} else {
				whichFuse();
			}
		});
		
	}
}(jQuery));