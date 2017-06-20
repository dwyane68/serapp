Template.Users.onCreated(function(){

    this.autorun(()=>{
   this.subscribe('allUsers');
    });
});
Template.Users.helpers({
    users:function(){
        return  Meteor.users.find({});
    },
    userEmail:function(){
        return this.emails[0].address;
    },
    Role:function(){
       return Roles.userIsInRole(this._id,'admin')?'admin':'normal-user';
    },
    isAdmin:function(){
      return Roles.userIsInRole(this._id,'admin')?'admin':'';
    }
});

Template.Users.events({
    'click .toggle-admin':function(){
     Meteor.call('toggleAdmin',this._id);
    }
})