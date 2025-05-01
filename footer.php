
<?php
/**
 * The template for displaying the footer
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="footer-grid">
				<div>
					<div class="footer-logo">
						<span class="text-brand-red">Afridi</span> Express
					</div>
					<p class="footer-description">
						Your trusted logistics partner in the UAE. Reliable, on-time transport solutions for businesses of every size.
					</p>
					<div class="footer-social">
						<a href="#" class="footer-social-item">
							<i class="fab fa-linkedin-in"></i>
						</a>
						<a href="#" class="footer-social-item">
							<i class="fab fa-facebook-f"></i>
						</a>
					</div>
				</div>
				
				<div>
					<h4 class="footer-heading">Industries We Serve</h4>
					<ul class="footer-links">
						<li><a href="#">Agricultural Production</a></li>
						<li><a href="#">Material Suppliers</a></li>
						<li><a href="#">FMCG</a></li>
						<li><a href="#">Frozen Food and Beverages</a></li>
						<li><a href="#">Pharmaceutical Companies</a></li>
						<li><a href="#">Event Management</a></li>
					</ul>
				</div>
				
				<div>
					<h4 class="footer-heading">Quick Links</h4>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-1',
							'menu_class'     => 'footer-links',
							'depth'          => 1,
						)
					);
					?>
				</div>
				
				<div>
					<h4 class="footer-heading">Contact Us</h4>
					<div class="footer-contact-item">
						<div class="footer-contact-icon">
							<i class="fas fa-map-marker-alt"></i>
						</div>
						<span>Omair Bin Yousuf Properties - Office No. B – M25 - Musaffah - M15 - Abu Dhabi - UAE</span>
					</div>
					<div class="footer-contact-item">
						<div class="footer-contact-icon">
							<i class="fas fa-phone"></i>
						</div>
						<span>+971 50 2636880 & +971 56 7708282</span>
					</div>
					<div class="footer-contact-item">
						<div class="footer-contact-icon">
							<i class="fas fa-envelope"></i>
						</div>
						<a href="mailto:afriditransportsolutions@gmail.com">afriditransportsolutions@gmail.com</a>
					</div>
					<div class="footer-map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.930561353626!2d54.515415115446826!3d24.42029998425882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4409dbe0a551%3A0xfafd4386e9aaff64!2sOmair%20Bin%20Yousuf%20Properties%20-%20Office%20No.%20B%20%E2%80%93%20M25%20-%20Musaffah%20-%20M15%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1589364011757!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
			
			<div class="footer-bottom">
				<p class="footer-copyright">
					<?php
					/* translators: %s: CMS name, i.e. WordPress. */
					printf(esc_html__('Copyright © 2025 Afridi Express Transport LLC. All rights reserved.', 'afridi-transport'));
					?>
				</p>
				
				<div class="footer-bottom-links">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-2',
							'menu_class'     => 'footer-bottom-menu',
							'depth'          => 1,
							'container'      => false,
							'items_wrap'     => '%3$s',
							'item_spacing'   => 'discard',
							'walker'         => new Walker_Footer_Menu(),
						)
					);
					?>
				</div>
			</div>
		</div>
	</footer>

	<a href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener noreferrer" class="whatsapp-button" aria-label="Chat on WhatsApp">
		<i class="fab fa-whatsapp fa-lg"></i>
	</a>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

<?php
/**
 * Custom Walker for Footer Menu
 */
class Walker_Footer_Menu extends Walker_Nav_Menu {
	function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
		$output .= '<a href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a>';
	}
}
