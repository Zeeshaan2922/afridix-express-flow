
# Afridi Express Transport WordPress Theme

This is a custom WordPress theme for Afridi Express Transport LLC, a logistics and transportation company based in the UAE.

## Theme Installation

1. Download the theme files
2. Upload the theme folder to your WordPress installation in `/wp-content/themes/`
3. Activate the theme through the WordPress admin panel

## Required Plugins

For best functionality, please install the following plugins:

- **Contact Form 7** - For the quote request form
- **CMB2** - For custom metaboxes and fields
- **Classic Editor** - Recommended for easier content editing
- **Yoast SEO** - For search engine optimization
- **WP Google Maps** - For enhanced map functionality
- **Advanced Custom Fields** (optional) - For additional custom fields

## Theme Setup

### 1. Homepage Setup

1. Create a new page and title it "Home"
2. Set the page template to "Front Page" in the Page Attributes section
3. Go to Settings > Reading and set "Your homepage displays" to "A static page"
4. Select your "Home" page as the homepage

### 2. Services Setup

1. Navigate to Services in the WordPress admin menu
2. Add new services with relevant titles, descriptions, and featured images
3. Fill in the custom fields for each service:
   - Short Description: Brief overview shown on the homepage
   - Hover Description: Text shown on hover in the services grid
   - CTA Text: Call to action button text
   - CTA Link: URL for the call to action

### 3. FAQs Setup

1. Navigate to FAQs in the WordPress admin menu
2. Add new FAQ items with the question as the title and answer in the content area

### 4. Menu Setup

1. Go to Appearance > Menus
2. Create a Primary Menu with your main navigation links
3. Create Footer Menu 1 and Footer Menu 2 for footer navigation
4. Assign the menus to their respective locations

### 5. Contact Form Setup

1. Install and activate Contact Form 7
2. Create a new form using the template provided in `quote-form-template.html`
3. Copy the generated shortcode
4. Update the shortcode in `front-page.php` (replace `[contact-form-7 id="123" title="Quote Request Form"]` with your shortcode)

## Customization

- **Theme Colors**: Edit the CSS variables in `style.css` to change the color scheme
- **Logo**: Upload your custom logo in Appearance > Customize > Site Identity
- **Homepage Content**: Edit homepage sections through the custom fields in the page editor

## Support

For theme support, please contact the theme developer.
