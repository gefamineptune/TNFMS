
// Function to check if chart is rendered and update it
async function updateChartWhenReady() {
    let role_data = await apiGET_RoleRelation()
    let role_cms = role_data.filter(obj => obj.fms_access_access_label.includes("CMS"));
    let role_mobile = role_data.filter(obj => obj.fms_access_access_label.includes("Mobile"));

    if (Highchart && Highchart1 && Highchart2) {
        // Chart is ready, update it
        Highchart.update({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Role Access Distribution'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    innerSize: '40%',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f}%'
                    }
                }
            },
            series: [{
                name: 'Role Access Distribution',
                colorByPoint: true,
                data: [
                    {
                        name: 'CMS',
                        y: (role_cms.length/role_data.length) * 100,
                    },
                    {
                        name: 'Mobile',
                        y: (role_mobile.length/role_data.length) * 100,
                    },
                ]
            }],
            accessibility: {
                enabled: false // Disable accessibility features to remove the warning
            },
        });
        Highchart1.update({
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
        Highchart2.update({
            chart: {
                type: 'column'
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
                },
                {
                    name: 'Produk A',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                },
                {
                    name: 'Produk B',
                    data: [50.0, 65.0, 80.0, 120.0, 150.0, 170.0, 160.0, 180.0, 200.0, 220.0, 190.0, 170.0]
                },
            ],
            accessibility: {
                enabled: false // Disable accessibility features to remove the warning
            },
        });

        
        // Highchart1.update({
        //     chart: {
        //         type: 'pie'
        //     },
        //     title: {
        //         text: 'Distribusi Penjualan'
        //     },
        //     tooltip: {
        //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        //     },
        //     plotOptions: {
        //         pie: {
        //             allowPointSelect: true,
        //             cursor: 'pointer',
        //             dataLabels: {
        //                 enabled: true,
        //                 format: '<b>{point.name}</b>: {point.percentage:.1f}%'
        //             }
        //         }
        //     },
        //     series: [{
        //         name: 'Penjualan',
        //         colorByPoint: true,
        //         data: [{
        //             name: 'Produk A',
        //             y: 61.41,
        //             sliced: true,
        //             selected: true
        //         }, {
        //             name: 'Produk B',
        //             y: 11.84
        //         }, {
        //             name: 'Produk C',
        //             y: 10.85
        //         }, {
        //             name: 'Lainnya',
        //             y: 15.9
        //         }]
        //     }]
        // });
        
        // Show success message
        // sap.m.MessageToast.show(
        //     "Chart successfully rendered",
        //     {
        //         my: sap.ui.core.Popup.Dock.CenterBottom,
        //         at: sap.ui.core.Popup.Dock.CenterBottom
        //     }
        // );
    } else {
        // Chart not ready yet, try again after a short delay
        setTimeout(updateChartWhenReady, 500);
    }
}

// Start the check process
updateChartWhenReady();
