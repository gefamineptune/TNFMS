let chartOptions = {
    chart: {
        type: "pie",
    },
    title: {
        text: "FSM Access Distribution",
    },
    series: [
        {
            name: "Access",
            colorByPoint: true,
            data: [
                {
                    name: "Mobile",
                    y: 1,
                },
                {
                    name: "CMS",
                    y: 3,
                },
            ],
        },
    ],
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
        },
    },
    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    credits: {
        enabled: false,
    },
};
Highcharts.chart(this.getId(), chartOptions);
