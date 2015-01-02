app.controller('StoreController',function($scope){

    var gems = [{
            name : 'Amethyst',
            price : 199,
            description : 'Amethyst is the purple variety of the quartz mineral species and the gem most commonly associated with the color purple',
            images : [
                {
                    full : 'app/assets/img/Amethyst/full/Amethyst_ovale_01.jpg',
                    thumb : 'app/assets/img/Amethyst/thumb/Amethyst_ovale_01.jpg'
                },
                {
                    full : 'app/assets/img/Amethyst/full/Amethyst_ovale_02.jpg',
                    thumb: 'app/assets/img/Amethyst/thumb/Amethyst_ovale_02.jpg'
                },
                {
                    full : 'app/assets/img/Amethyst/full/Amethyst_square_01.jpg',
                    thumb : 'app/assets/img/Amethyst/thumb/Amethyst_square_01.jpg'
                },
                {
                    full : 'app/assets/img/Amethyst/full/Amethyst_triangle_01.jpg',
                    thumb : 'app/assets/img/Amethyst/thumb/Amethyst_triangle_01.jpg'
                }
            ],
            canPurchase : true,
            soldOut: false
        },
        {
            name : 'Pentagonal Gem',
            price : 5.95,
            description : 'Some gems have hidden qualities beyond their luster, beyond their shine ... Dobeca is one of those gems.',
            canPurchase : false,
            soldOut: false
        }
    ];

    $scope.storeProducts = gems;

})
