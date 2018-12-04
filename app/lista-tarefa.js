function ListaTarefaController($scope) {
    $scope.itens = [

    ];

    $scope.adicionaItem = function () {
        $scope.itens.push({taref: $scope.item.taref,
           dia: $scope.item.dia,
           delete: false});
        $scope.item.taref = $scope.item.dia = '';
    };



    $scope.deletaItem  = function(tare) {
        var index = $scope.itens.indexOf(tare);
        $scope.itens.splice(index, 1);
    }


}
