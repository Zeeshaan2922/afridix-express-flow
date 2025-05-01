
<?php
/**
 * The header for our theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'afridi-transport'); ?></a>

	<header id="masthead" class="site-header">
		<div class="container">
			<div class="flex justify-between items-center py-4">
				<div class="site-logo">
					<?php
					if (has_custom_logo()) {
						the_custom_logo();
					} else {
						?>
						<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
							<span>Afridi</span> Express
						</a>
						<?php
					}
					?>
				</div>

				<nav id="site-navigation" class="main-navigation">
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
						<i class="fas fa-bars"></i>
					</button>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'primary',
							'menu_id'        => 'primary-menu',
						)
					);
					?>
					<a href="#quote" class="btn btn-primary hidden md:inline-block">Get a Quote</a>
				</nav>
			</div>
		</div>
	</header>
