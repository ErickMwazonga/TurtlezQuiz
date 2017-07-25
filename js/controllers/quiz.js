app.controller("quizController", quizController);

quizController.$inject = ['$scope', 'quizMetrics', 'DataService'];

function quizController($scope, quizMetrics, DataService){
  $scope.quizMetrics = quizMetrics;
}
