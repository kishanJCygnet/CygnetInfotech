<?php 
/* Template Name: Career Detail Page */
get_header();

$jobid = $_GET['jobid'];
if($jobid != ''){
	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL => 'https://api.preprod1.zwayam.com/core/v1/jobs/'.$jobid,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => '',
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 0,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_HTTPHEADER => array(
		'Content-Type: application/json',
		'api_key: d6uukp_810007262b6968bda3657b225b56cd026a275c0a614bd86cf8cfdc034ca257535e90fc2b8f2eb6bddbe12c45d29dfc7df20436cf1522a33839a9d3c0cbbb09e9'
		),
	));

	$response = curl_exec($curl);
	$errno = curl_errno($curl);
	$err = curl_error($curl);
	
	curl_close($curl);
	$errtex = '';
	if ($errno) {
		$errtex = "cURL Error #:" . $err;
	} else {
		$response = json_decode($response,true);		
		$data = $response['reponseObject'];
	}
	if($errtex == '' && $data != ''){
?>
        <div class="case-study">
            <section class="bg-light pt-0">
				<div class="blog-detail">                        
					<div class="section-container-padding pb-0">
						<div class="single-container">
							<div class="blog-top-section">
								<div class="container">
									<div class="head-title-content">
										<div class="col-left">											
											<div class="blog-title">
												<h1><?php echo $data['jobTitle']; ?></h1>
											</div>
										</div>                  
									</div> 
								</div>
							</div>
							<div class="container section-container-padding pt-0 pb-0">
								<div class="article-container">
									<div class="container-with-sidebar">
										<article class="blog-contents">
											<?php if($data['longDescription'] != ''){  ?>
												<span>Long Description: <?php echo $data['longDescription']; ?></span>
											<?php } ?>
											<?php if($data['desiredSkill'] != ''){  ?>
												<span>Desired Skill: <?php echo $data['desiredSkill']; ?></span>
											<?php } ?>
											<?php if($data['qualification'] != ''){  ?>
												<span>Qualification: <?php echo $data['qualification']; ?></span>
											<?php } ?>
											<?php if($data['role'] != ''){  ?>
												<span>Role: <?php echo $data['role']; ?></span>
											<?php } ?>
											<?php if($data['location'] != ''){  ?>
												<span>Location: <?php echo $data['location']; ?></span>
											<?php } ?>
											<?php if($data['minYrsOfExperience'] != ''){  ?>
												<span>Min Years Of Experience: <?php echo $data['minYrsOfExperience']; ?>+ Years</span>
											<?php } ?>
											<?php if($data['positionsReq'] != ''){  ?>
												<span>Positions Required: <?php echo $data['positionsReq']; ?></span>
											<?php } ?>
										</article>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
        </div>
		
		<div>
			<?php echo do_shortcode('[contact-form-7 id="37334" title="Apply Job"]'); ?>
		</div>
	<?php } else { ?>
		<div class="container norecordfound">
			<p>No Record Found</p>
		</div>
	<?php } ?>
	<script>
jQuery( document ).ready(function() {
	jQuery('#jobid').val(<?php echo $jobid; ?>);
});
</script>
<?php } else { ?>
	<div class="container norecordfound">
		<p>No Record Found</p>
	</div>
<?php }
	
get_footer(); ?>
