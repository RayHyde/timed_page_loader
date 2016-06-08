Timed Page Loader, a jQuery plugin
Show a timer bar before the next Ajax page load

This plugin lets you automatically load page via Ajax and ideal for kiosk applications. The reader get visual feedback and clicking on the time bar stops and contionues the animation. There are even direct links that take the reader immediately to the next page if needed.

See it in action: <a href="http://rayhyde.github.io/timed-page-loader/">http://rayhyde.github.io/timed-page-loader/</a>

<h2>The Goodies</h2>
<ul>
	<li>You can start/stop the loading by clicking on the timer bar.</li>
	<li>You can activate the plugin on as many elements on the page as you need, bar the processing limits of your viewer's computer, of course.</li>
	<li>The plugin looks at a link in the loaded pages with the class name ".next-page" and uses that to load the next page in the background while still showing the first page. In these examples, the link works and loads the next page when clicked. You might also opt to hide it via CSS.</li>
	<li>You can set the speed of the loading time and you have the choice of a vertical or a horizontal loading bar.</li>
	<li>The loading bar you can style as you want - have it fixed on the side of the page, see-through, or even hidden.</li>
</ul>
<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery.timed-page-loader.min.js"&gt;&lt;/script&gt;</code></p>

<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Create your HTML markup</h3>
<p>This is very simple: create an element and style the element containing it. Like</p>
<pre>&lt;div id="wrap1" class="page-wrap"&gt;&lt;/div&gt;
&lt;style&gt;
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
&lt;/style&gt;
			</pre>
					<h3>3. Call the plugin</h3>
					<p>Then initialize the plugin, telling it in which element it needs to run:</p>
					<pre>
&lt;script&gt;
  $(&lt;containing element here, e.g. "#wrap1"&gt;).timedPageLoader({
    fuseTime: 10000, 
    firstPage: 'page1.html',
    direction: 'vertical'
  });

  // a second container:
  $(&lt;containing element here, e.g. "#wrap2"&gt;).timedPageLoader({
    fuseTime: 12000, 
    firstPage: 'newpage1.html',
    direction: 'horizontal'
  });
&lt;/script&gt;
	</pre>
					<h3>4. Putting it all together</h3>
					<p>This is your basic page to get the plugin up and running:</p>
					<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    ...
    &lt;link rel="stylesheet" href="css/mytime_pageloader.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  ...
    &lt;div id="wrap1" class="page-wrap"&gt;&lt;/div&gt;
    ...
    &lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;
    &lt;script src="js/jquery.timed_page_loader.min.js"&gt;&lt;/script&gt;
    &lt;script&gt;
        $('#wrap1').timedPageLoader();	
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;

</pre>
<h2>Options</h2>
<p>If you don't specify options, like in the example above, the plugin will use its default settings:
	<br> - loading speed: 10000 in thousands of a second, so 10 seconds
	<br> - the first page that gets loaded is 'page1.html'
	<br> - a horizontal bar
</p>
<p>These are the options:</p>
<h3>Speed</h3>
<p>in the usual thousands of seconds</p>
<code>fuseTime: 10000</code>
<h3>First page to load</h3>
<p>The first page that needs to be loaded via Ajax:</p>
<code>firstPage: 'page1.html'</code>
<h3>Horizontal or vertical bar</h3>
<p>You can specify if you want a horizontal or a vertical timer bar.</p>
<code>direction: 'vertical'</code>

<p>This jQuery plugin is part of my Playground - a collection of fun stuff I made in the past, from jQuery games and plugins to CSS animation tests.</p>
<p class="extra-padding"><a href="http://rayhyde.nl/pf_js-en.php">Drop in on my playground section at www.rayhyde.nl!</a></p>