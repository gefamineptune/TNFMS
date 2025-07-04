// async function loginUser(email, password) {
//     try {
//         // Set up options for the API call with email filter
//         var options = {
//             parameters: {
//                 where: JSON.stringify({"email": email})
//             }
//         };

//         // Call the GET_User API to retrieve user data
//         const userData = await apiGET_User(options);
        
//         // Check if user exists
//         if (!userData || userData.length === 0) {
//             sap.m.MessageToast.show("User not found");
//             return false;
//         }
        
//         const user = userData[0];
        
//         // Get the encrypted password from the user data
//         const storedHashedPassword = user.password;
        
//         // Compare the input password with the stored hash
//         // This typically uses a library function like bcrypt.compare
//         // For demonstration, we'll use a placeholder function
//         const isPasswordValid = await comparePasswords(password, storedHashedPassword);
        
//         if (isPasswordValid) {
//             // Password is correct, set session data
//             sessionStorage.setItem("name", user.name);
//             sessionStorage.setItem("role", user.role);

//             User_Name.setText(sessionStorage.getItem("name"));
//             User_Role.setText(sessionStorage.getItem("role"));

//             sap.m.MessageToast.show("Login Success");
//             App.to(ToolPage);
//             NavContainer.to(PageCars);
//             NavigationList.setSelectedItem(NavCars);
//             return true;
//         } else {
//             // Password is incorrect
//             sap.m.MessageToast.show("Invalid password");
//             return false;
//         }
//     } catch (error) {
//         sap.m.MessageToast.show("Login error: " + error.message);
//         console.error("Login error:", error);
//         return false;
//     }
// }

// Function to compare plain text password with hashed password
// This is a placeholder - in a real implementation, you would use
// a proper password comparison function from a library like bcrypt
// async function comparePasswords(plainPassword, hashedPassword) {
//     try {
//         // In a real implementation, you would use something like:
//         // return await bcrypt.compare(plainPassword, hashedPassword);
        
//         // For Neptune DXP, you might need to call a server-side API
//         // that handles the password comparison
//         var options = {
//             data: {
//                 plainPassword: plainPassword,
//                 hashedPassword: hashedPassword
//             }
//         };
        
//         // Call an API that handles password verification
//         const result = await apiVerifyPassword(options);
//         return result.isValid;
        
//     } catch (error) {
//         console.error("Password comparison error:", error);
//         return false;
//     }
// }