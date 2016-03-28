  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-color/grunt.js at master · jquery/jquery-color · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="RL6W9W9RdM9z4fHBh1ZonITi2K9kXvRSHP2fI7zRqwc=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-d5919c2c85462b6c3d5b24d94361e0cfe7c6d3c1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-870db7f5279296d5dbf0da6364d2ae19bda183cc.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-c0439b281928dd009b3a75e187d4b94c7abe5890.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="14f79f6751c8415cf388e9730a05fea0">

        <link data-pjax-transient rel='permalink' href='/jquery/jquery-color/blob/4dbeea35420bac76957ccee582f73ace87d532e7/grunt.js'>
    <meta property="og:title" content="jquery-color"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jquery/jquery-color"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/6906f317a4733f4379b06c32229ef02f?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-color - jQuery plugin for color manipulation and animation support."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jquery/jquery-color"/>

    <meta name="description" content="jquery-color - jQuery plugin for color manipulation and animation support." />

  <link href="https://github.com/jquery/jquery-color/commits/master.atom" rel="alternate" title="Recent Commits to jquery-color:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

      <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
        <a class="button primary" href="https://github.com/signup">Sign up for free</a>
      <a class="button" href="https://github.com/login?return_to=%2Fjquery%2Fjquery-color%2Fblob%2Fmaster%2Fgrunt.js">Sign in</a>
    </div>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li class="search"><a href="https://github.com/search">Search</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fjquery%2Fjquery-color"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/jquery/jquery-color/stargazers">
        738
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fjquery%2Fjquery-color"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/jquery/jquery-color/network" class="social-count">
        173
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/jquery" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jquery</span>
                  </a></span> /
                <strong><a href="/jquery/jquery-color" class="js-current-repository">jquery-color</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jquery/jquery-color/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jquery/jquery-color/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/jquery/jquery-color" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jquery/jquery-color">Code</a></li>
    <li><a href="/jquery/jquery-color/network" class="js-selected-navigation-item " data-selected-links="repo_network /jquery/jquery-color/network">Network</a></li>
    <li><a href="/jquery/jquery-color/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jquery/jquery-color/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/jquery/jquery-color/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jquery/jquery-color/issues">Issues <span class='counter'>2</span></a></li>



    <li><a href="/jquery/jquery-color/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jquery/jquery-color/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jquery/jquery-color/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jquery/jquery-color/tags">Tags <span class="counter ">5</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/gh-pages/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/master/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/v1/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1" rel="nofollow" title="v1">v1</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/2.1.2/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.1.2" rel="nofollow" title="2.1.2">2.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/2.1.1/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.1.1" rel="nofollow" title="2.1.1">2.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/2.1.0/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.1.0" rel="nofollow" title="2.1.0">2.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/2.0b1/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.0b1" rel="nofollow" title="2.0b1">2.0b1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jquery/jquery-color/blob/2.0.0/grunt.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.0.0" rel="nofollow" title="2.0.0">2.0.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jquery/jquery-color" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jquery/jquery-color">Files</a></li>
    <li><a href="/jquery/jquery-color/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jquery/jquery-color/commits/master">Commits</a></li>
    <li><a href="/jquery/jquery-color/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jquery/jquery-color/branches" rel="nofollow">Branches <span class="counter ">3</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:766adc6feb342a02e301a90d41604da5 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:766adc6feb342a02e301a90d41604da5 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jquery/jquery-color" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-color</span></a></span></span><span class="separator"> / </span><strong class="final-path">grunt.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="grunt.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/jquery/jquery-color/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/de31e75f0b6f31344cc18e2a15c2f1c9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/gnarf37" rel="author">gnarf37</a></span>
    <time class="js-relative-date" datetime="2013-04-09T07:09:35-07:00" title="2013-04-09 07:09:35">April 09, 2013</time>
    <div class="commit-title">
        <a href="/jquery/jquery-color/commit/eec69d070d22300916962730d705c3ca0dda0ac2" class="message">Update .jshintrc to conform to jQuery standard - Closes</a> <a href="https://github.com/jquery/jquery-color/issues/56" class="issue-link" title="Update .jshintrc to match style guide">#56</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="gnarf37" href="/jquery/jquery-color/commits/master/grunt.js?author=gnarf37"><img height="20" src="https://secure.gravatar.com/avatar/de31e75f0b6f31344cc18e2a15c2f1c9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mikesherov" href="/jquery/jquery-color/commits/master/grunt.js?author=mikesherov"><img height="20" src="https://secure.gravatar.com/avatar/a123410cfb9ea6510294a295bb548530?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="scottgonzalez" href="/jquery/jquery-color/commits/master/grunt.js?author=scottgonzalez"><img height="20" src="https://secure.gravatar.com/avatar/35da631954825179143c86fa42a10954?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jzaefferer" href="/jquery/jquery-color/commits/master/grunt.js?author=jzaefferer"><img height="20" src="https://secure.gravatar.com/avatar/a9d4d2558b560b0ef168ced0f6c5198c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/de31e75f0b6f31344cc18e2a15c2f1c9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/gnarf37">gnarf37</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a123410cfb9ea6510294a295bb548530?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mikesherov">mikesherov</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/35da631954825179143c86fa42a10954?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/scottgonzalez">scottgonzalez</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a9d4d2558b560b0ef168ced0f6c5198c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jzaefferer">jzaefferer</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jquery/jquery-color/blob/4dbeea35420bac76957ccee582f73ace87d532e7/grunt.js" data-title="jquery-color/grunt.js at master · jquery/jquery-color · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>188 lines (153 sloc)</span>
                <span>4.531 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/jquery/jquery-color/raw/master/grunt.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jquery/jquery-color/blame/master/grunt.js" class="button minibutton ">Blame</a>
                  <a href="/jquery/jquery-color/commits/master/grunt.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*jshint node: true */</span></div><div class='line' id='LC2'><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">grunt</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="kd">var</span> <span class="nx">max</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;dist/jquery.color.js&quot;</span><span class="p">,</span> <span class="s2">&quot;dist/jquery.color.svg-names.js&quot;</span> <span class="p">],</span></div><div class='line' id='LC7'>	<span class="nx">min</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;dist/jquery.color.min.js&quot;</span><span class="p">,</span> <span class="s2">&quot;dist/jquery.color.svg-names.min.js&quot;</span><span class="p">,</span> <span class="s2">&quot;dist/jquery.color.plus-names.min.js&quot;</span><span class="p">],</span></div><div class='line' id='LC8'>	<span class="nx">combined</span> <span class="o">=</span> <span class="s2">&quot;dist/jquery.color.plus-names.js&quot;</span><span class="p">,</span></div><div class='line' id='LC9'>	<span class="nx">minify</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC10'>	<span class="nx">concat</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="nx">minify</span><span class="p">[</span> <span class="nx">min</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;&lt;banner&gt;&quot;</span><span class="p">,</span> <span class="nx">max</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">];</span></div><div class='line' id='LC13'><span class="nx">minify</span><span class="p">[</span> <span class="nx">min</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;&lt;banner:meta.bannerSvg&gt;&quot;</span><span class="p">,</span> <span class="nx">max</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">];</span></div><div class='line' id='LC14'><span class="nx">minify</span><span class="p">[</span> <span class="nx">min</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="s2">&quot;&lt;banner:meta.bannerCombined&gt;&quot;</span><span class="p">,</span> <span class="nx">combined</span> <span class="p">];</span></div><div class='line' id='LC15'><span class="nx">concat</span><span class="p">[</span> <span class="nx">combined</span> <span class="p">]</span> <span class="o">=</span> <span class="p">[</span> <span class="nx">max</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">max</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">];</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="nx">grunt</span><span class="p">.</span><span class="nx">loadNpmTasks</span><span class="p">(</span> <span class="s2">&quot;grunt-compare-size&quot;</span> <span class="p">);</span></div><div class='line' id='LC18'><span class="nx">grunt</span><span class="p">.</span><span class="nx">loadNpmTasks</span><span class="p">(</span> <span class="s2">&quot;grunt-git-authors&quot;</span> <span class="p">);</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="nx">grunt</span><span class="p">.</span><span class="nx">initConfig</span><span class="p">({</span></div><div class='line' id='LC21'>	<span class="nx">pkg</span><span class="o">:</span> <span class="s2">&quot;&lt;json:package.json&gt;&quot;</span><span class="p">,</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>	<span class="nx">meta</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC24'>		<span class="nx">banner</span><span class="o">:</span> <span class="s2">&quot;/*! jQuery Color v@&lt;%= pkg.version %&gt; http://github.com/jquery/jquery-color | jquery.org/license */&quot;</span><span class="p">,</span></div><div class='line' id='LC25'>		<span class="nx">bannerSvg</span><span class="o">:</span> <span class="s2">&quot;/*! jQuery Color v@&lt;%= pkg.version %&gt; SVG Color Names http://github.com/jquery/jquery-color | jquery.org/license */&quot;</span><span class="p">,</span></div><div class='line' id='LC26'>		<span class="nx">bannerCombined</span><span class="o">:</span> <span class="s2">&quot;/*! jQuery Color v@&lt;%= pkg.version %&gt; with SVG Color Names http://github.com/jquery/jquery-color | jquery.org/license */&quot;</span></div><div class='line' id='LC27'>	<span class="p">},</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>	<span class="nx">lint</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="nx">src</span><span class="o">:</span> <span class="p">[</span> <span class="s2">&quot;jquery.color.js&quot;</span><span class="p">,</span> <span class="s2">&quot;jquery.color.svg-names.js&quot;</span> <span class="p">],</span></div><div class='line' id='LC31'>		<span class="nx">grunt</span><span class="o">:</span> <span class="s2">&quot;grunt.js&quot;</span><span class="p">,</span></div><div class='line' id='LC32'>		<span class="nx">test</span><span class="o">:</span> <span class="s2">&quot;test/unit/**&quot;</span></div><div class='line' id='LC33'>	<span class="p">},</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="nx">jshint</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="kd">function</span> <span class="nx">parserc</span><span class="p">(</span> <span class="nx">path</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>			<span class="kd">var</span> <span class="nx">rc</span> <span class="o">=</span> <span class="nx">grunt</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">readJSON</span><span class="p">(</span> <span class="p">(</span><span class="nx">path</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;.jshintrc&quot;</span> <span class="p">),</span></div><div class='line' id='LC38'>				<span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC39'>					<span class="nx">options</span><span class="o">:</span> <span class="nx">rc</span><span class="p">,</span></div><div class='line' id='LC40'>					<span class="nx">globals</span><span class="o">:</span> <span class="nx">rc</span><span class="p">.</span><span class="nx">globals</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC41'>				<span class="p">};</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>			<span class="p">(</span><span class="nx">rc</span><span class="p">.</span><span class="nx">predef</span> <span class="o">||</span> <span class="p">[]).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">prop</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>				<span class="nx">settings</span><span class="p">.</span><span class="nx">globals</span><span class="p">[</span> <span class="nx">prop</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC45'>			<span class="p">});</span></div><div class='line' id='LC46'>			<span class="k">delete</span> <span class="nx">rc</span><span class="p">.</span><span class="nx">predef</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>			<span class="k">return</span> <span class="nx">settings</span><span class="p">;</span></div><div class='line' id='LC49'>		<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC52'>			<span class="nx">src</span><span class="o">:</span> <span class="nx">parserc</span><span class="p">(),</span></div><div class='line' id='LC53'>			<span class="nx">grunt</span><span class="o">:</span> <span class="nx">parserc</span><span class="p">(),</span></div><div class='line' id='LC54'>			<span class="nx">test</span><span class="o">:</span> <span class="nx">parserc</span><span class="p">(</span> <span class="s2">&quot;test/unit/&quot;</span> <span class="p">)</span></div><div class='line' id='LC55'>		<span class="p">};</span></div><div class='line' id='LC56'>	<span class="p">}()),</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>	<span class="nx">qunit</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC59'>		<span class="nx">files</span><span class="o">:</span> <span class="s2">&quot;test/index.html&quot;</span></div><div class='line' id='LC60'>	<span class="p">},</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>	<span class="nx">concat</span><span class="o">:</span> <span class="nx">concat</span><span class="p">,</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>	<span class="nx">min</span><span class="o">:</span> <span class="nx">minify</span><span class="p">,</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>	<span class="nx">watch</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC67'>		<span class="nx">files</span><span class="o">:</span> <span class="p">[</span> <span class="s2">&quot;&lt;config:lint.src&gt;&quot;</span><span class="p">,</span> <span class="s2">&quot;&lt;config:lint.test&gt;&quot;</span><span class="p">,</span> <span class="s2">&quot;&lt;config:lint.grunt&gt;&quot;</span> <span class="p">],</span></div><div class='line' id='LC68'>		<span class="nx">tasks</span><span class="o">:</span> <span class="s2">&quot;default&quot;</span></div><div class='line' id='LC69'>	<span class="p">},</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>	<span class="nx">compare_size</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC72'>		<span class="s2">&quot;color&quot;</span><span class="o">:</span> <span class="p">[</span> <span class="nx">max</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">min</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">],</span></div><div class='line' id='LC73'>		<span class="s2">&quot;svg-names&quot;</span><span class="o">:</span> <span class="p">[</span> <span class="nx">max</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="nx">min</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">],</span></div><div class='line' id='LC74'>		<span class="s2">&quot;combined&quot;</span><span class="o">:</span> <span class="p">[</span> <span class="nx">combined</span><span class="p">,</span> <span class="nx">min</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="p">]</span></div><div class='line' id='LC75'>	<span class="p">}</span></div><div class='line' id='LC76'><span class="p">});</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerHelper</span><span class="p">(</span> <span class="s2">&quot;git-date&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">fn</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>	<span class="nx">grunt</span><span class="p">.</span><span class="nx">utils</span><span class="p">.</span><span class="nx">spawn</span><span class="p">({</span></div><div class='line' id='LC82'>		<span class="nx">cmd</span><span class="o">:</span> <span class="s2">&quot;git&quot;</span><span class="p">,</span></div><div class='line' id='LC83'>		<span class="nx">args</span><span class="o">:</span> <span class="p">[</span> <span class="s2">&quot;log&quot;</span><span class="p">,</span> <span class="s2">&quot;-1&quot;</span><span class="p">,</span> <span class="s2">&quot;--pretty=format:%ad&quot;</span> <span class="p">]</span></div><div class='line' id='LC84'>	<span class="p">},</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">error</span><span class="p">,</span> <span class="nx">result</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">error</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC86'>			<span class="nx">grunt</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span> <span class="nx">error</span> <span class="p">);</span></div><div class='line' id='LC87'>			<span class="k">return</span> <span class="nx">fn</span><span class="p">(</span> <span class="nx">error</span> <span class="p">);</span></div><div class='line' id='LC88'>		<span class="p">}</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		<span class="nx">fn</span><span class="p">(</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">result</span> <span class="p">);</span></div><div class='line' id='LC91'>	<span class="p">});</span></div><div class='line' id='LC92'><span class="p">});</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span> <span class="s2">&quot;submodules&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC95'>	<span class="kd">var</span> <span class="nx">done</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">async</span><span class="p">();</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>	<span class="nx">grunt</span><span class="p">.</span><span class="nx">verbose</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span> <span class="s2">&quot;Updating submodules...&quot;</span> <span class="p">);</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>	<span class="nx">grunt</span><span class="p">.</span><span class="nx">utils</span><span class="p">.</span><span class="nx">spawn</span><span class="p">({</span></div><div class='line' id='LC100'>		<span class="nx">cmd</span><span class="o">:</span> <span class="s2">&quot;git&quot;</span><span class="p">,</span></div><div class='line' id='LC101'>		<span class="nx">args</span><span class="o">:</span> <span class="p">[</span> <span class="s2">&quot;submodule&quot;</span><span class="p">,</span> <span class="s2">&quot;update&quot;</span><span class="p">,</span> <span class="s2">&quot;--init&quot;</span> <span class="p">]</span></div><div class='line' id='LC102'>	<span class="p">},</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">err</span><span class="p">,</span> <span class="nx">result</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">err</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'>			<span class="nx">grunt</span><span class="p">.</span><span class="nx">verbose</span><span class="p">.</span><span class="nx">error</span><span class="p">();</span></div><div class='line' id='LC105'>			<span class="nx">done</span><span class="p">(</span> <span class="nx">err</span> <span class="p">);</span></div><div class='line' id='LC106'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC107'>		<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		<span class="nx">grunt</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">writeln</span><span class="p">(</span> <span class="nx">result</span> <span class="p">);</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>		<span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC112'>	<span class="p">});</span></div><div class='line' id='LC113'><span class="p">});</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span> <span class="s2">&quot;max&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC116'>	<span class="kd">var</span> <span class="nx">done</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">async</span><span class="p">(),</span></div><div class='line' id='LC117'>		<span class="nx">version</span> <span class="o">=</span> <span class="nx">grunt</span><span class="p">.</span><span class="nx">config</span><span class="p">(</span> <span class="s2">&quot;pkg.version&quot;</span> <span class="p">);</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">COMMIT</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>		<span class="nx">version</span> <span class="o">+=</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">COMMIT</span><span class="p">;</span></div><div class='line' id='LC121'>	<span class="p">}</span></div><div class='line' id='LC122'>	<span class="nx">grunt</span><span class="p">.</span><span class="nx">helper</span><span class="p">(</span> <span class="s2">&quot;git-date&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">error</span><span class="p">,</span> <span class="nx">date</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">error</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>			<span class="k">return</span> <span class="nx">done</span><span class="p">(</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC125'>		<span class="p">}</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>		<span class="nx">max</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">dist</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'>			<span class="nx">grunt</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span> <span class="nx">dist</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;dist/&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="p">),</span> <span class="nx">dist</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC129'>				<span class="nx">process</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">source</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>					<span class="k">return</span> <span class="nx">source</span></div><div class='line' id='LC131'>						<span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/@VERSION/g</span><span class="p">,</span> <span class="nx">version</span> <span class="p">)</span></div><div class='line' id='LC132'>						<span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/@DATE/g</span><span class="p">,</span> <span class="nx">date</span> <span class="p">);</span></div><div class='line' id='LC133'>				<span class="p">}</span></div><div class='line' id='LC134'>			<span class="p">});</span></div><div class='line' id='LC135'>		<span class="p">});</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>		<span class="nx">done</span><span class="p">();</span></div><div class='line' id='LC139'>	<span class="p">});</span></div><div class='line' id='LC140'><span class="p">});</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span> <span class="s2">&quot;testswarm&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">commit</span><span class="p">,</span> <span class="nx">configFile</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>	<span class="kd">var</span> <span class="nx">testswarm</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span> <span class="s2">&quot;testswarm&quot;</span> <span class="p">),</span></div><div class='line' id='LC144'>		<span class="nx">config</span> <span class="o">=</span> <span class="nx">grunt</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">readJSON</span><span class="p">(</span> <span class="nx">configFile</span> <span class="p">).</span><span class="nx">jquerycolor</span><span class="p">;</span></div><div class='line' id='LC145'>	<span class="nx">config</span><span class="p">.</span><span class="nx">jobName</span> <span class="o">=</span> <span class="s2">&quot;jQuery Color commit #&lt;a href=&#39;https://github.com/jquery/jquery-color/commit/&quot;</span> <span class="o">+</span> <span class="nx">commit</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;&quot;</span> <span class="o">+</span> <span class="nx">commit</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">10</span> <span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC146'>	<span class="nx">config</span><span class="p">[</span><span class="s2">&quot;runNames[]&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="s2">&quot;jQuery color&quot;</span><span class="p">;</span></div><div class='line' id='LC147'>	<span class="nx">config</span><span class="p">[</span><span class="s2">&quot;runUrls[]&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">testUrl</span> <span class="o">+</span> <span class="nx">commit</span> <span class="o">+</span> <span class="s2">&quot;/test/index.html&quot;</span><span class="p">;</span></div><div class='line' id='LC148'>	<span class="nx">config</span><span class="p">[</span><span class="s2">&quot;browserSets[]&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;popular&quot;</span><span class="p">];</span></div><div class='line' id='LC149'>	<span class="nx">testswarm</span><span class="p">({</span></div><div class='line' id='LC150'>		<span class="nx">url</span><span class="o">:</span> <span class="nx">config</span><span class="p">.</span><span class="nx">swarmUrl</span><span class="p">,</span></div><div class='line' id='LC151'>		<span class="nx">pollInterval</span><span class="o">:</span> <span class="mi">10000</span><span class="p">,</span></div><div class='line' id='LC152'>		<span class="nx">timeout</span><span class="o">:</span> <span class="mi">1000</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">*</span> <span class="mi">30</span><span class="p">,</span></div><div class='line' id='LC153'>		<span class="nx">done</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">async</span><span class="p">()</span></div><div class='line' id='LC154'>	<span class="p">},</span> <span class="nx">config</span><span class="p">);</span></div><div class='line' id='LC155'><span class="p">});</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span> <span class="s2">&quot;manifest&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC158'>	<span class="kd">var</span> <span class="nx">pkg</span> <span class="o">=</span> <span class="nx">grunt</span><span class="p">.</span><span class="nx">config</span><span class="p">(</span> <span class="s2">&quot;pkg&quot;</span> <span class="p">);</span></div><div class='line' id='LC159'>	<span class="nx">grunt</span><span class="p">.</span><span class="nx">file</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span> <span class="s2">&quot;color.jquery.json&quot;</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">({</span></div><div class='line' id='LC160'>		<span class="nx">name</span><span class="o">:</span> <span class="s2">&quot;color&quot;</span><span class="p">,</span></div><div class='line' id='LC161'>		<span class="nx">title</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></div><div class='line' id='LC162'>		<span class="nx">description</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">description</span><span class="p">,</span></div><div class='line' id='LC163'>		<span class="nx">keywords</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">keywords</span><span class="p">,</span></div><div class='line' id='LC164'>		<span class="nx">version</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">version</span><span class="p">,</span></div><div class='line' id='LC165'>		<span class="nx">author</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC166'>			<span class="nx">name</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">author</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC167'>			<span class="nx">url</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">author</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;master&quot;</span><span class="p">,</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">version</span> <span class="p">)</span></div><div class='line' id='LC168'>		<span class="p">},</span></div><div class='line' id='LC169'>		<span class="nx">maintainers</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">maintainers</span><span class="p">,</span></div><div class='line' id='LC170'>		<span class="nx">licenses</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">licenses</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">license</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>			<span class="nx">license</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">license</span><span class="p">.</span><span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="s2">&quot;master&quot;</span><span class="p">,</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">version</span> <span class="p">);</span></div><div class='line' id='LC172'>			<span class="k">return</span> <span class="nx">license</span><span class="p">;</span></div><div class='line' id='LC173'>		<span class="p">}),</span></div><div class='line' id='LC174'>		<span class="nx">bugs</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">bugs</span><span class="p">,</span></div><div class='line' id='LC175'>		<span class="nx">homepage</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">homepage</span><span class="p">,</span></div><div class='line' id='LC176'>		<span class="nx">docs</span><span class="o">:</span> <span class="nx">pkg</span><span class="p">.</span><span class="nx">homepage</span><span class="p">,</span></div><div class='line' id='LC177'>		<span class="nx">download</span><span class="o">:</span> <span class="s2">&quot;http://code.jquery.com/#color&quot;</span><span class="p">,</span></div><div class='line' id='LC178'>		<span class="nx">dependencies</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC179'>			<span class="nx">jquery</span><span class="o">:</span> <span class="s2">&quot;&gt;=1.5&quot;</span></div><div class='line' id='LC180'>		<span class="p">}</span></div><div class='line' id='LC181'>	<span class="p">},</span> <span class="kc">null</span><span class="p">,</span> <span class="s2">&quot;\t&quot;</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC182'><span class="p">});</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span> <span class="s2">&quot;default&quot;</span><span class="p">,</span> <span class="s2">&quot;lint submodules qunit build compare_size&quot;</span> <span class="p">);</span></div><div class='line' id='LC185'><span class="nx">grunt</span><span class="p">.</span><span class="nx">registerTask</span><span class="p">(</span> <span class="s2">&quot;build&quot;</span><span class="p">,</span> <span class="s2">&quot;max concat min&quot;</span> <span class="p">);</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04402s from fe16.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jquery/jquery-color/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04443' data-host='fe16'></span>
    
  </body>
</html>

