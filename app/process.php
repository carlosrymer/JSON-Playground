<?php 

	/**
	 * Process JSON Data and Force a Download of the Resulting File
	 * @lastupdated 10.06.2013 crymer
	 */
	$json         = json_decode($_POST['json']);
	$callback     = $_POST['callback'];

?>