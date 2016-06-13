app.service('loginService', function () {
    
     
	this.getUsers = function () {
        return myusers;
    };

	this.submit = function(username, password)
	 {

      var user = username;
      var pass = password;

      myusers.push({
        username: user,
        password: pass
      });
    };

 
   var myusers = [
         {
           username: 'user1',
           password: '12323'
         },
		 {
           username: 'user2',
           password: '12323'
        }
    ];

});