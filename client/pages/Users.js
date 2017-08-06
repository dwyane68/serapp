Template.Users.onCreated(function(){

    this.autorun(()=>{
   this.subscribe('allUsers');
    });
});

Template.Users.events({
    
	"click .adm": function(){
    showadmins.set(true);
	},
	"click .us": function(){
    showuadmins.set(false);
	}
})