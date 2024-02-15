

// Generate a unique order ID
exports.generateOrderID = () => {
        // Get the current timestamp in milliseconds
        const timestamp = Date.now();
        
        // Generate a random number between 1000 and 9999
        const random = Math.floor(Math.random() * 9000) + 1000;
        
        // Combine the timestamp and random number to create the unique ID
        const orderID = `${timestamp}${random}`;
        
        return parseInt(orderID);
};

exports.generateTrackingId = (prefix, length) => {
    const randomDigits = Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
    return `${prefix}${randomDigits}`;
}
      
      // Generate a unique order ID


 