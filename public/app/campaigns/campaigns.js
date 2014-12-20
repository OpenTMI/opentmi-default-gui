angular.module('tmtApp.campaigns', [
  'ui.router'
])
  
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
      $stateProvider
      
        .state('campaigns', {
          abstract: true,
          url: '/campaigns',
          templateUrl: 'app/campaigns/campaigns.html',
        })
        .state('campaigns.list', {
          url: '',
          controller: 'CampaignsController',
          views: {
              'campaignsFilters@campaigns': { 
                templateUrl: 'app/campaigns/campaigns.filters.html',
              },
              'campaignsBody@campaigns': { 
                templateUrl: 'app/campaigns/campaigns.list.html'
              },
              'campaignsStatus@campaigns': { 
                templateUrl: 'app/campaigns/campaigns.status.html'
              }
          }
        })
        .state('campaigns.detail', {
          url: '/{campaignId:[0-9a-fA-F]{24}}',
          controller: 'CampaignDetailsController',
          views: {
              'campaignsFilters@campaigns': { 
                templateUrl: 'app/campaigns/campaigns.details.filters.html',
              },
              'campaignsBody@campaigns': { 
                templateUrl: 'app/campaigns/campaigns.details.html'
              },
              'campaignsStatus@campaigns': {
                templateUrl: 'app/campaigns/campaigns.details.status.html'
              }
          }
        })
        .state('campaigns.new', {
          url: '/new',
          controller: 'CampaignsCreateController',
          views: {
              'campaignsFilters@campaigns': { 
                template: '',
              },
              'campaignsBody@campaigns': { 
                templateUrl: 'app/campaigns/campaigns.create.html'
              },
              'campaignsStatus@campaigns': {
                template: ''
              }
          }
        })
      }
  ]
);