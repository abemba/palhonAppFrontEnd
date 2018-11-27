var palhonClient = angular.module("palhon_client",["ngRoute"]);
palhonClient.config(
    function($routeProvider){
        $routeProvider
        .when("/",{ templateUrl:"views/client/atm.view.html", controller:"atmController"})
        .when("/cash48",{ templateUrl:"views/client/cash48.view.html", controller:"cash48Controller"})
        .when("/myprofile",{templateUrl:"views/client/myprofile.view.html", controller:"myProfileController"});
});
palhonClient.controller("palhonClientMain",function($scope){
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