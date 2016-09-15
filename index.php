<?php
$page_title = "Padrões de código e melhores práticas em Front-end";
$page_keywords = "CompJunior code standards, coding standards, frontend development, frontend best practices, html code standards, html5 code standards, css code standards, best code practices, development, frontend development";
$page_description = "Padrões de Codificação da CompJúnior e Melhores Práticas de desenvolvimento Front-end";
$protocol = (strstr('https',$_SERVER['SERVER_PROTOCOL']) === false)?'http':'https';
$page_root = $protocol.'://'.$_SERVER['SERVER_NAME'].dirname($_SERVER['REQUEST_URI']);
include_once('layout/header.php');
?>

	<body>
		<a class="fork" href="https://github.com/Highlander-Paiva/CompCodeStandards" target="_blank"></a>
		<header role="banner">
			<h1><a id="logo" href="<?php echo $page_root; ?>">CompJunior</a></h1>
			<div class="menu-button"></div>
		</header>
		<div id="container">




			<div id="main" role="document">
				<h1><?php echo $page_title; ?></h1>

				<?php
				include_once('sections/general.html');
				include_once('sections/markup.html');
				include_once('sections/css.html');
				include_once('sections/javascript.html');
				include_once('sections/accessibility.html');
				include_once('sections/performance.html');
				include_once('sections/browsers.html');
				include_once('sections/seo.html');
				include_once('sections/codeReviews.html');
				include_once('sections/appendices.html');
				include_once('sections/revisionHistory.html');
				?>

			</div><!--! Fim da #main section !-->

			<nav class="nav-toc" role="navigation">
        <ul id="toc" style="display: block;"><li class="h2"><a href="#introduction_introduction">Introduction</a></li><li class="h3"><a href="#introduction_goals">Goals</a></li><li class="h3"><a href="#introduction_getting_started">Getting Started</a></li><li class="h3"><a href="#introduction_general_standards">General Standards</a></li><li class="h3"><a href="#introduction_deliverables">Deliverables</a></li><li class="h2"><a href="#html_html">HTML</a></li><li class="h3"><a href="#html_goals_for_markup">Goals for Markup</a></li><li class="h3"><a href="#html_getting_started_on_markup">Getting Started on Markup</a></li><li class="h3"><a href="#html_html_markup_best_practices">HTML Markup Best Practices</a></li><li class="h3"><a href="#html_markup_deliverables">Markup Deliverables</a></li><li class="h3"><a href="#html_next_steps_amp_html5_resources">Next Steps &amp; HTML5 Resources</a></li><li class="h2"><a href="#css_css">CSS</a></li><li class="h3"><a href="#css_goals_for_effective_css">Goals for Effective CSS</a></li><li class="h3"><a href="#css_getting_started_with_css">Getting Started with CSS</a></li><li class="h3"><a href="#css_css_best_practices">CSS Best Practices</a></li><li class="h3"><a href="#css_css_deliverables">CSS Deliverables</a></li><li class="h3"><a href="#css_next_steps_amp_css_resources">Next Steps &amp; CSS Resources</a></li><li class="h2"><a href="#javascript_javascript">JavaScript</a></li><li class="h3"><a href="#javascript_goals">Goals</a></li><li class="h3"><a href="#javascript_getting_started_on_javascript">Getting Started on JavaScript</a></li><li class="h3"><a href="#javascript_javascript_best_practices">JavaScript Best Practices</a></li><li class="h3"><a href="#javascript_javascript_deliverables">JavaScript Deliverables</a></li><li class="h3"><a href="#javascript_next_steps_amp_javascript_resources">Next Steps &amp; JavaScript Resources</a></li><li class="h2"><a href="#responsive_responsive_web_design">Responsive Web Design</a></li><li class="h3"><a href="#responsive_goals_of_responsive_web_design">Goals of Responsive Web Design</a></li><li class="h3"><a href="#responsive_getting_started_with_mobile_development">Getting Started with Mobile Development</a></li><li class="h3"><a href="#responsive_responsive_design_best_practices">Responsive Design Best Practices</a></li><li class="h3"><a href="#responsive_next_steps_amp_rwd_resources">Next Steps &amp; RWD Resources</a></li><li class="h2"><a href="#appendix_appendix">Appendix</a></li><li class="h3"><a href="#appendix_advanced_topics">Advanced Topics</a></li><li class="h3"><a href="#appendix_links_for_more_resources">Links for More Resources</a></li><li class="h3"><a href="#appendix_acknowledgments">Acknowledgments</a></li></ul>
        <noscript>&lt;p&gt;&lt;a href="http://enable-javascript.com/pt"&gt;Por favor habilite o Javascript&lt;/a&gt;.&lt;/p&gt;</noscript>
      </nav>

		</div><!--! Fim do #container !-->

		<footer role="contentinfo">
			<div class="footer-inner">
				<p class="copyright"><?php print date("Y"); ?> CompJúnior. Todos os direitos reservados.</p>
				<p class="license">Todo conteúdo licenciado sobre Creative Commons Attribution 3.0 Unported License</p>
			</div>
		</footer>


		<!-- JavaScript no final para um rápido carregamento de página -->

		<!-- Ultilize Google CDN's jQuery, usando protocolo de URL relativo; Inclua um local para fall back -->
		<!-- Recomendação http://www.paulirish.com/2010/the-protocol-relative-url/ -->
		<script src="//code.jquery.com/jquery-3.1.0.min.js"></script>
		<script>
			window.jQuery || document.write("<script src='js/jquery-3.1.0.min.js'>\x3C/script>")
		</script>
		<!-- scripts concatenados e minificadosed via ant build script-->
		<script defer src="js/plugins.js"></script>
		<script defer src="js/script.js"></script>

		<!-- Fim dos scripts-->

		<!--[if lt IE 7 ]>
		<script src="js/libs/dd_belatedpng.js"></script>
		<script>DD_belatedPNG.fix("img, .png_bg"); // Corrige qualquer <img> ou .png_bg bg-images. Aproveite e leia goo.gl/mZiyb </script>
		<![endif]-->



  <!--[if lt IE 7 ]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

</body>
</html>
