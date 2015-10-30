 //<script>
  $(function () { 
    $('#highchart_chart').highcharts('StockChart',{
        chart: {
			type: 'line',
            renderTo: 'highchart_chart'
        },
        title: {
            text: 'BioMetrics and Events'
        },
        xAxis: {
			type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Numeric Series'
            }
        },
//		scrollbar: {
//			enabled: true
//		},
		legend: {
			enabled: true
		},
//		rangeSelector: {
//            selected: 1
//        },
		plotOptions: {
			line: {
				marker: {
					enabled: true,
					radius: 5
				}
			}
		},
		navigator: {
			enabled: true,
			baseSeries: 0
		},
		tooltip: {
		    crosshairs: true,
			shared: false,
			formatter: function() {
				var line1 = Highcharts.dateFormat('%A, %b %e, %H:%M', new Date(this.point.x));
				if (this.point.y > 0) {
					line1 += ('<br>Value: ' + this.point.y );
				} else {
					line1 += (' <br>' + this.series.name);
				}
				
				if(typeof this.point.myData !== "undefined") {
					return  line1  + '<b>:' + this.point.myData + '</b>';
				}else {
					return line1;				
				}
			}
		},
        series: [{
            name: 'BP Systolic',
			color: 'red',
            data: [
			[Date.UTC(2015, 0, 1, 09, 00),120]
			,[Date.UTC(2015, 0, 1, 10, 30),150]
			,[Date.UTC(2015, 0, 2, 10, 30),140]
			,[Date.UTC(2015, 0, 3, 10, 30),130]
			]
        },{
            name: 'BP Diastolic',
			color: 'blue',
            data: [
			[Date.UTC(2015, 0, 1, 09, 00),80]
			,[Date.UTC(2015, 0, 1, 10, 30),90]
			,[Date.UTC(2015, 0, 2, 10, 30),70]
			,[Date.UTC(2015, 0, 3, 10, 30),60]
			]
		},{
            name: 'Gym Events',
			lineWidth: 0,
			color: 'grey',
			pointStart: Date.UTC(2015, 0, 1, 00, 00),
            data: [
			{  
//			 name: "worked out medium",
			 x: Date.UTC(2015, 0, 1, 10, 30) 
			 ,y: 0
			 ,myData: 'worked out medium'
			}
			,{ 
			 x: Date.UTC(2015, 0, 2, 10, 30)
			 , y: 0
			 ,myData: 'worked out hard with aerobics'
			 }
			 ,{ 
			 x: Date.UTC(2015, 0, 3, 10, 30)
			 , y: 0
			 ,myData: 'worked out light'
			 }
			]
		},{
            name: 'Golf Events',
			color: 'green',
			lineWidth: 0,
             data: [
			[Date.UTC(2015, 0, 1, 10, 00),0]
			,[Date.UTC(2015, 0, 2, 15, 30),0]
			,[Date.UTC(2015, 0, 4, 15, 30),0]
			,[Date.UTC(2015, 0, 5, 15, 30),0]
			]
		}
		]
	});
 
	var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'container'
    },

    xAxis: {
        type: 'datetime'
    },
    series: [{
        data: [
            [Date.UTC(2010, 0, 1), 29.9],
            [Date.UTC(2010, 0, 2), 71.5],
            [Date.UTC(2010, 0, 3), 106.4],
            [Date.UTC(2010, 0, 6), 129.2],
            [Date.UTC(2010, 0, 7), 144.0],
            [Date.UTC(2010, 0, 8), 176.0]
         ]
    }]

});

});
//</script>
  