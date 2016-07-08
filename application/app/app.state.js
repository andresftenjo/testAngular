angular.module(window.nameSpaceApp, ['ui.router', 'oc.lazyLoad'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ( $stateProvider, $urlRouterProvider ) {

            var cCache = new Date().getTime();

            var routeApp = {
                structureApp: {
                    abstract: true,
                    url:'',
                    views: {
                        'app_header':{
                            templateUrl: 'views/template/header.html?t='+cCache,
                            controller: 'HeaderController',
                            controllerAs: 'vm'
                        },
                        'app_footer':{
                            templateUrl: 'views/template/footer.html?t='+cCache,
                            controller: 'FooterController',
                            controllerAs: 'vm'
                        },
                        '': {
                            templateUrl: 'views/app.html'
                        }
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', '$rootScope', function( $ocLazyLoad,$rootScope ){

                            return $ocLazyLoad.load([
                                'lib/controllers/template/header.controller.js',
                                'lib/controllers/template/footer.controller.js'
                            ])

                        }]
                    }
                },
                notFound: {
                    utl: '/404',
                    templateUrl: 'views/404.html?t='+cCache
                },
                users: {
                    url: '/users',
                    controller: 'UsersController',
                    templateUrl: 'views/layouts/users.html',
                    controllerAs: 'vm',
                    resolve: {
                        deps: ['$ocLazyLoad', function( $ocLazyLoad ){

                            return $ocLazyLoad.load( 'lib/controllers/users.controller.js' )

                        }]
                    }
                }

            };

            $urlRouterProvider
                .when('/', '/users')
                .otherwise('/404');

            $stateProvider
                .state('app', routeApp.structureApp )
                .state('app.not_found', routeApp.notFound )
                .state('app.users', routeApp.users )
        }
    ]);