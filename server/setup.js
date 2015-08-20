//  config

Meteor.startup(function () { // get correct github auth key

  if(Codata.find({}).count() === 0){ // if codata empty
    var codata = JSON.parse(Assets.getText('codata.json'));
    codata.constant.map(function(c){ // codata const

      // function to be done to every element of array
      Codata.insert(c); // insert to into mongo

    });
  }

});
