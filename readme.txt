Timed Page Loader, a jQuery plugin
Show a timer bar before the next Ajax page load

This plugin lets you automatically load page via Ajax and ideal for kiosk applications. The reader get visual feedback and clicking on the time bar stops and contionues the animation. There are even direct links that take the reader immediately to the next page if needed.

The Goodies

You can start/stop the loading by clicking on the timer bar.

You can activate the plugin on as many elements on the page as you need, bar the processing limts of your viewer's computer, of course.

The plugin looks at a link in the loaded pages with the class name ".next-page" and uses that to load the next page in the background while still showing the first page. In these examples, the link works and loads the next page when clicked. You might also opt to hide it via CSS.

You can set the speed of the loading time and you have tghe choice of a vertical or a horizontal loading bar.

The loading bar you can style as you want - have it fixed on the side of the page, see-through, or even hidden.

How to use this plugin

1. Link the files you need
Include the jQuery script at the bottom of your page, e.g. through a CDN:

<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>

Then include the minimized version of the script:

<script src="[path to your script]/jquery.timed-page-loader.min.js"></script>

Change [path to your script] to where it resides, eg "js".

2. Create your HTML markup
This is very simple: create an element and style the element containing it. Like

<div id="wrap1" class="page-wrap"></div>
<style>
  .page-wrap {
    height: 360px;
  }
  .fuse-container {
    background: slateblue;
    ...
  }
  .fuse-container .fuse {
    background: #9F95DF;
    ...
  }
  ...
</style>

3. Call the plugin
Then initialize the plugin, telling it in which element it needs to run:

<script>
  $(<containing element here, e.g. "#wrap1">).timedPageLoader({
    fuseTime: 10000, 
    firstPage: 'page1.html',
    direction: 'vertical'
  });

  // a second container:
  $(<containing element here, e.g. "#wrap2">).timedPageLoader({
    fuseTime: 12000, 
    firstPage: 'newpage1.html',
    direction: 'horizontal'
  });
</script>
	

4. Putting it all together
This is your basic page to get the plugin up and running:

<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="css/mytime_pageloader.css">
  </head>
  <body>
  ...
    <div id="wrap1" class="page-wrap"></div>
    ...
    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="js/jquery.timed_page_loader.min.js"></script>
    <script>
        $('#wrap1').timedPageLoader();	
    </script>
  </body>
</html>
			

Options
If you don't specify options, like in the example above, the plugin will use its default settings:
- loading speed: 10000 in thousands of a second, so 10 seconds
- the first page that gets loaded is 'page1.html'
- a horizontal bar

These are the options:

Speed
in the usual thousands of seconds
fuseTime: 10000

First page to load
The first page that needs to be loaded via Ajax:
firstPage: 'page1.html'

Horizontal or vertical bar
You can specify if you want a horizontal or a vertical timer bar.
direction: 'vertical'
 

This jQuery plugin is part of my Playground - a collection of fun stuff I made in the past, from jQuery games and plugins to CSS animation tests.

Please drop in on the playground section of my portfolio site www.rayhyde.nl!
