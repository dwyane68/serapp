Meteor.methods({
    toggleAdmin(id){
           if(Roles.userIsInRole(id,'admin')){
            Roles.removeUsersFromRoles(id,'admin')
        }
        else{
            Roles.addUsersToRoles(id,'admin')
        } 
    },
    createSeller(email,password,name,website,store){
      var userId = Accounts.createUser({
            email:email,
            password:password,
          
        });
     Meteor.users.update(userId, {$set: {"profile.website": website,"profile.store":store,"profile.name":name}});

    Roles.addUsersToRoles(userId,['seller']);

    },
    updateSeller(website,store){

    Meteor.users.update(Meteor.userId(), {$set: {"profile.website": website,"profile.store":store}});

    Roles.addUsersToRoles(Meteor.userId(),['seller']);

    },
	removeUser(id){
		if(Roles.userIsInRole(id,'normal-user')){
            Meteor.users.remove(id)
		}
	},
	removeSeller(id){
		if(Roles.userIsInRole(id,'seller')){
            Meteor.users.remove(id)
		}
	}
});