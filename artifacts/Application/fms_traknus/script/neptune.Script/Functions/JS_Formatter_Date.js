var Formatter = {
    formatRupiah(sValue) {
        if (!sValue) {
            return "";
        }
        // Pastikan kita bekerja dengan tipe data number
        const numberValue = Number(sValue);
        if (isNaN(numberValue)) {
            return sValue; // Jika bukan angka, kembalikan apa adanya
        }

        // Gunakan toLocaleString untuk formatting yang sesuai dengan lokal Indonesia
        // Ini cara modern dan paling direkomendasikan di JavaScript
        return numberValue.toLocaleString('id-ID');
    }
};

// Function to format Unix timestamp (milliseconds) to readable date format
function formatTimestamp(timestamp) {
    // Check if timestamp is valid
    if (!timestamp) {
        return "N/A";
    }
    
    // Create a date object from the timestamp
    const date = new Date(parseInt(timestamp));
    
    // Format the date as DD/MM/YYYY HH:MM:SS
    // const day = date.getDate().toString().padStart(2, '0');
    // const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // const year = date.getFullYear();
    // const hours = date.getHours().toString().padStart(2, '0');
    // const minutes = date.getMinutes().toString().padStart(2, '0');
    // const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    // Format the date as DD MMMM YYYY HH:MM:SS
    // const day = date.getDate().toString().padStart(2, '0');
    // const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const month = monthNames[date.getMonth()];
    // const year = date.getFullYear();
    // const hours = date.getHours().toString().padStart(2, '0');
    // const minutes = date.getMinutes().toString().padStart(2, '0');
    // const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;

    // Format the date as DD MMMM YYYY hh:MM:SS AM/PM
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    // Convert 24-hour format to 12-hour format with AM/PM
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${day} ${month} ${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// const timestamp = 1749536965208;
// const formattedDate = formatTimestamp(timestamp);
// console.log("Formatted date:", formattedDate);


function formatAngkaDenganTitik(num) {
  let str = num.toString().replace(/\./g, '');
  const number = parseFloat(str);
  
  if (isNaN(number)) return '0';
  
  // Format manual dengan regex
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}