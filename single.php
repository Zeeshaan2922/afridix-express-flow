
<?php
/**
 * The template for displaying all single posts
 */

get_header();
?>

<main id="primary" class="site-main py-20">
	<div class="container">
		<?php
		while (have_posts()) :
			the_post();
		?>
			<article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
				<header class="entry-header mb-8">
					<?php the_title('<h1 class="entry-title text-3xl md:text-4xl font-bold mb-4">', '</h1>'); ?>
					<div class="entry-meta text-gray-600 mb-4">
						<?php
						afridi_transport_posted_on();
						afridi_transport_posted_by();
						?>
					</div>
				</header>

				<?php afridi_transport_post_thumbnail(); ?>

				<div class="entry-content prose prose-lg max-w-none">
					<?php
					the_content(
						sprintf(
							wp_kses(
								/* translators: %s: Name of current post. Only visible to screen readers */
								__('Continue reading<span class="screen-reader-text"> "%s"</span>', 'afridi-transport'),
								array(
									'span' => array(
										'class' => array(),
									),
								)
							),
							wp_kses_post(get_the_title())
						)
					);

					wp_link_pages(
						array(
							'before' => '<div class="page-links">' . esc_html__('Pages:', 'afridi-transport'),
							'after'  => '</div>',
						)
					);
					?>
				</div>

				<footer class="entry-footer mt-8 pt-6 border-t border-gray-200">
					<?php afridi_transport_entry_footer(); ?>
				</footer>
			</article>

			<div class="post-navigation max-w-4xl mx-auto mt-10 pt-6 border-t border-gray-200">
				<div class="flex flex-wrap justify-between">
					<div class="previous">
						<?php previous_post_link('%link', '← Previous Article'); ?>
					</div>
					<div class="next">
						<?php next_post_link('%link', 'Next Article →'); ?>
					</div>
				</div>
			</div>

			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if (comments_open() || get_comments_number()) :
				comments_template();
			endif;
		endwhile; // End of the loop.
		?>
	</div>
</main>

<?php
get_footer();
