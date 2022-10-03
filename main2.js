var dataTemperature = [];
var dataHumidity = [];
var dataLight = [];

setInterval(
    function () 
    {
        var nhietDo = Math.floor(Math.random() * 100)
        var doAm = Math.floor(Math.random() * 100)
        var anhSang = Math.floor(Math.random() * 100)

        dataTemperature.push(nhietDo)
        if(dataTemperature.length == 20){
            dataTemperature.shift()
        }

        dataHumidity.push(doAm)
        if(dataHumidity.length == 20){
            dataHumidity.shift()
        }

        dataLight.push(anhSang)
        if(dataLight.length == 20){
            dataLight.shift()
        }

        document.getElementById("temperature").innerText = nhietDo
        document.getElementById("humidity").innerText = doAm
        document.getElementById("light").innerText = anhSang

        var temperature = document.getElementById("temperature");
        var valueTemper = Number(temperature.innerHTML);
        if(valueTemper > 37 ){
            temperature.style.backgroundImage =  'linear-gradient(to right, #8a2387, #e94057, #f27121)';
        }else if(valueTemper >= 11 && valueTemper <= 37){
            temperature.style.backgroundImage = 'linear-gradient(to right, #fdc830, #f37335)';
        }else{
            temperature.style.backgroundImage = 'linear-gradient(to right, #659999, #f4791f)';
        }

        var humidity = document.getElementById("humidity");
        var valueHumi = Number(humidity.innerHTML);
        if(valueHumi > 80 ){
            humidity.style.backgroundImage = 'linear-gradient(to right, #8a2387, #e94057, #f27121)';
        }else if(valueHumi >= 40 && valueHumi <= 80){
            humidity.style.backgroundImage = 'linear-gradient(to right, #fdc830, #f37335)';
        }else{
            humidity.style.backgroundImage = 'linear-gradient(to right, #659999, #f4791f)';
        }

        var light = document.getElementById("light");
        var valueLight = Number(light.innerHTML);
        if(valueLight > 80 ){
            light.style.backgroundImage = 'linear-gradient(to right, #8a2387, #e94057, #f27121)';
        }else if(valueLight >= 50 && valueLight <= 80){
            light.style.backgroundImage = 'linear-gradient(to right, #fdc830, #f37335)';
        }else{
            light.style.backgroundImage = 'linear-gradient(to right, #659999, #f4791f)';
        }
        
        

        Highcharts.chart('container', {
            chart: {
                height: 700,
            },
            title: {
                text: 'Bảng thời tiết'
            },
        
            yAxis: {
                title: {
                    text: 'Giá trị'
                }
            },
        
            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2020'
                },
                title: {
                    text: 'Năm'
                }
            },
        
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
        
            series: [{
                name: 'Tempeature',
                data: dataTemperature
            }, {
                name: 'Humidity',
                data: dataHumidity
            }, {
                name: 'Light',
                data: dataLight
            }], 
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });
    }, 5000
);



