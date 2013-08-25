bootstrap3-jade-node
====================

[Bootstrap 3 samples] rendered using [Jade], [NodeJS], [Express] and [Grunt]

# bootstrap3-jade-node

+ Do you want to accelerate the bootstrapping of your web applications?

## Getting Started

+ git clone https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt.git
+ `cd bootstrap3-jade-node-express-grunt`
+ install [NodeJS] (globally)
+ install [Grunt] (globally)
+ Install the module with: `npm install` (locally, a node_modules directory will be created)
+ Start the server with: `Grunt`

## Documentation

+ start the server
+ click on the links leading you to the [Twitter Bootstrap] templates translated into Jade
+ Use the *.jade files into your projects !

+ how did we convert the html into jade
    + We use [html2jade] to translate automatically the html into a jade file
    + Remove the characters as Jade complains as it believes it has to interpret the code  `=================================================`
    + replace inside the jade file the path to the JS and CSS files from [Bootstrap Twitter]:  `../..` with the parameter `#{pathToAssets}`
    + change the link to the custom made CSS made for each template stored under the `bootstrap-3.0.0/examples/` directory :  `#{pathToSelectedTemplateWithinBootstrap}`

## Examples

+ open [http://localhost:3001/](http://localhost:3001/)
+ open the [Starter template](http://localhost:3001/template/starter-template)

## Contributing
Feel free to help me convert all the templates:

- [X] [carousel](http://twbs.github.io/bootstrap/examples/carousel/)
- [X] [grid](http://twbs.github.io/bootstrap/examples/grid/)
- [X] [jumbotron](http://twbs.github.io/bootstrap/examples/jumbotron/)
- [X] [jumbotron-narrow](http://twbs.github.io/bootstrap/examples/jumbotron-narrow/)
- [X] [justified-nav](http://twbs.github.io/bootstrap/examples/justified-nav/)
- [X] [navbar](http://twbs.github.io/bootstrap/examples/navbar/)
- [X] [navbar-fixed-top](http://twbs.github.io/bootstrap/examples/navbar-fixed-top/)
- [X] [navbar-static-top](http://twbs.github.io/bootstrap/examples/navbar-static-top/)
- [X] [non-responsive](http://twbs.github.io/bootstrap/examples/non-responsive/)
- [X] [offcanvas](http://twbs.github.io/bootstrap/examples/offcanvas/)
- [X] [signin](http://twbs.github.io/bootstrap/examples/signin/)
- [X] [starter-template](http://twbs.github.io/bootstrap/examples/starter-template/)
- [X] [sticky-footer](http://twbs.github.io/bootstrap/examples/sticky-footer/)
- [X] [sticky-footer-navbar](http://twbs.github.io/bootstrap/examples/sticky-footer-navbar/)
- [X] [theme](http://twbs.github.io/bootstrap/examples/theme/)

## Release History

TODOs

+ add front end test against html pages

v2013-08-25

+ Convert [offcanvas.html](http://twbs.github.io/bootstrap/examples/offcanvas/) template into [offcanvas.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [signin.html](http://twbs.github.io/bootstrap/examples/signin/) template into [signin.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [starter-template.html](http://twbs.github.io/bootstrap/examples/starter-template/) template into [starter-template.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [sticky-footer.html](http://twbs.github.io/bootstrap/examples/sticky-footer/) template into [sticky-footer.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [sticky-footer-navbar.html](http://twbs.github.io/bootstrap/examples/sticky-footer-navbar/) template into [sticky-footer-navbar.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [theme.html](http://twbs.github.io/bootstrap/examples/theme/) template into [theme.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)

v2013-08-24

+ Convert [grid.html](http://twbs.github.io/bootstrap/examples/grid/) template into [grid.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [jumbotron.html](http://twbs.github.io/bootstrap/examples/jumbotron/) template into [jumbotron.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [jumbotron-narrow.html](http://twbs.github.io/bootstrap/examples/jumbotron-narrow/) template into [jumbotron-narrow.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [justified-nav.html](http://twbs.github.io/bootstrap/examples/justified-nav/) template into [justified-nav.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [justified-nav.html](http://twbs.github.io/bootstrap/examples/justified-nav/) template into [justified-nav.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [navbar.html](http://twbs.github.io/bootstrap/examples/navbar/) template into [navbar.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [navbar-fixed-top.html](http://twbs.github.io/bootstrap/examples/navbar-fixed-top/) template into [navbar-fixed-top.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [navbar-static-top.html](http://twbs.github.io/bootstrap/examples/navbar-static-top/) template into [navbar-static-top.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ Convert [non-responsive.html](http://twbs.github.io/bootstrap/examples/non-responsive/) template into [non-responsive.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)
+ add an issue on the [html2jade] project as ["escaped characters are wrongly translated into html. e.g. &lt; becomes > while it shouldn't be"](https://github.com/donpark/html2jade/issues/57)

v2013-08-22

+ Convert [carousel.html](http://twbs.github.io/bootstrap/examples/carousel/) template into [carousel.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)

v2013-08-21

- [Twitter Bootstrap] 3 is just released, it is time to convert HTML into Jade templates
+ Convert [starter-template.html](http://twbs.github.io/bootstrap/examples/starter-template/) template into [starter-template.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)

## License
Copyright (c) 2013 ALT-F1, We believe in the projects we work on™

Licensed under the MIT license.



[Bootstrap 3 samples]: http://twbs.github.io/bootstrap/getting-started/#examples
[ALT-F1]: http://www.alt-f1.be
[AngularJS]: http://angularjs.org/
[Connect]: http://www.senchalabs.org/connect/
[Express]: http://expressjs.com/
[Font Awesome]: http://fortawesome.github.io/Font-Awesome/
[Google APIs]: https://developers.google.com/compute/docs/api/libraries
[Google Compute Engine API Reference]: https://developers.google.com/compute/docs/reference/latest/
[Google Compute Engine API]: https://developers.google.com/compute/docs/api/libraries
[Google Compute Engine]: https://cloud.google.com/products/compute-engine
[Grunt-nodemon]: https://github.com/remy/nodemon
[Grunt]: http://gruntjs.com/
[html2jade]: https://github.com/donpark/html2jade
[Istanbul]: https://github.com/gotwarlost/istanbul
[Jade]: http://jade-lang.com/
[Jasmine]: http://pivotal.github.io/jasmine/
[Javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Karma]: http://karma-runner.github.io/
[log4js]: https://github.com/nomiddlename/log4js-node
[matchdep]: https://npmjs.org/package/matchdep
[Mocha]: http://visionmedia.github.io/mocha/
[MongoDB]: http://www.mongodb.org/
[MongoHQ]: https://www.mongohq.com
[MongoLab]: https://mongolab.com
[Mongoose]: http://mongoosejs.com/
[Node inspector]: https://github.com/node-inspector/node-inspector
[NodeJS]: http://nodejs.org/
[NPM]: http://npmjs.org/
[Professional Node JS book]: http://astore.amazon.fr/i14ynet-21/detail/1118185463
[Professional Node JS Source Code]: https://github.com/ALT-F1/nodejs-professional
[Python]: http://www.python.org
[SIMOGGA COMPUTE WEB source code]: https://bitbucket.org/amiasystems/simogga-compute-web
[SIMOGGA CORE source code]: https://bitbucket.org/amiaconsulting/simogga-core
[Spacelab stylesheet]: http://bootswatch.com/2/spacelab/
[Twitter Bootstrap for Compass]: https://github.com/vwall/compass-twitter-bootstrap
[Twitter Bootstrap]: http://getbootstrap.com/
[Ubuntu]: http://www.ubuntu.com/
[Yeoman]: http://yeoman.io/