myApp.controller('playersController', ['$scope', function ($scope) {
    $scope.users =
        [
             
          { Name: 'Virat kohli', PlayingRole: 'Batsman', BatingStyle: 'Right-Hand Batsman', BowlingStyle: 'Right-Arm bowler', Team: 'India' },
          { Name: 'Irfan Pathan', PlayingRole: 'Bowler', BatingStyle: 'Left-Hand Batsman', BowlingStyle: 'Left-Arm bowler', Team: 'India' },
          { Name: 'Glenn Maxwell', PlayingRole: 'Batsman', BatingStyle: 'Right-Hand Batsman', BowlingStyle: 'Right-Arm bowler', Team: 'Australia' },
          { Name: 'Dale Steyn', PlayingRole: 'Bowler', BatingStyle: 'Right-Hand Batsman', BowlingStyle: 'Right-Arm bowler', Team: 'South Africa' },
          { Name: 'Suresh raina', PlayingRole: 'Batsman', BatingStyle: 'Left-Hand Batsman', BowlingStyle: 'Right-Arm Off Spin bowler', Team: 'India' }
          

        ];
  
    $scope.addUsers = function () {
        $scope.users.push({ Name: $scope.inputData.Name, PlayingRole: $scope.inputData.PlayingRole, BatingStyle: $scope.inputData.BatingStyle, BowlingStyle: $scope.inputData.BowlingStyle, Team: $scope.inputData.Team });
        $scope.clearInput();
    };
    $scope.removeUser = function (userToRemove) {
        var index = this.users.indexOf(userToRemove);
        this.users.splice(index, 1);
    };

    $scope.clearUser = function (user) {
        user.Name = '';
        user.PlayingRole = '';
        user.BatingStyle = '';
        user.BowlingStyle = '';
        user.Team = '';
    };

    $scope.clearInput = function () {
        $scope.inputData.Name = '';
        $scope.inputData.PlayingRole = '';
        $scope.inputData.BatingStyle = '';
        $scope.inputData.BowlingStyle = '';
        $scope.inputData.Team = '';
    };

    $scope.editUser = function (id) {
        $scope.isEdit = true;
        $scope.inputData = id;
       
    };
  
  
}]);