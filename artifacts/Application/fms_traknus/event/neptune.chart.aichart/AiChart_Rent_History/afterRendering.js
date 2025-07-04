// Inisialisasi chart dengan callback untuk menambahkan teks
Highcharts.chart(this.getId(), {
    chart: {
        type: 'pie',
        height: 380,
        zooming: {
            mouseWheel: {
                enabled: false // Disables mouse wheel zooming
            }
        }
    },
    title: {
        text: null,
        // text: 'Rent History',
        // align: 'left',
        // style: {
        //     fontSize: '20px',
        //     fontWeight: 'bold',
        //     color: '#333333'
        // }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            innerSize: '70%',
            borderWidth: 0
        }
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Perjalanan Dinas',
            y: 28,
            color: '#3B82F6'
        }, {
            name: 'Work Order',
            y: 12,
            color: '#F59E0B'
        }, {
            name: 'Tugas Luar',
            y: 6,
            color: '#14B8A6'
        }, {
            name: 'Pribadi',
            y: 0,
            color: '#ea4335'
        }]
    }],
    accessibility: {
        enabled: false // Disable accessibility features to remove the warning
    },
}, function(chart) {
    // Tambahkan teks di tengah menggunakan renderer Highcharts
    const centerX = chart.plotLeft + chart.plotWidth / 2;
    const centerY = chart.plotTop + chart.plotHeight / 2;

    chart.renderer.text('Total', centerX, centerY - 10)
        .attr({
            align: 'center'
        })
        .css({
            fontSize: '14px',
            color: '#666666'
        })
        .add();

    chart.renderer.text('<b>46</b>', centerX, centerY + 30)
        .attr({
            align: 'center'
        })
        .css({
            fontSize: '38px',
            fontWeight: 'bold',
            color: '#333333',
        })
        .add();
});