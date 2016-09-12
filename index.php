<?php
$page_title = "Padrões de código e melhores práticas em Front-end";
$page_keywords = "CompJunior code standards, coding standards, frontend development, frontend best practices, html code standards, html5 code standards, css code standards, best code practices, development, frontend development";
$page_description = "Padrões de Codificação da CompJúnior e Melhores Práticas de desenvolvimento Front-end";
$protocol = (strstr('https',$_SERVER['SERVER_PROTOCOL']) === false)?'http':'https';
$page_root = $protocol.'://'.$_SERVER['SERVER_NAME'].dirname($_SERVER['REQUEST_URI']);
include_once('layout/header.php');
?>

	<body>
		<a class="fork" href="https://github.com/haggen/code-standards" target="_blank"></a>
		<div id="container">

			<header role="banner">
				<h1><a id="logo" href="<?php echo $page_root; ?>">CompJunior</a></h1>

				<canvas id="canvas-logo" width="500" height="300">
					<strong>Seu navegador não pode lidar com tamanha a grandiosidade!</strong>
				</canvas>

                <ul id="social">
					<li><a class="icon" href="https://www.facebook.com/compjunior" id="facebook"></a></li>
					<li><a href="http://www.compjunior.com.br" id="linkback">Ir para a CompJúnior</a></li>
				</ul>
			</header>


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

			<nav id="side" class="nav-right" role="navigation">
				<h3 class="toc-title">Índice</h3>
				<ul id="toc" style="display:none"></ul>
				<noscript><p><a href="http://enable-javascript.com/pt">Por favor habilite o Javascript</a>.</p></noscript>
			</nav>

		</div><!--! Fim do #container !-->

		<footer role="contentinfo">
			<p>
				<span class="float_left"><?php print date("Y"); ?> CompJúnior. Todos os direitos reservados.</span>
				<span class="float_right">Todo conteúdo licenciado sobre <a href="https://creativecommons.org/licenses/by/3.0/br/"> Creative Commons Attribution 3.0 Unported License</a></span>
			</p>
		</footer>


		<!-- JavaScript no final para um rápido carregamento de página -->

		<!-- Ultilize Google CDN's jQuery, usando protocolo de URL relativo; Inclua um local para fall back -->
		<!-- Recomendação http://www.paulirish.com/2010/the-protocol-relative-url/ -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"></script>
		<script>
			window.jQuery || document.write("<script src='js/jquery-1.6.3.min.js'>\x3C/script>")
		</script>
		<!-- scripts concatenados e minificadosed via ant build script-->
		<script defer src="js/plugins.js"></script>
		<script defer src="js/script.js"></script>

		<!-- Fim dos scripts-->

		<!--[if lt IE 7 ]>
		<script src="js/libs/dd_belatedpng.js"></script>
		<script>DD_belatedPNG.fix("img, .png_bg"); // Corrige qualquer <img> ou .png_bg bg-images. Aproveite e leia goo.gl/mZiyb </script>
		<![endif]-->

  	<script>
        window._gaq = [['_setAccount','UA-1612394-12'],['_trackPageview'],['_trackPageLoadTime']];
        Modernizr.load({
            load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
        });
    </script>

  <!--[if lt IE 7 ]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

</body>
</html>
