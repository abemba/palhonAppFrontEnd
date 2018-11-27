palhonApp.controller("availability",function($scope)
{
    var tick = false;
    $scope.shiftDescription = "online";
    $scope.cashBalance = 9000;
    $scope.deliveryStatus ="on";
    $scope.deliveryMethod = true;
    $scope.activeDeliveryMethod ="";

    $scope.changeShiftStatus = function(shiftStatus)
    {
        var currentButton = shiftStatus.target;
        var otherButton;
        var currentColorClass = currentButton.getAttribute("class");
        if(currentButton.nextElementSibling !== null)
        {
            otherButton = currentButton.nextElementSibling;   
        }else{
            otherButton = currentButton.previousElementSibling;
        }     

        if("on" == currentColorClass){
            currentButton.setAttribute("class","off")
            otherButton.setAttribute("class","on")
        }else if("off" == currentColorClass){
            currentButton.setAttribute("class","on")
            otherButton.setAttribute("class","off")

        }
        if($scope.shiftDescription == "online"){ $scope.shiftDescription ="offline";}else{
            $scope.shiftDescription = "online"
        }
    }
    $scope.addBalance=function(){
        $scope.cashBalance = $scope.cashBalance + 100;
    }
    $scope.subBalance=function(){
        $scope.cashBalance = $scope.cashBalance - 100;
    }
    $scope.deliveryStatusChange=function(status){
        var currentButton = status.target;
        var otherButton;
        var currentColorClass = currentButton.getAttribute("class");
        if(currentButton.nextElementSibling !== null)
        {
            otherButton = currentButton.nextElementSibling;   
        }else{
            otherButton = currentButton.previousElementSibling;
        }     

        if("on" == currentColorClass){
            currentButton.setAttribute("class","off")
            otherButton.setAttribute("class","on")
        }else if("off" == currentColorClass){
            currentButton.setAttribute("class","on")
            otherButton.setAttribute("class","off")

        }
        if($scope.deliveryStatus == "on"){ $scope.deliveryStatus ="off"; $scope.deliveryMethod =false; }else{
            $scope.deliveryStatus = "on"; $scope.deliveryMethod =true;
        }

    }
    $scope.switchDeliveryMethod = function(methodEvent){
        var previousMethod = document.getElementsByClassName("active")[0];
        previousMethod.removeAttribute("class");
        var currentMethod = methodEvent.currentTarget;
        currentMethod.setAttribute("class","active");
        $scope.activeDeliveryMethod = currentMethod.innerText;
    }

});