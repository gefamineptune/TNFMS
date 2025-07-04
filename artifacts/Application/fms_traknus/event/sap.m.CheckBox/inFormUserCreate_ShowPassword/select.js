// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// selected - boolean
// 

// Get the selected state from the event parameter
const selected = oEvent.getParameter("selected");

// Toggle password visibility based on checkbox state
if (selected === true) {
    inFormUserCreateuser_password.setType("Text");
} else {
    inFormUserCreateuser_password.setType("Password");
}