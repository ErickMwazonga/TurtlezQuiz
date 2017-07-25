// var app = angular.module("turtlezFacts", []);

app.controller("listCtrl", ListController);

// injecting a factory quizMetrics
ListController.$inject = ['$scope', 'quizMetrics', 'DataService'];

function ListController($scope, quizMetrics, DataService){
  // $scope.dummyData = "hello ANGULAR";

  $scope.quizMetrics = quizMetrics;
  $scope.data = DataService.turtlesData;

  $scope.activeTurtle = {};
  $scope.changeActiveTurtle = changeActiveTurtle;
  $scope.activateQuiz = activateQuiz;

  $scope.search = "";
  // $scope.quizActive = false;

  function changeActiveTurtle(index){
    $scope.activeTurtle = index;
  }

  function activateQuiz(){
    // $scope.quizActive = true;
    // $scope.quizMetrics.quizActive = true;
    quizMetrics.changeState(true);
  }
}
