// try {
//   if(inFormLoginemail.getValue() === ""){
//     inFormLoginemail.setValueState("Error");
//     inFormLoginemail.setValueStateText("Please provide your email");
//     sap.m.MessageToast.show("Please provide your email");
//     return;
//   } else {
//     inFormLoginemail.setValueState("None");
//   }
//   if(inFormLoginpassword.getValue() === ""){
//     inFormLoginpassword.setValueState("Error");
//     inFormLoginpassword.setValueStateText("Please provide your password");
//     sap.m.MessageToast.show("Please provide your password");
//     return;
//   } else {
//     inFormLoginpassword.setValueState("None");
//   }

//   // Set up options for the API call with email filter
//   var options = {
//     parameters: {
//       where: JSON.stringify({"email": inFormLoginemail.getValue()})
//     }
//   };

//   // Call the GET_User API
//   const getUser = await apiGET_User(options);
  
//   // Log the getUser data to console
//   // console.log("User data:", getUser[0]);

//   // Set Session Storage
//   sessionStorage.setItem("name", getUser[0].name)
//   sessionStorage.setItem("role", getUser[0].role)

//   User_Name.setText(sessionStorage.getItem("name"))
//   User_Role.setText(sessionStorage.getItem("role"))

//   sap.m.MessageToast.show("Login Success");
//   App.to(ToolPage);
//   NavContainer.to(PageCars);
//   NavigationList.setSelectedItem(NavCars);

// } catch (error) {
//   // Handle any errors that occur during the API call
//   console.error("Error fetching user data:", error);
//   sap.m.MessageToast.show("Error: " + (error.message || "Failed to fetch user data"));
// }

// hashPassword(inFormLoginpassword);
