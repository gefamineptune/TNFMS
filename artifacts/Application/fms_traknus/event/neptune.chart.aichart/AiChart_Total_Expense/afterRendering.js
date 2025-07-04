Highcharts.chart(this.getId(), {
    chart: {
        type: 'column',
        zooming: {
            mouseWheel: {
                enabled: false // Disables mouse wheel zooming
            }
        }
    },
    title: {
        text: null,
        // text: 'Expense Transaction Fleet Car',
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rupiah',
            // align: 'high'
        },
        labels: {
            formatter: function() {
                return formatAngkaDenganTitik(this.value); // Untuk skala ribuan jika diperlukan, atau hapus jika tidak
                // return this.value / 1000 + 'K'; // Untuk skala ribuan jika diperlukan, atau hapus jika tidak
            }
        },
        tickInterval: 100000,
        max: 1000000 // Menyesuaikan batas maksimal Y-axis
    },
    tooltip: {
        shared: true,
        formatter: function() {
            let s = '<b>' + this.x + '</b>';
            let total = 0;
            this.points.forEach(function(point) {
                s += '<br/>' + point.series.name + ': ' + Highcharts.numberFormat(point.y, 0);
                total += point.y;
            });
            s += '<br/>Total: ' + Highcharts.numberFormat(total, 0);
            // if (this.x === 'Apr') { // Menambahkan tooltip khusus untuk April seperti di gambar
            //     s += '<br/>Total Distance: 123 Km';
            // }
            return s;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false // Data labels di kolom tidak ditampilkan di gambar
            },
        },
    },
    series: [{
        name: 'Operational',
        data: [340000, 340000, 420000, 300000, 680000, 520000], // Perkiraan data
        color: '#6CB9AD', // Warna hijau kebiruan
    }, {
        name: 'Maintenance',
        data: [350000, 80000, 70000, 100000, 150000, 100000], // Perkiraan data
        color: '#324DDD', // Warna biru
    }, {
        name: 'Fixed Cost',
        data: [110000, 30000, 40000, 50000, 280000, 50000], // Perkiraan data
        color: '#fdbd6f', // Warna oranye kekuningan
    }, {
        name: 'Owned Risk',
        data: [0, 0, 0, 0, 0, 0], // Tidak terlihat di grafik
        color: '#ff69b4', // Warna pink
    }, {
        type: 'line',
        name: 'Total Expense', // Representasi garis merah dengan titik
        data: [
            { y: 550000, marker: { enabled: true, fillColor: 'white', lineColor: '#ff0000', lineWidth: 2, radius: 5 } }, // Jan
            { y: 390000, marker: { enabled: true, fillColor: 'white', lineColor: '#ff0000', lineWidth: 2, radius: 5 } }, // Feb
            { y: 470000, marker: { enabled: true, fillColor: 'white', lineColor: '#ff0000', lineWidth: 2, radius: 5 } }, // Mar
            { y: 370000, marker: { enabled: true, fillColor: 'white', lineColor: '#ff0000', lineWidth: 2, radius: 5 } }, // Apr
            { y: 790000, marker: { enabled: true, fillColor: 'white', lineColor: '#ff0000', lineWidth: 2, radius: 5 } }, // Mei
            { y: 570000, marker: { enabled: true, fillColor: 'white', lineColor: '#ff0000', lineWidth: 2, radius: 5 } }  // Jun
        ],
        color: '#FF696D', // Warna garis merah
        marker: {
            enabled: true,
            symbol: 'circle',
            radius: 5,
            fillColor: 'white',
            lineColor: '#ff0000',
            lineWidth: 2
        },
        dashStyle: 'Solid',
        zIndex: 5 // Pastikan garis berada di atas kolom
    }],
    accessibility: {
        enabled: false // Disable accessibility features to remove the warning
    },
});