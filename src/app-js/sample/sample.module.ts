import * as angular from 'angular';
angular.module('MyApp', [])
    .controller('MyCtrl', function() {
        this.title = 'New component in AngularJS 1.5!';
        this.body = 'A nice way to write components';
    })
    .component('panel', {
        bindings: {
            title: '='
        },
        template: [
            '<div class="card" ng-click="panel.toggle()">',
            '<div class="card-header" ng-click="panel.toggle()"> {{panel.title}} </div>',
            '<div class="card-block" ng-class="{hide: !panel.opened}"></div>',
            '</div>'
        ].join(''),
        controller: function() {
            this.opened = false;
            this.toggle = function () {
                console.log('test');
                this.opened = !this.opened;
            };
        }
    });

