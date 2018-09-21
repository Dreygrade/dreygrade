<?php 

    // new pages class can access the methods and variables defined in the CI_Controller class (system/core/Controller.php)
    class Pages extends CI_Controller {
        public function view($page = 'home'){
            if (!file_exists(APPPATH . 'views/pages/')){
                show_404();
            }
            
            // create array inside a $data variable. 
            // first variable is title of page but needs to be uppercase
            $data['title'] = ucfirst($page);
            
            // Now load Header and Footer
            // ->view auto looks in application/views folder
            $this->load->view('templates/header');
            // data array represents the variables we want to pass into the view
            $this->load->view('pages/'.$page,$data);
            $this->load->view('templates/footer');
            
            
        }
    }