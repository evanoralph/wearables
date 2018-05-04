// Client entry point, imports all client code

import 'flexboxgrid';
import '/imports/startup/client';
import '/imports/startup/both';

Meteor.startup(function() {
    console.log("startup")
    if (Meteor.isCordova) {
        alert("isCordova")
        console.log("isCordova")
        document.addEventListener('deviceready', function() {
            notificationListener.listen(function(n){
                console.log("Received notification " + JSON.stringify(n) );
                alert("Received notification " + JSON.stringify(n) );
            }, function(e){
                console.log("Notification Error " + e);
                alert("Notification Error " + e);
            });
        })

    }
})