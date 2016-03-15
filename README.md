bootstrap3-jade-node
====================

[Bootstrap 3 samples] rendered using [Jade], [NodeJS], [Express] and [Grunt]

# bootstrap3-jade-node-express-grunt

+ Do you want to accelerate the bootstrapping of your web applications?

+ Test it now https://bootstrap3-jade-node-express-grunt.azurewebsites.net/

## Install dependencies

+ install [NodeJS] (globally)
+ install [NPM] (globally)
+ install [Grunt] (globally)


## Download the code without Git

kudos to [onlinemad], he wrote a script downloading the code and generating a package.json file

The following script will

1. create a directory named "bootstrap3-jade-node-express-grunt"
2. create a file named “init.js" containing this script [https://gist.github.com/onlinemad/6373852]
3. install the depedencies: adm-zip, request, prompt and js-beautify
4. run the following commands

> `mkdir bootstrap3-jade-node-express-grunt`
>
> `cd bootstrap3-jade-node-express-grunt`
>
> `curl https://gist.github.com/onlinemad/6373852/raw/8439cc03c69cd171dc95a72874130b7f6a2e7c34/init.js > init.js`
>
> `npm install adm-zip`
>
> `npm install request`
>
> `npm install prompt`
>
> `npm install js-beautify`
>
> `node init.js`

5. hit Enter on your keyboard :-)

6. Fill the project information: Project name, description, version number (N.N.N), Author, Reposition (url),
    + the project name will be the directory used to store the [bootstrap3-jade-node-express-grunt] source code

7. wait a few seconds, the download occurs in background and you don't have any visual feedback

8. go to "How to run the app" chapter (hereafter)

## Download the code using Git

+ git clone https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt.git
+ `cd bootstrap3-jade-node-express-grunt`

## How to run the app

+ Install the module using `npm install` command (locally, a node_modules directory will be created)
+ Start the server using the `grunt` command
+ open [http://localhost:3001/](http://localhost:3001/) home page


## Documentation

+ start the server using `grunt`
+ click on the links leading you to the [Bootstrap] templates translated into Jade
+ Use the *.jade files into your projects !

+ how did we convert the html into jade
    + We use [html2jade] to translate automatically the html into a jade file
    + Remove the characters as Jade complains as it believes it has to interpret the code  `=================================================`
    + replace inside the jade file the path to the JS and CSS files from [Bootstrap Twitter]:  `../..` with the parameter `#{pathToAssets}`
    + change the link to the custom made CSS made for each template stored under the `bootstrap-3.0.0/examples/` directory :  `#{pathToSelectedTemplateWithinBootstrap}`

## Examples, how to open a bootstrap page

+ open [http://localhost:3001/](http://localhost:3001/)
+ open the [Starter template](http://localhost:3001/template/starter-template)

## Available templates (sorted)

- [X] [blog](http://getbootstrap.com/examples/blog/)
- [X] [carousel](http://twbs.github.io/bootstrap/examples/carousel/)
- [X] [cover](http://getbootstrap.com/examples/cover/)
- [X] [dashboard](http://getbootstrap.com/examples/dashboard/)
- [X] [grid](http://twbs.github.io/bootstrap/examples/grid/)
- [X] [jumbotron-narrow](http://twbs.github.io/bootstrap/examples/jumbotron-narrow/)
- [X] [jumbotron](http://twbs.github.io/bootstrap/examples/jumbotron/)
- [X] [justified-nav](http://twbs.github.io/bootstrap/examples/justified-nav/)
- [X] [navbar-fixed-top](http://twbs.github.io/bootstrap/examples/navbar-fixed-top/)
- [X] [navbar-static-top](http://twbs.github.io/bootstrap/examples/navbar-static-top/)
- [X] [navbar](http://twbs.github.io/bootstrap/examples/navbar/)
- [X] [non-responsive](http://twbs.github.io/bootstrap/examples/non-responsive/)
- [X] [offcanvas](http://twbs.github.io/bootstrap/examples/offcanvas/)
- [X] [signin](http://twbs.github.io/bootstrap/examples/signin/)
- [X] [starter-template](http://twbs.github.io/bootstrap/examples/starter-template/)
- [X] [sticky-footer-navbar](http://twbs.github.io/bootstrap/examples/sticky-footer-navbar/)
- [X] [sticky-footer](http://twbs.github.io/bootstrap/examples/sticky-footer/)
- [X] [theme](http://twbs.github.io/bootstrap/examples/theme/)


## Release History

v2016-03-13

+ [Agnieszka Gancarczyk] has [migrated from Express 3.2.6 to 4.8.0]

v2016-02-16

+ [Josh Crunkelton] has [aligned the check box on the sign in page](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/pull/7)

v2014-11-13

+ [Kobi Eisenberg] has [migrated the code](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/pull/5) from [Bootstrap] 3.2.0 to 3.3.1


v2014-10-20

+ [Matan Eine] has [migrated the code](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/pull/4) from [Bootstrap] 3.0.0 to [Bootstrap] 3.2.0
    + Add Cover template
    + Add Blog template
    + Add Dashboard template
+ [Simon] has found that [the html code was broken](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/issues/3) in the [Bootstrap] 3.0.0

v2014-01-08

+ Correct the chapter "Download the code without Git"

v2014-01-07

+ Add script written by [onlinemad] - a simple script to init a project based on bootstrap3-jade-node-express-grunt: [https://gist.github.com/onlinemad/6373852]
+ [Petr Volny] has [made two changes](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/pull/2):
    + Jade npm module update
    + Fix deprecated jade doctype 5


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

- [Bootstrap] 3 is just released, it is time to convert HTML into Jade templates
+ Convert [starter-template.html](http://twbs.github.io/bootstrap/examples/starter-template/) template into [starter-template.jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/tree/master/app/views/bootstrap3-templates)

## License
Copyright (c) 2013 ALT-F1, We believe in the projects we work on™

Licensed under the MIT license.


[ALT-F1]: http://www.alt-f1.be
[AngularJS]: http://angularjs.org/
[Bootstrap 3 samples]: http://twbs.github.io/bootstrap/getting-started/#examples
[Bootstrap for Compass]: https://github.com/vwall/compass-twitter-bootstrap
[Bootstrap]: http://getbootstrap.com/
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
[https://gist.github.com/onlinemad/6373852]: https://gist.github.com/onlinemad/6373852
[Istanbul]: https://github.com/gotwarlost/istanbul
[Jade]: http://jade-lang.com/
[Jasmine]: http://pivotal.github.io/jasmine/
[Javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Karma]: http://karma-runner.github.io/
[log4js]: https://github.com/nomiddlename/log4js-node
[Matan Eine]: https://github.com/mataneine
[matchdep]: https://npmjs.org/package/matchdep
[Mocha]: http://visionmedia.github.io/mocha/
[MongoDB]: http://www.mongodb.org/
[MongoHQ]: https://www.mongohq.com
[MongoLab]: https://mongolab.com
[Mongoose]: http://mongoosejs.com/
[Node inspector]: https://github.com/node-inspector/node-inspector
[NodeJS]: http://nodejs.org/
[NPM]: http://npmjs.org/
[onlinemad]: https://github.com/onlinemad
[Petr Volny]: https://github.com/petrvolny
[Professional Node JS book]: http://astore.amazon.fr/i14ynet-21/detail/1118185463
[Professional Node JS Source Code]: https://github.com/ALT-F1/nodejs-professional
[Python]: http://www.python.org
[Simon]: https://github.com/simonjmartin
[Spacelab stylesheet]: http://bootswatch.com/2/spacelab/
[Ubuntu]: http://www.ubuntu.com/
[Yeoman]: http://yeoman.io/
[Kobi Eisenberg]: https://github.com/kobieisen
[Josh Crunkelton]: https://github.com/Crunkelton
[Agnieszka Gancarczyk]: https://github.com/agagancarczyk
[migrated from Express 3.2.6 to 4.8.0]: https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt/pull/8
