app.controller('appController', function($scope) {

    $scope.tiger = {
            'Name': 'Pesho',
            'Born': 'Asia',
            'BirthDate': 2006,
            'Live': 'Sofia Zoo'
    }

    $scope.url="http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg";

    $scope.mainContainer = {
        'width' : '620px',
        'height' : '260px',
        'background-color' : '#CACACA'
    }

    $scope.imageStyle = {
        'width' : '200px',
        'vertical-align' : 'middle',
        'margin' : '30px'
    };

    $scope.labelStyle = {
        'font-family' : 'Ariel',
        'font-weight' : 'bold',
        'font-size' : '30',
        'font-color' : '#263441'
    }

    $scope.dataStyle = {

    }

    $scope.infoClass = {
        'float' : 'left',
        'width' : '50%',
        'text-align' : 'center',
        'vertical-align' : 'middle',
        'margin' : '20px'
    }

    $scope.imageClass = {
        'float' : 'right'
    }

})
