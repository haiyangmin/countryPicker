import * as angular from 'angular';
angular.module('MyApp', [])
    .controller('MyCtrl', function() {
        this.test = {
            detail: 'This is from angular.js, both angularJs and angular are running'
        };
    })
    .component('panel', {
        bindings: {
            test: '='
        },
        template: [
            '<div class="card">',
            '<div class="card-block" > {{$ctrl.test.detail }} </div>',
            '</div>'
        ].join(''),
    });

