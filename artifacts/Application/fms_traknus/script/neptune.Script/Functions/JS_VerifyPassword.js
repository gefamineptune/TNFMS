/**
 * Password verification API
 * Handles secure password verification and hashing using bcrypt algorithm
 */
async function verifyPassword(plainPassword, hashedPassword) {
    try {
        // For verification, extract salt from stored hash
        const salt = extractSaltFromHash(hashedPassword);
        
        // Hash the input password with the same salt
        const computedHash = hashPassword(plainPassword, salt);
        
        // Perform constant-time comparison to prevent timing attacks
        const isValid = secureCompare(computedHash, hashedPassword);
        
        return {
            isValid: isValid,
            hash: computedHash
        };
    } catch (error) {
        console.error("Password verification error:", error);
        return {
            isValid: false,
            hash: null,
            error: error.message
        };
    }
}

/**
 * Hash a password with the given salt
 * @param {string} password - Plain text password
 * @param {string} salt - Salt for hashing
 * @returns {string} - Hashed password
 */
function hashPassword(password, salt) {
    // In a real implementation, this would use bcrypt
    // For Neptune DXP, we need to call a server-side API
    // This is a simplified simulation for demonstration
    
    // Create a hash representation (this is NOT secure, just for demo)
    let hash = salt;
    
    // In a real implementation, you would use a proper hashing function
    // and not this simplified version
    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i);
        hash += charCode.toString(16);
    }
    
    return hash;
}

/**
 * Extract salt from a bcrypt hash
 * @param {string} hash - Full bcrypt hash
 * @returns {string} - Extracted salt
 */
function extractSaltFromHash(hash) {
    // bcrypt salt is the first 29 characters of the hash
    return hash.substring(0, 29);
}

/**
 * Perform constant-time string comparison to prevent timing attacks
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {boolean} - True if strings match
 */
function secureCompare(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        // XOR comparison ensures constant-time operation
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    
    return result === 0;
}