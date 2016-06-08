/* ----------------------------------------------------------------------
* File name:		jquery.timed-page-loader.js
* Version:			1.0
* Description:	show timer then automatically loads next page
* Website:			generic jQuery plugin
* Version:			12-1-2016
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

(function ($) {
	$.fn.timedPageLoader = function (options) {

		// default settings
		var settings = $.extend({
			fuseTime: 10000,
			firstPage: 'page1.html',
			direction: 'horizontal'
		}, options);

		// some vars
		var $parent = this,
			$fuse, fuseContainerHeight, fuseContainerWidth,
			countPages = 0,
			fh, fw, howFarGone, nextPage;

		// this function switches the second page to the first page
		function pageSwitch() { 

			$parent.find('.page-current').fadeOut(1000, function () {
				$(this).html($parent.find('.page-new').html());
				$(this).fadeIn(1000);

				nextPage = $parent.find('.page-current .next-page').attr('href');
				if (nextPage.length > -1) {

					// this resets the bar animation to zero when a new page is loaded:
					
					if (settings.direction == 'vertical') {
						console.log('fuseContainerHeight: ' + fuseContainerHeight);
						$fuse.height(fuseContainerHeight);
					} else {
						$fuse.width(fuseContainerWidth);
					}
					
					animateFuse();
				} else {
					/***** check this ******/
					$parent.fadeOut();
				}
				$parent.find('.page-new').load(nextPage);
			});
		}

		// this is the animation for the bar
		function animateFuse() {
			if ($parent.hasClass('vertical')) {
				fh = $fuse.height();
				howFarGone = fh / fuseContainerHeight;

				$fuse.animate({
					height: 0
				}, settings.fuseTime * howFarGone, 'linear', function () {
					pageSwitch();
				});

			} else {
				fw = $fuse.width();
				howFarGone = fw / fuseContainerWidth;

				$fuse.animate({
					width: 0
				}, settings.fuseTime * howFarGone, 'linear', function () {
					pageSwitch();
				});
			}
		}


		$(document).ready(function () {
			if (settings.direction == 'vertical') {
				$parent.addClass('vertical');
			} else {
				$parent.addClass('horizontal');
			}

			// This insert the timer bar
			$parent.append('<div class="fuse-container"><div class="fuse"></div><div class="glyphicon glyphicon-pause"></div><div class="glyphicon glyphicon-play"></div></div><div class="page-current"></div><div class="page-new"></div>');
			
			$fuse = $parent.find('.fuse'),
			fuseContainerHeight = $parent.height(),
			fuseContainerWidth = $parent.width(),
			
			//load the first page and show it
			$(".page-current").load(settings.firstPage);

			// load the next page into a hidden div
			$(".page-new").load("page2.html");

			animateFuse();
		});

		// this happens when the bar is clicked
		$parent.on('click','.fuse-container', function () {
			// swith the icon from pause to play and vive versa
			var state = $(this).find('.glyphicon:visible').attr('class');
			$(this).find('.glyphicon:visible').fadeOut().siblings('.glyphicon').fadeIn();

			// stop the animation or resume it, depending on its state
			if (state.indexOf('pause') > -1) {
				$fuse.stop();
			} else {
				animateFuse();
			}
		});
		
		// this happens when a direct link to the next page is clicked
		$parent.on('click', '.next-page', function() {
			$fuse.stop();
			pageSwitch();
			return false;
		});

	}
}(jQuery));