app.controller("quizCtrl", QuizController);

QuizController.$inject = ['$scope', 'quizMetrics', 'DataService'];

function QuizController($scope, quizMetrics, DataService){
  $scope.quizMetrics = quizMetrics;
  $scope.dataService = DataService;
  $scope.questionAnswered = questionAnswered;
  $scope.setActiveQuestion = setActiveQuestion;
  $scope.selectAnswer = selectAnswer;
  $scope.activeQuestion = 0;

  var numQuestionsAnswered = 0;

  function setActiveQuestion(){
    var breakOut = false;
    var quizLength = DataService.quizQuestions.length - 1;

    while(!breakOut){
      $scope.activeQuestion = $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;

      if(DataService.quizQuestions[$scope.activeQuestion].selected == null){
        breakOut = true;
      }
    }
  }

  function questionAnswered(){

    var quizLength = DataService.quizQuestions.length;

    if(DataService.quizQuestions[$scope.activeQuestion].selected !== null){
      numQuestionsAnswered++;
      if(numQuestionsAnswered >= quizLength){
        //finalise quiz
      }
    }

    $scope.setActiveQuestion();
  }

  function selectAnswer(index){
    DataService.quizQuestions[$scope.activeQuestion].selected = index;
  }
}
