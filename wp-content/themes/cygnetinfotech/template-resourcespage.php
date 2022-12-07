<?php
/* Template Name: Resources Page */

get_header();

/* flexible content Start */
	   $pageId = get_the_ID();
	   require_once(__DIR__ . "/flexible-content.php");
?>
		
<div>
	<!-- Featured Blog section start -->
	<?php /*<section class="curved-section">
		<div class="container section-container-padding">
			<div class="section-top-bar d-flex">
				<div class="section-top-bar-container">
					<h2 class="section-title">Featured <span>Blogs</span></h2>
				</div>
			</div>
			<div class="row mb-n4">
				<?php
				$custom_query_args = array(
					'post_type'  => 'post',
					'meta_key'   => '_is_ns_featured_post',
					'meta_value' => 'yes',
				);
				$custom_query = new WP_Query($custom_query_args);
				if ($custom_query->have_posts()) :
					while ($custom_query->have_posts()) : $custom_query->the_post();?>
						<div class="col-sm-6 col-lg-4 mb-4">
							<div class="card h-100">
								<div class="card-image-box">
									<?php
									$categories = get_the_category();
									if (!empty($categories)) {?>
										<div class="card-image-tag">
											<span class="btn btn-sm btn-lightest-blue btn-muted px-3 case-tag"><?php echo esc_html($categories[0]->name);?></span>
										</div>
									<?php }?>

									<?php if (has_post_thumbnail($post->ID)) :?>
										<?php $caseImage = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'medium_large');?>
										<div class="card-image cover-bg lazyload" style="background-image: url('<?php echo $caseImage[0]; ?>')"></div>
									<?php endif;?>
								</div>
								<div class="card-body">
									<?php if (get_the_title()) :?>
										<h5 class="card-title">
											<a href="<?php the_permalink();?>" title="<?php the_title();?>"><?php echo wp_trim_words(get_the_title(), 10, '...');?></a>
										</h5>
									<?php endif;?>
									<?php
									$blogContent = get_field('short_description', $post->ID);
									if ($blogContent) :?>
										<p class="card-text"><?php echo wp_trim_words($blogContent, 30, '...');?></p>
									<?php endif;?>
								</div>
								<div class="card-footer bg-transparent border-top-0 text-end">
									<a href="<?php the_permalink();?>" class="read-more-link" title="Know More">Know More<i class="bi bi-arrow-right" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					<?php endwhile;
				else :?>
					<div class="col">
						<div class="card no-records" role="alert">
							<div class="card-body">
								<p class="text-danger text-center font-18"><strong><?php _e('No Records Found!');?></strong></p>
							</div>
						</div>
					</div>
				<?php endif;
				wp_reset_postdata();?>
			</div>
		</div>
	</section>   */ ?>
	<!-- Featured Blog section end -->
	<!-- More Blog section start -->
	<section class="">
		<div class="container section-container-padding resources-page-listing">
			<!-- Filter block start -->
			<div class="filter-box mb-5">
				<h5 class="text-dark-blue mb-3">Filter By:</h5>
				<form class="submit-all-filter">
					<div class="row gy-3">
						<div class="col-md-6 col-lg-12 col-xl-4">
							<select class="form-select select-category js-select2 filter-by-cpt" name="filter-by-cpt" multiple="multiple">
								<!--<option value=""></option>-->
								<option value="post">Blog</option>
								<option value="ebooks">eBook</option>
								<option value="case_studies">Case Studies</option>
								<option value="webinars">Webinars</option>
								<option value="whitepapers">White Papers</option>
							</select>
						</div>
						<div class="col-md-6 col-lg-12 col-xl-4">
							<select class="form-select select-category offering-select2 filter-by-category" name="filter-by-category" multiple="multiple">
							<!--<select class="form-select select-category filter-by-category" name="filter-by-category">
								<option value=""></option>-->
								<?php
								$categories = get_terms(['taxonomy' => 'category', 'hide_empty' => true]);
								foreach ($categories as $category) {?>
									<option value="<?php echo $category->term_id;?>"><?php echo $category->name;?></option>
								<?php }?>
							</select>
						</div>
						<div class="col-md-6 col-lg-12 col-xl-4">
							<div class="d-md-flex justify-content-start justify-content-lg-end justify-content-xl-start">
								<input type="button" class="btn btn-primary me-2 disvar" title="Submit" value="Submit" id="filter_submit" disabled>
								<input type="button" class="btn btn-outline-danger disvar" title="Clear all" value="Clear all" id="clear-filter-research" disabled>
							</div>
						</div>
					</div>
				</form>
			</div>
			<!-- Filter block end -->
			<!-- Resources start -->
			<div class="default-content"><p>Please select any one fillter...</p></div>
			<!-- Image loader -->
			<div id="loader" style="display: none;">
			  <img src="<?php echo site_url(); ?>/wp-content/themes/cygnetinfotech/assets/images/Spinner-2.gif" width="50px" height="50px">
			</div>
			<!-- Image loader -->
			<div class="resources-container" style="display:none;"></div>
			<!-- Resources end -->
		</div>
	</section>
</div>
<?php
get_footer();
?>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/js/select2.min.js"></script>
<script>
	jQuery(document).ready(function () {
		jQuery('.select-category').on('change', function() {
			var cpt = jQuery('.filter-by-cpt').val();
			var cat = jQuery('.filter-by-category').val();
			if(cpt != '' || cat !=''){
				jQuery('.disvar').prop('disabled', false);
			} else {
				if (jQuery('.resources-container').is(':empty')){
					jQuery('#clear-filter-research').prop('disabled', true);
				} else {
					jQuery('#clear-filter-research').prop('disabled', false);
				}
				jQuery('#filter_submit').prop('disabled', true);
				//jQuery('.disvar').prop('disabled', true);
			}
		});

		jQuery("#filter_submit").click(function(){
			jQuery('.default-content').hide();
			jQuery('.resources-container').empty();
			jQuery('.resources-container').show();
		}); 
		jQuery("#clear-filter-research").click(function(){
			jQuery('.resources-container').hide();
			jQuery('.resources-container').empty();
			jQuery('.default-content').show();
		}); 
		
		
		
		jQuery(".js-select2").select2({
			closeOnSelect : false,
			placeholder : "Please select category",
			allowHtml: true,
			allowClear: true,
			tags: true
		});
		jQuery(".offering-select2").select2({
			closeOnSelect : false,
			placeholder : "Please select offering",
			allowHtml: true,
			allowClear: true,
			tags: true
		});
    });	
</script>
<style>
.select2-results__option:before {
  content: "";
  display: inline-block;
  position: relative;
  height: 20px;
  width: 20px;
  border: 2px solid #e9e9e9;
  border-radius: 4px;
  background-color: #fff;
  margin-right: 20px;
  vertical-align: middle;
}
.select2-results__option[aria-selected=true]:before {
  font-family:fontAwesome;
  content: "\f00c";
  color: #fff;
  background-color: #f77750;
  border: 0;
  display: inline-block;
  padding-left: 3px;
}
</style>