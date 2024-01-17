import moment from 'moment';

import Cookies from 'js-cookie';


var UserProfile = (function() {
    let email = "";
  
    var getEmail = function() {
      // if(checkTimeout())
      //   {
      //     if (typeof window !== 'undefined') {
      //     email = localStorage.getItem("email") 
      //   }
      //     return  email;
      // } else {
      //   return false
      // } 
      let userData = Cookies.get('auth')
      // console.log(userData)
      if(!userData) {
        return false
      } else {
        return JSON.parse(userData).email
      }
      
    };
  
    var setEmail = function(email) {
      // if (typeof window !== 'undefined') {
      // localStorage.setItem("email",email)
      // }
      // setTimeout()
      const userData = {
        email
      };
      
      const expirationTime = new Date(new Date().getTime() + 360000);
      Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });      
      // Also set this in cookie/localStorage
    };

    // var setTimeout = function() {

    //   const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
    //   if (typeof window !== 'undefined') {
    //   localStorage.setItem("timeout", timestamp);
    //   }
      
    // }

//     var checkTimeout = function() {
      
//       let timestamp = moment();
//       let savedtimestamp =  moment();
//       if (typeof window !== 'undefined') {
//         savedtimestamp = moment(localStorage.getItem("timeout"), 'MMMM Do YYYY, h:mm:ss a');
//       }
      
//       // console.log('stored value '+ localStorage.getItem("timeout"))
//       // console.log("timestamp " +timestamp.format('MMMM Do YYYY, h:mm:ss a'))
//       // console.log("savedtimestamp " +savedtimestamp.format('MMMM Do YYYY, h:mm:ss a'))

//       // var now = moment(timestamp);
//       // var end = moment(savedtimestamp);
//       // interval = end.diff(now, 'minutes');

//       // var now = moment('11:08:30',"H:mm:ss");
//       // var prev = moment('11:07:30', "H:mm:ss");
//       // console.log(timestamp.diff(savedtimestamp, 'minutes'))
//       // console.log(dateDifference(timestamp, savedtimestamp))
//       if (timestamp.diff(savedtimestamp, 'minutes')>30) {
//         return false
//       } else {
//         return true
//       }

//     }



//  function dateDifference(startDate, endDate){
//         return moment(startDate).diff(moment(endDate),'minutes');
//     }
    
  
    return {
      getEmail: getEmail,
      setEmail: setEmail,
      
    }
  
  })();
  
  export default UserProfile;