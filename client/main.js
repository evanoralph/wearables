// Client entry point, imports all client code

import 'flexboxgrid';
import '/imports/startup/client';
import '/imports/startup/both';

Meteor.startup(function() {
    if (Meteor.isCordova) {
        if (window.StatusBar) {
            // needed to fix Xcode 9 / iOS 11 issue with blank space at bottom of webview
            // https://github.com/meteor/meteor/issues/9041
            StatusBar.overlaysWebView(false);
            StatusBar.overlaysWebView(true);
        }
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