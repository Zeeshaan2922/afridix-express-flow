
<?php
/**
 * Afridi Express Transport functions and definitions
 */

if (!defined('_S_VERSION')) {
	define('_S_VERSION', '1.0.0');
}

/**
 * Set up theme defaults and register support for various WordPress features.
 */
function afridi_transport_setup() {
	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	// Let WordPress manage the document title.
	add_theme_support('title-tag');

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support('post-thumbnails');

	// Register menu locations
	register_nav_menus(
		array(
			'primary' => esc_html__('Primary Menu', 'afridi-transport'),
			'footer-1' => esc_html__('Footer Menu 1', 'afridi-transport'),
			'footer-2' => esc_html__('Footer Menu 2', 'afridi-transport'),
		)
	);

	// Switch default core markup to output valid HTML5.
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	// Add support for custom logo
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'afridi_transport_setup');

/**
 * Register widget area.
 */
function afridi_transport_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'afridi-transport'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'afridi-transport'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
    
    register_sidebar(
		array(
			'name'          => esc_html__('Footer 1', 'afridi-transport'),
			'id'            => 'footer-1',
			'description'   => esc_html__('First footer widget area', 'afridi-transport'),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h4 class="footer-heading">',
			'after_title'   => '</h4>',
		)
	);
    
    register_sidebar(
		array(
			'name'          => esc_html__('Footer 2', 'afridi-transport'),
			'id'            => 'footer-2',
			'description'   => esc_html__('Second footer widget area', 'afridi-transport'),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h4 class="footer-heading">',
			'after_title'   => '</h4>',
		)
	);
    
    register_sidebar(
		array(
			'name'          => esc_html__('Footer 3', 'afridi-transport'),
			'id'            => 'footer-3',
			'description'   => esc_html__('Third footer widget area', 'afridi-transport'),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h4 class="footer-heading">',
			'after_title'   => '</h4>',
		)
	);
}
add_action('widgets_init', 'afridi_transport_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function afridi_transport_scripts() {
	wp_enqueue_style('afridi-transport-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_enqueue_script('afridi-transport-navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
    
    // FontAwesome for icons
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', array(), '6.0.0');
    
    // Main JS file
    wp_enqueue_script('afridi-transport-main', get_template_directory_uri() . '/js/main.js', array('jquery'), _S_VERSION, true);
}
add_action('wp_enqueue_scripts', 'afridi_transport_scripts');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom Post Types
 */
function afridi_transport_register_post_types() {
    
    // Services post type
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services', 'afridi-transport'),
            'singular_name' => __('Service', 'afridi-transport')
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cart',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'services')
    ));

    // FAQ post type
    register_post_type('faq', array(
        'labels' => array(
            'name' => __('FAQs', 'afridi-transport'),
            'singular_name' => __('FAQ', 'afridi-transport')
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-chat',
        'supports' => array('title', 'editor'),
        'show_in_rest' => true
    ));
    
    // Testimonials post type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'afridi-transport'),
            'singular_name' => __('Testimonial', 'afridi-transport')
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true
    ));
    
    // Clients post type
    register_post_type('client', array(
        'labels' => array(
            'name' => __('Clients', 'afridi-transport'),
            'singular_name' => __('Client', 'afridi-transport')
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-businessperson',
        'supports' => array('title', 'thumbnail'),
        'show_in_rest' => true
    ));
}
add_action('init', 'afridi_transport_register_post_types');

/**
 * Register metaboxes with CMB2
 */
function afridi_transport_register_metaboxes() {
    // Only load if CMB2 is available
    if (!defined('CMB2_LOADED')) {
        return;
    }
    
    // Service metabox
    $prefix = 'afridi_';
    
    $service_metabox = new_cmb2_box(array(
        'id'            => $prefix . 'service_metabox',
        'title'         => esc_html__('Service Options', 'afridi-transport'),
        'object_types'  => array('service'),
    ));
    
    $service_metabox->add_field(array(
        'name' => esc_html__('Short Description', 'afridi-transport'),
        'id'   => $prefix . 'service_short_desc',
        'type' => 'textarea_small',
    ));
    
    $service_metabox->add_field(array(
        'name' => esc_html__('Hover Description', 'afridi-transport'),
        'id'   => $prefix . 'service_hover_desc',
        'type' => 'textarea_small',
    ));
    
    $service_metabox->add_field(array(
        'name' => esc_html__('CTA Text', 'afridi-transport'),
        'id'   => $prefix . 'service_cta_text',
        'type' => 'text',
        'default' => 'Learn More',
    ));
    
    $service_metabox->add_field(array(
        'name' => esc_html__('CTA Link', 'afridi-transport'),
        'id'   => $prefix . 'service_cta_link',
        'type' => 'text_url',
    ));
    
    $service_metabox->add_field(array(
        'name' => esc_html__('Industries Served', 'afridi-transport'),
        'id'   => $prefix . 'service_industries',
        'type' => 'textarea_small',
        'description' => 'Comma-separated list of industries',
    ));
    
    // Homepage metabox
    $homepage_metabox = new_cmb2_box(array(
        'id'            => $prefix . 'homepage_metabox',
        'title'         => esc_html__('Homepage Settings', 'afridi-transport'),
        'object_types'  => array('page'),
        'show_on'       => array('key' => 'front-page', 'value' => ''),
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero Title', 'afridi-transport'),
        'id'   => $prefix . 'hero_title',
        'type' => 'text',
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero Subtitle', 'afridi-transport'),
        'id'   => $prefix . 'hero_subtitle',
        'type' => 'textarea_small',
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero Background Image', 'afridi-transport'),
        'id'   => $prefix . 'hero_bg',
        'type' => 'file',
        'options' => array(
            'url' => false,
        ),
        'text' => array(
            'add_upload_file_text' => 'Add Background Image'
        ),
        'query_args' => array(
            'type' => array(
                'image/jpeg',
                'image/png',
            ),
        ),
        'preview_size' => 'medium',
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero CTA Text', 'afridi-transport'),
        'id'   => $prefix . 'hero_cta_text',
        'type' => 'text',
        'default' => 'Get a Quote',
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero CTA Link', 'afridi-transport'),
        'id'   => $prefix . 'hero_cta_link',
        'type' => 'text_url',
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero Secondary CTA Text', 'afridi-transport'),
        'id'   => $prefix . 'hero_secondary_cta_text',
        'type' => 'text',
        'default' => 'Speak with Us on WhatsApp',
    ));
    
    $homepage_metabox->add_field(array(
        'name' => esc_html__('Hero Secondary CTA Link', 'afridi-transport'),
        'id'   => $prefix . 'hero_secondary_cta_link',
        'type' => 'text_url',
    ));
}
add_action('cmb2_admin_init', 'afridi_transport_register_metaboxes');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';
