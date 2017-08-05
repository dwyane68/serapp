FlowRouter.route('/',{
    name: 'home',
    action(){
      
    
            BlazeLayout.render('HomeLayout',{main:"Home"});
    }
   });
   FlowRouter.route('/registerseller',{
    name: 'registerseller',
    action(){
      
    
            BlazeLayout.render('HomeLayout',{main:"Registerseller"});
    }
   });
FlowRouter.route('/dashboard',{
    name: 'dashboard',
    action(){
        
          Tracker.autorun(function() {
            if (!Meteor.userId()) {
             BlazeLayout.render('LoginLayout',{main:"Login"});
            }
             else if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('AppLayout',{main:"Dashboard"});
            }
            else{
                BlazeLayout.render('HomeLayout',{main:"Home"});
            }
        });
    }  
 
});


var adminRoutes= FlowRouter.group({
    prefix :'/admin',
    name:'admin'
 
 

});

adminRoutes.route('/users',{
     name: 'users',
    action(){
       
           Tracker.autorun(function() {
            if (!Meteor.userId()) {
             BlazeLayout.render('LoginLayout',{main:"Login"});
            } else if(Roles.userIsInRole(Meteor.userId(),'admin')) {
          BlazeLayout.render('AppLayout',{main:"Users"});
            }
            else{
                 BlazeLayout.render('HomeLayout',{main:"Home"});
            }
        });
    }


});
adminRoutes.route('/login',{
     name: 'login',
    action(){
          Tracker.autorun(function() {
            if (Meteor.userId()&&Roles.userIsInRole(Meteor.userId(),'admin')) {
             BlazeLayout.render('AppLayout',{main:"Dashboard"});
            }
            else if(Meteor.userId()&&!Roles.userIsInRole(Meteor.userId(),'admin')) {
              BlazeLayout.render('HomeLayout',{main:"Home"});
            }
             else {
          BlazeLayout.render('LoginLayout',{main:"Login"});
            }
        });
    }


});