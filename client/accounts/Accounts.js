var myLogoutFunc = function() {
    FlowRouter.go('/admin/login');
}

AccountsTemplates.configure({
    termsUrl:'terms-of-use',
    privacyUrl:'privacy',
    onLogoutHook:myLogoutFunc,

});