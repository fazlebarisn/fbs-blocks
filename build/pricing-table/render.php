<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
//style= background:starterBg,color:starterColor

$starterContent = $attributes['starterContent'] ? $attributes['starterContent'] : '';
$premiumContent = $attributes['premiumContent'] ? $attributes['premiumContent'] : '';
$businessContent = $attributes['businessContent'] ? $attributes['businessContent'] : '';

if( ! function_exists('fbsCreateArray') ){
	function fbsCreateArray( $string ){
		// Use explode to split the string into an array
		$value = explode("\n", $string);

		// Remove any empty elements
		$value = array_filter($value);

		return $value;
	}
}
// dd($starterTitle);
?>

<div class='fbs-pricing-table'>
	<style>
		.fbs-cards .fbs-card.shadow.one{
			background: <?php echo $attributes['starterBg'] ?>;
			color: <?php echo $attributes['starterColor'] ?>;
		}
		.fbs-cards .fbs-card.active{
			background: <?php echo $attributes['premiumBg'] ?>;
			color: <?php echo $attributes['premiumColor'] ?>;
		}
		.fbs-cards .fbs-card.shadow.two{
			background: <?php echo $attributes['businessBg'] ?>;
			color: <?php echo $attributes['businesscolor'] ?>;
		}
		.fbs-cards .fbs-card.shadow.one .pack,
		.fbs-cards .fbs-card.shadow.one .price.bottom-bar{
			color: <?php echo $attributes['starterColor'] ?>;
		}
		.fbs-cards .fbs-card.active .pack,
		.fbs-cards .fbs-card.active .price.bottom-bar{
			color: <?php echo $attributes['premiumColor'] ?>;
		}
		.fbs-cards .fbs-card.shadow.two .pack,
		.fbs-cards .fbs-card.shadow.two .price.bottom-bar{
			color: <?php echo $attributes['businesscolor'] ?>;
		}
	</style>
	<header>
		<h1><?php echo esc_html( $attributes['title'] ); ?></h1>
	</header>
	<div class="fbs-cards">
		<div class="fbs-card shadow one" >
			<h3 class="pack"><?php echo esc_html( $attributes['starterTitle'] ); ?></h3>
			<h2 id="starter" class="price bottom-bar">$<?php echo esc_html( $attributes['starterPrice'] ); ?></h2>
			<ul>
				<?php 
					if( !empty( fbsCreateArray($starterContent) ) && is_array( fbsCreateArray($starterContent) ) ){
						foreach( fbsCreateArray($starterContent) as $value ){
							?>
								<li><?php echo $value ?></li>
							<?php
						}
					}
				?>
			</ul>
			<a href=<?php echo esc_html( $attributes['starterBtnUrl'] ); ?>>
				<button class="btn active-btn" style={{background:starterBtnBg,color:starterBtnColor}}>
					<?php echo esc_html( $attributes['starterBtnText'] ); ?>
				</button>
			</a>
		</div>
		<div class="fbs-card active">
			<h3 class="pack"><?php echo esc_html( $attributes['premiumTitle'] ); ?></h3>
			<h2 id="premium" class="price bottom-bar"><?php echo esc_html( $attributes['premiumPrice'] ); ?></h2>
			<ul>
				<?php 
					if( !empty( fbsCreateArray($premiumContent) ) && is_array( fbsCreateArray($premiumContent) ) ){
						foreach( fbsCreateArray($premiumContent) as $value ){
							?>
								<li><?php echo $value ?></li>
							<?php
						}
					}
				?>
			</ul>
			<a href=<?php echo esc_html( $attributes['premiumBtnUrl'] ); ?>>
				<button class="btn active-btn" style={{background:premiumBgColor,color:premiumTextColor}}>
					<?php echo esc_html( $attributes['premiumBtnText'] ); ?>
				</button>
			</a>
		</div>
		<div class="fbs-card shadow two">
			<h3 class="pack"><?php echo esc_html( $attributes['businessTitle'] ); ?></h3>
			<h2 id="business" class="price bottom-bar"><?php echo esc_html( $attributes['businessPrice'] ); ?></h2>
			<ul>
				<?php 
					if( !empty( fbsCreateArray($businessContent) ) && is_array( fbsCreateArray($businessContent) ) ){
						foreach( fbsCreateArray($businessContent) as $value ){
							?>
								<li><?php echo $value ?></li>
							<?php
						}
					}
				?>
			</ul>
			<a href=<?php echo esc_html( $attributes['businessBtnUrl'] ); ?>>
				<button class="btn active-btn" style={{background:businessBtnBg,color:businessBtnColor}}>
					<?php echo esc_html( $attributes['businessBtnText'] ); ?>
				</button>
			</a>
		</div>
	</div>
</div>