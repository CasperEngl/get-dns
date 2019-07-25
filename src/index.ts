import args from 'args';

args
  .option('port', 'The port on which the app will be running', 3000)
  .option('reload', 'Enable/disable livereloading');