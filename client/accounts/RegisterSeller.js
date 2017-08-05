Template.Registerseller.events({
    'submit form':function(event){
      event.preventDefault();
   
       var website =event.target.website.value;
         var store =event.target.store.value;

        if(!Meteor.userId()){
                 var email =event.target.email.value;
        var password =event.target.password.value;
        var name =event.target.name.value;
     Meteor.call('createSeller',email,password,name,website,store);
       Meteor.loginWithPassword(email, password);
        }
        else{

     Meteor.call('updateSeller',website,store);


        }

       FlowRouter.go('/');
        console.log("Form submitted.");

    }
});