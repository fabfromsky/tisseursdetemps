'use strict';

/* globals angular */

/**
 * @ngdoc object
 * @name  tisseursdetemps
 * @description
 *
 * Main module of tisseursdetemps application
 */

angular
    .module('tisseursdetemps', [
        'ui.router',
        'ui.route'
    ])
    .constant('_', window._)
    .run(
      [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        }
      ]
    )
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('home', {
                url: '/accueil',
                templateUrl: '/scripts/feature/home/home.html',
                data: {
                    pageTitle: "Tisseurs de Temps, Compagnie artistique"
                }
            })
            .state('projects', {
                url: '/projets',
                templateUrl: '/scripts/feature/projects/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'pc',
                data: {
                    pageTitle: "Tisseurs de Temps - Découvrez nos projets"
                }
            })
            .state('detail', {
                url: '/projets/{id}',
                templateUrl: 'scripts/feature/projects/projectDetail.html',
                controller: 'ProjectDetailCtrl',
                controllerAs: 'pdc',
                params: {
                    id: null
                },
                data: {
                    pageTitle: "Tisseurs de Temps - Découvrez nos projets"
                }
            })
            .state('description', {
                url: '/a-propos',
                templateUrl: '/scripts/feature/description/description.html',
                controller: 'DescCtrl',
                controllerAs: 'dc',
                data: {
                    pageTitle: "Tisseurs de Temps - La compagnie"
                }
            })
            .state('partenaires', {
                url: '/nos-partenaires',
                templateUrl: '/scripts/feature/partners/partners.html',
                controller: 'PartCtrl',
                controllerAs: 'pac',
                data: {
                    pageTitle: "Tisseurs de Temps - Nos partenaires"
                }
            })/*
            .state('contact', {
                url: '/contact',
                templateUrl: '/scripts/feature/contact/contact.html',
            });*/

        $urlRouterProvider.otherwise('/accueil');
    });
