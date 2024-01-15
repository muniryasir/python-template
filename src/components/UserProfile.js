import moment from 'moment';

var UserProfile = (function() {
    let email = "";
  
    var getEmail = function() {
      if(checkTimeout())
        {
          email = window.localStorage.getItem("email")
          return  email;
      } else {
        return false
      } 
    };
  
    var setEmail = function(email) {

      window.localStorage.setItem("email",email)
      setTimeout()      
      // Also set this in cookie/localStorage
    };

    var setTimeout = function() {

      const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
      window.clearlocalStorage.setItem("timeout", timestamp);

      
    }

    var checkTimeout = function() {
      
      let timestamp = moment();
      let savedtimestamp = moment(localStorage.getItem("timeout"), 'MMMM Do YYYY, h:mm:ss a');
      // console.log('stored value '+ localStorage.getItem("timeout"))
      // console.log("timestamp " +timestamp.format('MMMM Do YYYY, h:mm:ss a'))
      // console.log("savedtimestamp " +savedtimestamp.format('MMMM Do YYYY, h:mm:ss a'))

      // var now = moment(timestamp);
      // var end = moment(savedtimestamp);
      // interval = end.diff(now, 'minutes');

      // var now = moment('11:08:30',"H:mm:ss");
      // var prev = moment('11:07:30', "H:mm:ss");
      // console.log(timestamp.diff(savedtimestamp, 'minutes'))
      // console.log(dateDifference(timestamp, savedtimestamp))
      if (timestamp.diff(savedtimestamp, 'minutes')>30) {
        return false
      } else {
        return true
      }

    }



 function dateDifference(startDate, endDate){
        return moment(startDate).diff(moment(endDate),'minutes');
    }
    
  
    return {
      getEmail: getEmail,
      setEmail: setEmail,
      setTimeout: setTimeout
    }
  
  })();
  
  export default UserProfile;