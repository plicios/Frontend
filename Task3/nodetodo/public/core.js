var nodeTodo = angular.module("nodeTodo", []);

function mainController($scope, $http) {
  $scope.formData = {};

  $scope.cos = "Ala ma kota";
  $scope.status = null

  $scope.filteredList = function()
  {  
    if($scope.status === null){
      return $scope.todos
    } else {
      return $scope.todos.filter(function(todoItem){
        return todoItem.done == $scope.status
      })
    }
  };

  // when landing on the page, get all todos and show them
  $http
    .get("/api/todos")
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http
      .post("/api/todos", $scope.formData)
      .success(function(data) {
        $("input").val("");
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  // update a todo after checking it
  $scope.updateTodo = function(item) {
    $http
      .put("/api/todos/" + item._id, item)
      .success(function (data) {
        $scope.todos = data;
      })
      .error(function (data) {
        console.log("Error: " + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http
      .delete("/api/todos/" + id)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };
}
