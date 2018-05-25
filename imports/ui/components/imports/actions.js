export default {
    loginWithLinkedin(){
        Meteor.loginWithLinkedin({
            loginStyle: "popup" ,
            requestPermissions: ['r_basicprofile'],
            clientId: "81xzymrc69mmsj",
            secret: "ZtD1UxBUnLGcgJbZ"
        }, function (err, res) {
            if (err) {
                alert("Error logging in with LinkedIn " + err);
                return;
            } else {
                console.log(res)
            }
        });
    },
}