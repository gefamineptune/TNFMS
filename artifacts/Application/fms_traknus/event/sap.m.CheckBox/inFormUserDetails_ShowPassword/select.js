// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// selected - boolean
// 

// Get the selected state from the event parameter
const selected = oEvent.getParameter("selected");

// Toggle password visibility based on checkbox state
if (selected === true) {
    inFormUserDetailsuser_password.setType("Text");
} else {
    inFormUserDetailsuser_password.setType("Password");
}