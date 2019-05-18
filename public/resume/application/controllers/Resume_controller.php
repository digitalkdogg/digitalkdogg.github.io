<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Resume_controller extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * 
	 * 
	 */
	public function index()
	{
		$this->load->helper('url');
		$this->load->view('testindex');
	}
}