angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope, $location)
    {

        $scope.items = [
        {
            href: "#/cliente",
            label: 'cliente!'
        },
        {
            href: "#/tela3",
            label: 'tela3.'
        },
        {
            href: "#/simulacoes",
            label: 'termometro'
        }];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {};

        $scope.toggleDropdown = function($event)
        {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };


        $rootScope.dadosGraficos = [
        {
            "x": "VALORES",
            "LB": 47,
            "LM": 36,
            "OUTROS": 25,
            "TOS": 37,
            "MARKUP": 23
        }];
        $rootScope.dadosGraficosColunas = [
        {
            "id": "LB",
            "type": "bar",
            "name": "LB"
        },
        {
            "id": "LM",
            "type": "bar",
            "name": "LM"
        },
        {
            "id": "OUTROS",
            "type": "bar",
            "name": "OUTROS"
        },
        {
            "id": "TOS",
            "type": "bar",
            "name": "TOS"
        },
        {
            "id": "MARKUP",
            "type": "bar",
            "name": "MARKUP"
        }];

        $rootScope.datax = {
            "id": "x"
        };




    })

.controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location)
{


    $rootScope.pesquisas = [
        {
            id: 1,
            codCliente: "654222261",
            data: "01.04.2017",
            realizadaPor: "Guilherme"
        },
        {
            id: 2,
            codCliente: "867867888",
            data: "02.04.2017",
            realizadaPor: "Gabriela"
        },
        {
            id: 3,
            codCliente: "678678888",
            data: "03.04.2017",
            realizadaPor: "Gustavo"
        },
        {
            id: 4,
            codCliente: "645633333",
            data: "04.04.2017",
            realizadaPor: "Isadora"
        },
        {
            id: 5,
            codCliente: "876876888",
            data: "05.04.2017",
            realizadaPor: "Ana Clara"
        },
        {
            id: 6,
            codCliente: "323232434",
            data: "06.04.2017",
            realizadaPor: "Mariana"
        },
        {
            id: 7,
            codCliente: "5435453",
            data: "07.04.2017",
            realizadaPor: "Felipe"
        },
        {
            id: 8,
            codCliente: "545435543",
            data: "08.04.2017",
            realizadaPor: "Maria Clara"
        }

    ];



    $rootScope.interacoes = [
    {
        id: 1,
        data: "01.04.2017",
        hora: "08:22",
        tipoId: "1",
        tipo: "LIGACAO IN"
    },
    {
        id: 2,
        data: "02.04.2017",
        hora: "10:52",
        tipoId: "2",
        tipo: "LIGACAO OUT"
    },
    {
        id: 3,
        data: "05.04.2017",
        hora: "11:11",
        tipoId: "1",
        tipo: "LIGACAO IN"
    },
    {
        id: 4,
        data: "10.04.2017",
        hora: "13:20",
        tipoId: "2",
        tipo: "LIGACAO OUT"
    },
    {
        id: 5,
        data: "20.04.2017",
        hora: "13:50",
        tipoId: "2",
        tipo: "LIGACAO OUT"
    },
    {
        id: 6,
        data: "22.04.2017",
        hora: "15:30",
        tipoId: "3",
        tipo: "E-MAIL"
    },
    {
        id: 7,
        data: "22.04.2017",
        hora: "16:00",
        tipoId: "3",
        tipo: "E-MAIL"
    },
    {
        id: 8,
        data: "25.04.2017",
        hora: "20:22",
        tipoId: "1",
        tipo: "LIGACAO IN"
    }];

    $rootScope.linksMenu = [
    {
        nome: 'Home',
        link: '/home',
        icon: 'fa-home'
    },
    {
        nome: 'Cliente',
        link: '/cliente',
        icon: 'fa-user'

    },
    {
        nome: 'Tela3',
        link: '/tela3',
        icon: 'fa-bar-chart'

    },
    {
        nome: 'Simulações',
        link: '/simulacoes',
        icon: 'fa-usd'

    },
    {
        nome: 'Termometro',
        link: '/termometro',
        icon: 'fa-thermometer-half'

    },
    {
        nome: 'Clientes',
        link: '/clientes',
        icon: 'fa-users'

    }];

    $rootScope.$on('$routeChangeSuccess', function(e, current, pre)
    {
        $rootScope.currentRoute = $location.path();
    });

    $rootScope.currentRoute = "/home";
});
