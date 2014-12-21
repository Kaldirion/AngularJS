app.controller('StudentsController', function($scope) {

    var students =[{
        name: 'Pesho',
        photo: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/outbound-distillery/l/t0.0-20/OBPTH/profiles/anonymousUser.jpg',
        grade: 5,
        school: 'High School of Mathematics',
        teacher: 'Gichka Pesheva'
        },
        {
            name: 'Ivan',
            photo: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/outbound-distillery/l/t0.0-20/OBPTH/profiles/anonymousUser.jpg',
            grade: 6,
            school: 'High School of Mathematics',
            teacher: 'Gichka Pesheva'
        },
        {
            name: 'Georgi',
            photo: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/outbound-distillery/l/t0.0-20/OBPTH/profiles/anonymousUser.jpg',
            grade: 2,
            school: 'High School of Mathematics',
            teacher: 'Gichka Pesheva'
        },
        {
            name: 'Momchil',
            photo: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/outbound-distillery/l/t0.0-20/OBPTH/profiles/anonymousUser.jpg',
            grade: 3,
            school: 'High School of Mathematics',
            teacher: 'Gichka Pesheva'
        }
    ];

    $scope.students = students;

})
