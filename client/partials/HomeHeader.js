Template.HomeHeader.events({
    'click .login-toggle':()=> {
        Modal.show('LoginModal');
 },
 'click .logout':()=> {
     AccountsTemplates.logout();
 }

});