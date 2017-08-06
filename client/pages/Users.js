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
        if(Roles.userIsInRole(this._id,'admin')){
       return 'admin';
        }
        else if(Roles.userIsInRole(this._id,'seller'))
        {
            return 'seller';
        }
        else{
            return 'normal-user'
        }
    },
    isAdmin:function(){
      return Roles.userIsInRole(this._id,'admin')?'admin':'';
    },
	isUser:function(){
      return Roles.userIsInRole(this._id,'normal-user')?'normal-user':'';
    },
	isSeller:function(){
      return Roles.userIsInRole(this._id,'seller')?'seller':'';
    }
});

Template.Users.events({
    'click .toggle-admin':function(){
     Meteor.call('toggleAdmin',this._id);
    },
	'click .remove-user':function(){
     Meteor.call('removeUser',this._id);
    },
	'click .remove-seller':function(){
     Meteor.call('removeSeller',this._id);
    }
})