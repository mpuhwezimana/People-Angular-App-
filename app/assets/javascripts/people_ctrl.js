(function() {
  "use strict"

  angular.module("app").controller("peopleCtrl", function($scope) {

    $scope.people = [{
      name: "Regine Muramutse",
      bio: "She is so prety. She teaches in Kepler as a course facilitator",
      bioVisible: false
      },
      {
        name: "Patrick Bikorimana",
        bio: "He made it to Kepler. Next year he will be studying in Kepler.",
        bioVisible: false
      },
      {
        name: "Bob Anaclet",
        bio: "He is still waiting for the Kepler admission exam",
        bioVisible: false

    }];

    $scope.shuffleBio = function (index) {
      if ($scope.people[index].bioShow == false){
        $scope.people[index].bioShow = true
      } else {
        $scope.people[index].bioShow = false
      };
    };

    $scope.removePerson = function(index) {
      
      $scope.people.splice(index, 1);
    }



    $scope.addPerson = function(name, bio) {
      if (name && bio) {
      var person = {
        name: name,
        bio: bio,
        bioShow: false
      };
      $scope.people.push(person);


      $scope.newPersonName = null;
      $scope.newPersonBio = null;
        
      }

    $scope.countPeople = $scope.people.length;

    };

    $scope.countPeople = $scope.people.length;




    window.$scope = $scope;
  });

})();
