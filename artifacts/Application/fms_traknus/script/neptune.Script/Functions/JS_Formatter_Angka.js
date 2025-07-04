/**
 * Fungsi untuk memformat angka dengan titik sebagai pemisah ribuan
 * Contoh: 10000 → "10.000"
 * @param {number|string} num - Angka yang akan diformat
 * @return {string} Angka yang sudah diformat dengan pemisah ribuan
 */
function formatAngkaDenganTitik(num) {
  // Ambil nilai input dan hapus semua karakter non-digit
  let str = num.toString().replace(/[^\d]/g, '');
  const number = parseFloat(str);
  
  if (isNaN(number)) return '';
  
  // Format dengan titik pemisah ribuan
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Fungsi untuk menghilangkan pemisah ribuan
 * Contoh: "10.000" → 10000
 * @param {string} str - String angka dengan pemisah ribuan
 * @return {number} Angka tanpa pemisah ribuan
 */
function hapusFormatTitik(str) {
  // Hapus semua titik dan konversi ke number
  const num = parseFloat(str.replace(/[^\d]/g, ''));
  
  return isNaN(num) ? 0 : num;
}