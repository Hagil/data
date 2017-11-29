angular.module("todoApp", []).controller("TodosController", TodosController);

function TodosController($scope){
// $scope is our hardcoded seed data
$scope.all = [
  {task: "build an awesome to-do list", done: false},
  {task: "get super good at Angular", done: false},
  {task: "party on code", done: false},
  {task: "tackle the bonus challenges for $scope lesson", done: false},
  {task: "take a nap", done: false}
];
}
//$scope will add our new function as a property on our controller, so we can use it in the view
$scope.add = addTodo;

// $scope just adds a new object to our array, with defaults for now
function addTodo(){
  $scope.all.push({task: $scope.newTodo.task, done: false});
  // $scope last piece isn't necessary, but nicely resets the task to an empty string, which will clear the textbox because the view is bound to the data
  $scope.newTodo.task = '';
}

