try {
  if(inFormLoginid.getValue() === ""){
    inFormLoginid.setValueState("Error");
    inFormLoginid.setValueStateText("Please provide your id");
    sap.m.MessageToast.show("Please provide your id");
    return;
  } else {
    inFormLoginid.setValueState("None");
  }
  if(inFormLoginpassword.getValue() === ""){
    inFormLoginpassword.setValueState("Error");
    inFormLoginpassword.setValueStateText("Please provide your password");
    sap.m.MessageToast.show("Please provide your password");
    return;
  } else {
    inFormLoginpassword.setValueState("None");
  }

  // console.log("Input ID: " + inFormLoginid.getValue())
  // console.log("Input Password: " + inFormLoginpassword.getValue())

  // Login function
  loginUser(inFormLoginid.getValue(), inFormLoginpassword.getValue())

} catch (error) {
  // Handle any errors that occur during the API call
  console.error("Error fetching user data:", error);
  sap.m.MessageToast.show("Error: " + (error.message || "Failed to fetch user data"));
}
