import { $ } from 'meteor/jquery';

Template.Dashboard.helpers({
    admin:function(){
        return Roles.userIsInRole(Meteor.userId(),'admin');
    }
});