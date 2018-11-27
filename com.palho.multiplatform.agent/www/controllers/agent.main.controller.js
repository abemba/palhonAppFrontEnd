var palhonApp = angular.module("palhon",["ngRoute"]);
palhonApp.config(
    function($routeProvider){
        $routeProvider
        .when("/",{ templateUrl:"views/availability.view.html", controller:"availability"})
        .when("/availability/week/update",{ templateUrl:"views/availability.view.week.html", controller:"availability"})
        .when("/transact",{templateUrl:"views/transact.view.html", controller:"transact"})
        .when("/transact/process/search",{templateUrl:"views/transact.view.search.html", controller:"transact"})
        .when("/transact/process/confirm",{templateUrl:"views/transact.view.confirm.html", controller:"transact"})
        .when("/transact/process/auth",{templateUrl:"views/transact.view.auth.html", controller:"transact"})
        .when("/transact/process/success",{templateUrl:"views/transact.view.success.html", controller:"transact"})
        .when("/transact/delivery",{templateUrl:"views/transact.view.delivery.html", controller:"transact"})
        .when("/financial",{templateUrl:"views/financial.view.html"})
        .when("/financial/update/paydate",{templateUrl:"views/financial.view.payoutDate.html"})
        .when("/financial/update/bankinfo",{templateUrl:"views/financial.view.bankInfo.html"})
        .when("/profile",{templateUrl:"views/profile.view.html"})
        .when("/profile/update/name",{templateUrl:"views/profile.view.name.html"})
        .when("/profile/update/address",{templateUrl:"views/profile.view.address.html"});

});
palhonApp.controller("main",function($scope){
    $scope.menuHeight =0;

    $scope.menuHeight = document.getElementsByClassName("menu")[0].scrollHeight;

    $scope.changePage = function(currentLink) 
    {
        var previousPage = document.getElementsByClassName("current")[0];
        previousPage.removeAttribute("class");
        var currentPage = currentLink.currentTarget;
        currentPage.setAttribute("class","current");
    }
}
);