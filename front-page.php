
<?php
/**
 * The front page template file
 */

get_header();

// Hero Section
$hero_title = get_post_meta(get_the_ID(), 'afridi_hero_title', true);
$hero_subtitle = get_post_meta(get_the_ID(), 'afridi_hero_subtitle', true);
$hero_bg = get_post_meta(get_the_ID(), 'afridi_hero_bg', true);
$hero_cta_text = get_post_meta(get_the_ID(), 'afridi_hero_cta_text', true);
$hero_cta_link = get_post_meta(get_the_ID(), 'afridi_hero_cta_link', true);
$hero_secondary_cta_text = get_post_meta(get_the_ID(), 'afridi_hero_secondary_cta_text', true);
$hero_secondary_cta_link = get_post_meta(get_the_ID(), 'afridi_hero_secondary_cta_link', true);
?>

<main id="primary" class="site-main">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-bg" style="background-image: url('<?php echo esc_url($hero_bg ? wp_get_attachment_url($hero_bg) : 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7'); ?>')"></div>
		<div class="container">
			<div class="hero-content">
				<h1 class="hero-title">
					<?php echo esc_html($hero_title ? $hero_title : 'Reliable Freight & Trucking Services Across UAE'); ?>
				</h1>
				<p class="hero-description">
					<?php echo esc_html($hero_subtitle ? $hero_subtitle : 'Specialized in Flatbed, Lowbed & Temperature-Controlled Trailers'); ?>
				</p>
				<div class="hero-buttons">
					<a href="<?php echo esc_url($hero_cta_link ? $hero_cta_link : '#quote'); ?>" class="btn btn-primary">
						<?php echo esc_html($hero_cta_text ? $hero_cta_text : 'Get a Quote'); ?>
					</a>
					<a href="<?php echo esc_url($hero_secondary_cta_link ? $hero_secondary_cta_link : 'https://wa.me/971XXXXXXXXX'); ?>" class="btn btn-secondary">
						<?php echo esc_html($hero_secondary_cta_text ? $hero_secondary_cta_text : 'Speak with Us on WhatsApp'); ?>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="services-section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">Services We Offer</h2>
				<p class="section-subtitle">Professional logistics solutions tailored to your business needs</p>
			</div>
			
			<div class="services-grid">
				<?php
				$args = array(
					'post_type' => 'service',
					'posts_per_page' => 6,
				);
				
				$services_query = new WP_Query($args);
				
				if ($services_query->have_posts()) :
					while ($services_query->have_posts()) : $services_query->the_post();
						$short_desc = get_post_meta(get_the_ID(), 'afridi_service_short_desc', true);
						$hover_desc = get_post_meta(get_the_ID(), 'afridi_service_hover_desc', true);
						$cta_text = get_post_meta(get_the_ID(), 'afridi_service_cta_text', true);
						$cta_link = get_post_meta(get_the_ID(), 'afridi_service_cta_link', true);
				?>
					<div class="service-card">
						<div class="service-image">
							<?php if (has_post_thumbnail()) : ?>
								<?php the_post_thumbnail('medium_large'); ?>
							<?php endif; ?>
							<?php if ($hover_desc) : ?>
								<div class="service-hover-content">
									<p><?php echo esc_html($hover_desc); ?></p>
								</div>
							<?php endif; ?>
						</div>
						<div class="service-content">
							<h3 class="service-title"><?php the_title(); ?></h3>
							<p class="service-description">
								<?php echo esc_html($short_desc ? $short_desc : get_the_excerpt()); ?>
							</p>
							<a href="<?php echo esc_url($cta_link ? $cta_link : get_permalink()); ?>" class="service-link">
								<?php echo esc_html($cta_text ? $cta_text : 'Learn More'); ?>
								<span>→</span>
							</a>
						</div>
					</div>
				<?php
					endwhile;
					wp_reset_postdata();
				endif;
				?>
			</div>
		</div>
	</section>

	<!-- Why Choose Us Section -->
	<section id="why-choose-us" class="why-us-section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">Why Choose Afridi Express Transport?</h2>
				<p class="section-subtitle">We don't just move freight—we fuel your supply chain with reliability and precision across the UAE and beyond.</p>
			</div>
			
			<div class="features-grid">
				<div class="feature-card">
					<div class="feature-icon">
						<i class="fas fa-map-marker-alt"></i>
					</div>
					<div>
						<h3 class="feature-title">Extensive Nation-Wide Coverage</h3>
						<p class="feature-description">Seamless transport across the UAE, for your growing needs.</p>
					</div>
				</div>
				
				<div class="feature-card">
					<div class="feature-icon">
						<i class="fas fa-shield-alt"></i>
					</div>
					<div>
						<h3 class="feature-title">Expert Licensed Drivers</h3>
						<p class="feature-description">Our skilled, certified drivers handle your cargo with care, ensuring safe and timely deliveries every time.</p>
					</div>
				</div>
				
				<div class="feature-card">
					<div class="feature-icon">
						<i class="fas fa-clock"></i>
					</div>
					<div>
						<h3 class="feature-title">24/7 Dedicated Support</h3>
						<p class="feature-description">Our team is always ready to assist, day or night, resolving queries or emergencies to keep your operations smooth.</p>
					</div>
				</div>
				
				<div class="feature-card">
					<div class="feature-icon">
						<i class="fas fa-truck"></i>
					</div>
					<div>
						<h3 class="feature-title">Diverse On-Demand Fleet</h3>
						<p class="feature-description">From flatbeds to chiller vans, our varied fleet meets your unique logistics demands instantly.</p>
					</div>
				</div>
			</div>
			
			<div class="how-it-works">
				<div class="section-header">
					<h2 class="section-title">How It Works</h2>
					<p class="section-subtitle">Our simple, efficient process delivers your goods with speed and reliability, tailored to your business.</p>
				</div>
				
				<div class="steps-grid">
					<div class="step-item">
						<div class="step-number">1</div>
						<div class="step-content">
							<h3 class="step-title">Contact Us</h3>
							<p class="step-description">Share your transport needs via phone, email, or our online form, and we'll get started.</p>
						</div>
					</div>
					
					<div class="step-item">
						<div class="step-number">2</div>
						<div class="step-content">
							<h3 class="step-title">Get a Quote</h3>
							<p class="step-description">Receive a clear, customized quote designed for your cargo and delivery requirements.</p>
						</div>
					</div>
					
					<div class="step-item">
						<div class="step-number">3</div>
						<div class="step-content">
							<h3 class="step-title">Vehicle Dispatch</h3>
							<p class="step-description">We match your goods with the perfect vehicle and driver for secure, efficient transport.</p>
						</div>
					</div>
					
					<div class="step-item">
						<div class="step-number">4</div>
						<div class="step-content">
							<h3 class="step-title">Timely Delivery</h3>
							<p class="step-description">Your cargo arrives safely and on schedule, keeping your supply chain on track.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Client Logos Section -->
	<section id="clients" class="clients-section py-16 bg-gray-50">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">Our Trusted Clients</h2>
			</div>
			
			<div class="client-logos flex flex-wrap justify-center items-center gap-8 mt-8">
				<?php
				$args = array(
					'post_type' => 'client',
					'posts_per_page' => -1,
				);
				
				$clients_query = new WP_Query($args);
				
				if ($clients_query->have_posts()) :
					while ($clients_query->have_posts()) : $clients_query->the_post();
					?>
					<div class="client-logo max-w-[150px] grayscale hover:grayscale-0 transition-all">
						<?php if (has_post_thumbnail()) : ?>
							<?php the_post_thumbnail('medium'); ?>
						<?php endif; ?>
					</div>
					<?php
					endwhile;
					wp_reset_postdata();
				endif;
				?>
			</div>
		</div>
	</section>
	
	<!-- Blog Section -->
	<section id="blog" class="blog-section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">What's New in Freight & Logistics?</h2>
				<p class="section-subtitle">Tips, market insights & updates from the road</p>
			</div>
			
			<div class="blog-grid">
				<?php
				$args = array(
					'post_type' => 'post',
					'posts_per_page' => 3,
				);
				
				$blog_query = new WP_Query($args);
				
				if ($blog_query->have_posts()) :
					while ($blog_query->have_posts()) : $blog_query->the_post();
					?>
					<div class="blog-card">
						<?php if (has_post_thumbnail()) : ?>
							<div class="blog-image" style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'medium_large'); ?>')"></div>
						<?php endif; ?>
						<div class="blog-content">
							<h3 class="blog-title"><?php the_title(); ?></h3>
							<p class="blog-excerpt"><?php echo get_the_excerpt(); ?></p>
							<a href="<?php the_permalink(); ?>" class="service-link">
								Read More <span>→</span>
							</a>
						</div>
					</div>
					<?php
					endwhile;
					wp_reset_postdata();
				endif;
				?>
			</div>
			
			<div class="text-center mt-10">
				<a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="service-link text-lg">
					View All Blog Posts <span>→</span>
				</a>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section id="faqs" class="faqs-section py-20 bg-white">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">Frequently Asked Questions</h2>
			</div>
			
			<div class="faqs-container max-w-3xl mx-auto mt-10">
				<?php
				$args = array(
					'post_type' => 'faq',
					'posts_per_page' => -1,
				);
				
				$faq_query = new WP_Query($args);
				
				if ($faq_query->have_posts()) :
					while ($faq_query->have_posts()) : $faq_query->the_post();
					?>
					<div class="faq-item mb-4 border-b border-gray-200 pb-4">
						<h3 class="faq-question text-lg font-semibold mb-2"><?php the_title(); ?></h3>
						<div class="faq-answer">
							<?php the_content(); ?>
						</div>
					</div>
					<?php
					endwhile;
					wp_reset_postdata();
				endif;
				?>
			</div>
		</div>
	</section>

	<!-- Quote Form Section -->
	<section id="quote" class="quote-section">
		<div class="container">
			<div class="quote-container">
				<div class="quote-row">
					<div class="quote-sidebar">
						<h2 class="text-2xl font-bold mb-4">Let's Price It Right.</h2>
						<p class="mb-6">
							Get a tailored estimate based on your specific requirements. We provide transparent pricing with no hidden fees.
						</p>
						<ul class="space-y-2">
							<li class="flex items-center">
								<span class="mr-2">✓</span> Transparent Pricing
							</li>
							<li class="flex items-center">
								<span class="mr-2">✓</span> No Hidden Fees
							</li>
							<li class="flex items-center">
								<span class="mr-2">✓</span> Competitive Rates
							</li>
							<li class="flex items-center">
								<span class="mr-2">✓</span> Fast Response Time
							</li>
						</ul>
					</div>
					
					<div class="quote-form">
						<h3 class="form-title">Request a Quote</h3>
						<?php
						// Check if Contact Form 7 is active
						if (function_exists('wpcf7_contact_form')) {
							// Replace 123 with your actual form ID
							echo do_shortcode('[contact-form-7 id="123" title="Quote Request Form"]');
						} else {
							// Fallback form HTML
						?>
						<form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" class="space-y-4">
							<input type="hidden" name="action" value="quote_form_submission">
							<?php wp_nonce_field('quote_form_nonce', 'quote_form_nonce'); ?>
							
							<div class="form-grid">
								<div class="form-group">
									<label for="fromLocation" class="form-label">From Location</label>
									<input type="text" id="fromLocation" name="fromLocation" class="form-control" placeholder="e.g., Dubai" required>
								</div>
								
								<div class="form-group">
									<label for="toLocation" class="form-label">To Location</label>
									<input type="text" id="toLocation" name="toLocation" class="form-control" placeholder="e.g., Abu Dhabi" required>
								</div>
							</div>
							
							<div class="form-group">
								<label for="vehicleType" class="form-label">Vehicle Type</label>
								<select id="vehicleType" name="vehicleType" class="form-select" required>
									<option value="">Select vehicle type</option>
									<option value="flatbed">Flatbed Trailer</option>
									<option value="lowbed">Lowbed Trailer</option>
									<option value="curtain">Curtain Trailer</option>
									<option value="reefer">Temperature-Controlled (Reefer)</option>
									<option value="chiller">Chiller Truck</option>
									<option value="van">Chiller Van</option>
									<option value="pickup">Pickup Truck</option>
								</select>
							</div>
							
							<div class="form-grid">
								<div class="form-group">
									<label for="numberOfVehicles" class="form-label">Number of Vehicles</label>
									<input type="number" id="numberOfVehicles" name="numberOfVehicles" class="form-control" min="1" placeholder="e.g., 1" required>
								</div>
								
								<div class="form-group">
									<label for="desiredDate" class="form-label">Desired Date</label>
									<input type="date" id="desiredDate" name="desiredDate" class="form-control" required>
								</div>
							</div>
							
							<button type="submit" class="form-submit">Get Instant Quote</button>
						</form>
						<?php
						}
						?>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<?php
get_footer();
