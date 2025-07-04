Highcharts.chart(this.getId(), {
    chart: {
        type: 'line',
        zooming: {
            mouseWheel: {
                enabled: false // Disables mouse wheel zooming
            }
        }
    },
    title: {
        text: null,
        // text: 'Trip Overtime',
        // align: 'left', // Judul rata kiri seperti di gambar
        // style: {
        //     fontSize: '24px', // Ukuran font yang lebih besar
        //     fontWeight: 'bold' // Tebal
        // }
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        // labels: {
        //     style: {
        //         fontSize: '14px' // Ukuran font label X-axis
        //     }
        // }
    },
    yAxis: {
        title: {
            text: null // Tidak ada judul Y-axis
        },
        min: 0, // Mulai dari 0
        tickInterval: 5, // Interval 5 (0, 5, 10, 15, ...)
        // labels: {
        //     style: {
        //         fontSize: '14px' // Ukuran font label Y-axis
        //     }
        // },
        gridLineWidth: 0 // Menghilangkan garis grid pada Y-axis
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false // Tidak ada data labels di gambar
            },
            enableMouseTracking: true, // Memungkinkan tooltip saat hover
            marker: {
                enabled: true, // Tampilkan marker
                symbol: 'circle', // Bentuk lingkaran
                radius: 5, // Ukuran marker
                fillColor: 'white', // Warna isi marker putih
                lineColor: '#1a376a', // Warna garis tepi marker (biru tua)
                lineWidth: 2 // Ketebalan garis tepi marker
            }
        }
    },
    series: [{
        name: 'Trips', // Nama seri, bisa disesuaikan
        data: [15, 20, 11, 25, 15, 20], // Data perkiraan berdasarkan gambar
        color: '#1a376a' // Warna garis biru tua
    }],
    legend: {
        enabled: false // Tidak ada legend di gambar
    },
    credits: {
        enabled: false // Menghilangkan Highcharts.com credit
    },
    accessibility: {
        enabled: false // Disable accessibility features to remove the warning
    },
});