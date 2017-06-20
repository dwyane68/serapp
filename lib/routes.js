FlowRouter.route('/',{
    name: 'home',
    action(){
        BlazeLayout.render('HomeLayout',{main:"Home"});
    }
});
FlowRouter.route('/dashboard',{
    name: 'dashboard',
    action(){
        BlazeLayout.render('AppLayout',{main:"Dashboard"});
    }
});


var adminRoutes= FlowRouter.group({
    prefix :'/admin',
    name:'admin'

})
adminRoutes.route('/users',{
     name: 'users',
    action(){
        BlazeLayout.render('AppLayout',{main:"Users"});
    }


})