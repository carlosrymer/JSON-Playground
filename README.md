JSON Playground
===============

The JSON Playground is a tool that allows the generation of custom json files in any structure for testing purposes. The source is available to fork for other applications of the tool. It runs on AngularJS (v1.2.0-rc.2) and Foundation (v4.3.2).

Requirements
------------

* Grunt
* Ruby, RVM, and Compass
* Gem Installation of Zurb Foundation (a Google search will help)
* Apache/PHP
* NodeJs (w/ NPM)

Installation
------------

*	Clone the repository into a project folder of your choice and run npm install on it.
*   Run bower install on the folder as well. You should only have AngularJS and Modernizr in your bower list (run bower list).
*	That's pretty much all you need to do. Run grunt server to test the app or grunt build to access it from your own local server in the dist folder.
*   Note that if you want to overwrite Foundation styles, you have to find the location of the gem installation and make your changes there.

