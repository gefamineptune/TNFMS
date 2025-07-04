async function carStatistic(){
    if (Highchart3){
        Highchart3.update({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Tren Penjualan Bulanan'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Jumlah Penjualan'
                }
            },
            series: [
                {
                    name: 'Produk A',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                },
                {
                    name: 'Produk B',
                    data: [50.0, 65.0, 80.0, 120.0, 150.0, 170.0, 160.0, 180.0, 200.0, 220.0, 190.0, 170.0]
                }
            ],
            accessibility: {
                enabled: false // Disable accessibility features to remove the warning
            },
        });
    } else {
        // Chart not ready yet, try again after a short delay
        setTimeout(carStatistic, 500);
    }
}

carStatistic();


