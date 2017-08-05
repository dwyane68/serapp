var myLogoutFunc = function() {
    FlowRouter.go('/');
}

AccountsTemplates.configure({
    termsUrl:'terms-of-use',
    privacyUrl:'privacy',
    onLogoutHook:myLogoutFunc,

});