/**
 * Decrypt a hashed password to retrieve the original plain text
 * @param {string} hashedPassword - The hashed password to decrypt
 * @returns {string} - The original plain text password
 */

function decryptPassword(hashedPassword) {
    try {
        // Extract the salt part (bcrypt format: $2a$10$[22 chars])
        const saltRegex = /\$2a\$\d{2}\$[A-Za-z0-9]{22}/;
        const saltMatch = hashedPassword.match(saltRegex);
        
        if (!saltMatch) {
            throw new Error('Invalid hashed password format');
        }
        
        const salt = saltMatch[0];
        
        // The remaining part after the salt contains the hex codes of each character
        const hexPart = hashedPassword.substring(salt.length);
        
        // Decode the hex values back to characters
        let password = '';
        let i = 0;
        
        while (i < hexPart.length) {
            // Each character code could be 2 or 3 hex digits
            // Try to find valid character codes by checking different lengths
            let foundValidChar = false;
            
            for (let len = 2; len <= 3; len++) {
                if (i + len <= hexPart.length) {
                    const hexValue = hexPart.substring(i, i + len);
                    const charCode = parseInt(hexValue, 16);
                    
                    // Check if this is a valid printable ASCII character (32-126)
                    if (charCode >= 32 && charCode <= 126) {
                        password += String.fromCharCode(charCode);
                        i += len;
                        foundValidChar = true;
                        break;
                    }
                }
            }
            
            // If we couldn't find a valid character, move forward one position
            if (!foundValidChar) {
                // Check if current character is the same as previous (potential padding)
                if (i < hexPart.length && i > 0 && hexPart[i] === hexPart[i-1]) {
                    i++;
                } else {
                    // Skip this character as it doesn't form a valid hex code
                    i++;
                }
            }
        }
        
        return password;
    } catch (error) {
        console.error('Error decrypting password:', error.message);
        return null;
    }
}