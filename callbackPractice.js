/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];



first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});

function first(names, callback) {
  return callback(names[0]);
}



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

function last(names, callback) {
  return callback(names[names.length - 1]);
}



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})


function multiply(num1, num2, callback) {
  return callback(num1 * num2);
}


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


function contains(array, result, callback) {
  for(var i = 0; i < array.length; i++){
    if (array[i] === result) {
      return callback(true);
    }else return callback(false);
  }
}


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// function uniq(array, callback) {
//   var uniqArr = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 1; j < array.length - 1; j++){
//       if (array[i] === array[j]){
//         array.splice(j, 1);
//       }
//     }
//     uniqArr.push(array[i]);
//   }
//   return callback(uniqArr);
// }

function uniq(arr, cb) {
  var out = [],
      obj = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  for (key in obj) {
    out.push(key);
  }
  return cb(out);
}

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

function each(arr,cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  }
}



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function getUserById(arr, value, cb) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].id === value) {
      // var user = {
      //   email: arr[i].email,
      //   address: arr[i].address,
      //   name: arr[i].name
      // }
      //return cb(user);
      return cb(arr[i]);
    }
  }
}

 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
