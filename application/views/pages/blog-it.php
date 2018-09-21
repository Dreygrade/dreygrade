<header role="banner">  
        <h2><?=$title ?></h2>
        <nav role="navigation">
        
        </nav>
    </header>
    
    <div class="wrap">
        <main role="main">
        <h3>Panic on the streets</h3>
            
    <ol>
        <li>Download CodeIgnitor</li>
        <li>Change $config['baseurl'] = "localhost/sitename"</li>
        <li>Remove index.php from config.php in config folder</li>
        <li>Create .htaccess file at root of project, use as boilerplate for all CodeIgnitor projects -
        RewriteEngine on
            RewriteCond $1 !^(index\.php|assets|images|js|css|uploads|favicon.png)
RewriteCond %(REQUEST_FILENAME) !-f
RewriteCond %(REQUEST_FILENAME) !-d
RewriteRule ^(.*)$ ./index.php/$1 [L]
        
        </li>
        <li>Points to (index\.php|assets|images|js|css</li>
        <li>index.php redirects to the controller - the rest -assets|images|js|css are static files</li>
        <li>http://localhost/sitename/welcome should now work</li>
        <li>Now any controller you create will go http://localhost/sitename/**** &larr; eg: posts - a controller<br>
        http://localhost/sitename/posts/show &larr; a method<br>
        http://localhost/sitename/posts/show/2 &larr; id as a parameter
        </li>    
    </ol>
            
    <h2>Create Pages Controller for static pages</h2>
    <ol>
        <li>Pages - for static pages such as about, policies etc.</li>
        <li>Create a file and save as Pages.php in sitename/application/controllers</li>
        <li>Keep Controllers plural - eg: Pages.php and Models singular eg: page.php</li>
        <li>Create a Page Controller -
        <code>class Pages extends CI_Controller {
                public function view($page = 'home'){
                    if (!file_exists(APPPATH)){
                        show_404();
                }
            } 
        }
        </code>
        </li>
        
        <li>Back to Pages Controller - check to see if a view exists</li>
        <li>
        <code>

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
    }</code>
        </li>

        <li>Create a folder in views called pages and create a file called about.php</li>
        <li>Go to http://localhost:8888/cidreygrade/pages/view/about.php and should see the about.php page</li>
        
        <h3>Static Routing System</h3>
        
        <ul>
        <li>Need to set up a route for these pages becasue we don;t want to have to use /pages/view/about all the time</li>
        <li>Go to application/config/routes.php</li>
        <li>
            <code>
            // custom routes
            $route['(:any)'] = 'pages/view/$1'; /* This will go to anything eg: localhost/sitename/anything $1 represents anything */
           </code>
            <code>
            // $route['default_controller'] = 'welcome';
            // changed the default_controller to -
            $route['default_controller'] = 'pages/view';
            </code>
        </li>
            
            
        <li>If we don't provide a filename we still get a 404 error. So need to create the home.php inside pages which acts as a default go to page if no other page put in</li>
        <li>Create home.php in application/views/pages</li>
            
            
        <li>Pass in the $title variable - can use this same code for all pages<br>
            <code><h2><?=$title ?></h2></code>
         </li>
        
        
        </ul>
        
        </ol>
            
    <h2>Navigation</h2>  
        <ol>
        <li>Bootstrap set up - use a Bootswatch example</li>
        <li>Download eg: Slate and create an assets folder at the same level as the application folder. Add css, images and js folders in here and create a new file styles.css in CSS folder and paste in the Bootstrap code.</li>
            
            </ol>
            
            
        </main>
    </div>