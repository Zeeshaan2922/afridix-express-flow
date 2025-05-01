
<?php
/**
 * The template for displaying service single posts
 */

get_header();
?>

<main id="primary" class="site-main">

	<div class="service-hero py-20 bg-gray-50">
		<div class="container">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-3xl md:text-4xl font-bold mb-6"><?php the_title(); ?></h1>
				
				<?php if (has_post_thumbnail()) : ?>
				<div class="service-featured-image mb-8 rounded-lg overflow-hidden">
					<?php the_post_thumbnail('large'); ?>
				</div>
				<?php endif; ?>
				
				<div class="service-content prose prose-lg max-w-none">
					<?php the_content(); ?>
				</div>
				
				<?php 
				$industries = get_post_meta(get_the_ID(), 'afridi_service_industries', true);
				if ($industries) : 
					$industries_array = explode(',', $industries);
				?>
				<div class="mt-8 pt-8 border-t border-gray-200">
					<h3 class="text-xl font-bold mb-4">Industries Served</h3>
					<div class="flex flex-wrap gap-2">
						<?php foreach ($industries_array as $industry) : ?>
						<span class="bg-gray-100 px-3 py-1 rounded-full text-sm"><?php echo trim($industry); ?></span>
						<?php endforeach; ?>
					</div>
				</div>
				<?php endif; ?>
				
				<div class="mt-8 flex flex-wrap gap-4">
					<a href="#quote" class="btn btn-primary">Get a Quote</a>
					<a href="<?php echo esc_url(home_url('/')); ?>#services" class="btn btn-outline">View All Services</a>
				</div>
			</div>
		</div>
	</div>

</main>

<?php
get_footer();
