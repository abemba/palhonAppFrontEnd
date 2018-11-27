<?php

class LocationManager{
    //searches for record belonging to $id and returns the record
    //returns: json String on success or boolean false on failure
    public getLocation($id){}
    //stores the given locatio data into the database
    //returns: void
    public setCurrentLocation($x,$y){}
    //returns true if the given location point is different from the most recently stored location
    //note: defferent has a defined meaning.
    private diffLocations($x,$y){} 

}

class StatusManager{
    //updates the database the client's stated availability status. SET it to true(1) or false(0) 
    //parameters: boolean
    //returns: void
    public availableNow($boolean){}
    public updateLastActive($timeInSeconds){}
    public availableForDelivery($boolean){}

}

class AvailableCashPool{

}

class TransactionManager{

}

class DeliveryManager{

}

class DeliveryDispatcher{

}

class PayrollManager{

}

class PayrollAccounts{

}

class ContactManager{

}

class AgentManager{

}

class AgentCredentials{

}

class AgentAuthManager{

}