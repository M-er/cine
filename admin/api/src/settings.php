<?php
error_log(getcwd());
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'cinema-app',
            'type' =>[
                ['path' => './logs/cinema-app.log','level' => \Monolog\Logger::INFO],
                ['path' => 'php://stderr','level' => \Monolog\Logger::DEBUG],
            ],
        ],
    ],
];
