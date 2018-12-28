<?php
namespace App;
/**
Recibe un nombre y lo saluda
**/
class Saludador{

	function __construct($logger)
	{
		$this->logger = $logger;
	}
	function hola( $request,  $response, array $args) {
		$name = $args['name'];
		$this->logger->addInfo('Saludo '.$name);
		$rta = "Hola, $name";
		return $response->withJson($rta);
	}
}

?>
