var app = angular.module("snackRater", []);

app.controller("SnackCtrl", function($scope) {
  $scope.snacks = [
    {
      name: 'Pocky Sticks',
      type: 'Japanese Cookie sticks',
      category: 'Studying'
    },
    {
      name: 'Doritos Cool Ranch',
      type: 'Chips',
      category: 'Stress Eating'
    },
    {
      name: 'Nutella Cups',
      type: 'Dipping Cookies',
      category: 'Fun Dessert'
    },
    {
      name: 'Fruit Snacks',
      type: 'Fruit Candy',
      category: 'Quick Sugar Infusion'
    }




  ];
});