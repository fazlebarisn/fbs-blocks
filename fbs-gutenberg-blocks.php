<?php
/**
 * Plugin Name:       Fbs Gutenberg Blocks
 * Description:       Enhance your WordPress website with a powerful collection of custom Gutenberg blocks. Easily create stunning layouts, add interactive elements, and streamline content creation. With Fbs Gutenberg Blocks, unleash the full potential of the Gutenberg editor for a seamless and dynamic website-building experience.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Fazle Bari
 * Author URI:		  https://www.chitabd.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fbs-gutenberg-blocks
 *
 * @package           fbs-blocks
 */

 if ( ! defined( 'FBS_GB_DIR_PATH' ) ) {
	define( 'FBS_GB_DIR_PATH', __DIR__ );
}

define( 'FBS_GB_BLOCKS_FILE' , __FILE__ );
define( 'FBS_GB_BLOCKS_URL' , plugins_url( '' , FBS_GB_BLOCKS_FILE ) );
define( 'FBS_BLOCK_ASSETS' , FBS_GB_BLOCKS_URL . '/assets' );


require_once FBS_GB_DIR_PATH . '/inc/helpers/autoloader.php';

function fbs_gb_blocks_plugin_instance() {
	\FBS_GB_BLOCKS\Inc\FBS_GB_BLOCKS::get_instance();
}

fbs_gb_blocks_plugin_instance();
