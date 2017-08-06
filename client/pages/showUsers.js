Template.showUsers.onCreated(function(){
	Session.set('showadmins',true);
    this.autorun(()=>{
   this.subscribe('allUsers');
    });
	
});
Template.showUsers.helpers({
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
    },
	showadmins:function(){
        return Session.get('showadmins')
    },
	showusers:function(){
        return Session.get('showusers')
    },
	showsellers:function(){
        return Session.get('showsellers')
    },
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
    },
	'click #adm':function(){
		Session.set('showusers',false);
		Session.set('showsellers',false);
	Session.set('showadmins',true);
    },
     'click #sel':function(){
		 
		 Session.set('showadmins',false);
    Session.set('showusers',false);
	Session.set('showsellers',true);
    },
	'click #us':function(){
		 Session.set('showsellers',false);
		 Session.set('showadmins',false);
    Session.set('showusers',true);
    }
})