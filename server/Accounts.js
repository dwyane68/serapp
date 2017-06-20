
var postSignUp = function(userId) {
   Roles.addUsersToRoles(userId,['normal-user']);
}
AccountsTemplates.configure({
    
    postSignUpHook:postSignUp

});