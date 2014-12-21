app.controller('StoreController',function($scope){

    var gem = {
        name : 'Dodecahedron',
        price : 2.95,
        description : 'Some gems have hidden qualities beyond their luster, beyond their shine ... Dobeca is one of those gems.',
        canPurchase : false
    }

    $scope.storeProduct = gem;

})
