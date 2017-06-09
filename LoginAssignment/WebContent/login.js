/**
 * 
 */

function onTabEvent(event , tabContentId)
{
	
var tabContent , tabLinks;
	//first remove active style from all tabs
tabLinks = document.getElementsByClassName("tab-link");
for(var i=0 ; i<tabLinks.length ; i++)
	{
	tabLinks[i].className=tabLinks[i].className.replace("active" , "");
	}
	
// hide all the contents initially;
tabContent = document.getElementsByClassName("tab-content");
for(var i=0 ; i<tabContent.length ; i++)
{
	tabContent[i].style.display = "none";
}
	
// display the selected tabs content 
var currentContent = document.getElementById(tabContentId);
currentContent.style.display = "";
//currentContent.style.removeProperty( 'display' );
//document.getElementId("tabContentId").style.display = "";

// set the clicked tab to active;
event.currentTarget.className += " active";
}


var defaultTab = document.getElementById("logintab");
defaultTab.click();



function onSignIn(googleUser) {
	  var profile = googleUser.getBasicProfile();
	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	  console.log('Name: ' + profile.getName());
	  console.log('Image URL: ' + profile.getImageUrl());
	  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	  
	  
	  var flag = gapi.auth2.getAuthInstance().isSignedIn.get();
	  
	  if(flag)
	  window.location="http://localhost:8080/LoginAssignment/home.html";
	  else window.location="http://localhost:8080/LoginAssignment/";
		  
	}



function onSignInFailure(googleUser)
{
	 console.log('Sign-in error'+ authResult['error']);
	}