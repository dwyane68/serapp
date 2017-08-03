Template.Header.events({
    'click .login-toggle':()=> {
        FlowRouter.go('/admin/login');
 },
 'click .logout':()=> {
     AccountsTemplates.logout();
 }

});