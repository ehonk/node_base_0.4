
function loadpage_highchart() {


    $("#objbutton_post").click(function(){
	    alert ("objbutton_post Done");

      $("#objhidden").val("buttonpost");
      $("form").submit();

    });

    hc_enviroment();

}

function hc_enviroment(){

	//alert ("hc_enviroment Done");


    var HCObjOptions = loadCleanDummySimple('hcGraph');
    var HCObject= new Highcharts.StockChart(HCObjOptions);

}


function jsonProfiler_02_loadHighcharts() {

	// var SensorID = $('#objSensorID').val();

    var hctitle="Velocity Profile" ;
    var velocityoptionsAQPMT=loadCleanDummySimple('divVelocityProfileAQPMT');

    DummyChartVelocityProfileAQPMT= new Highcharts.StockChart(velocityoptionsAQPMT);
    DummyChartVelocityProfileAQPMT.setTitle({text: hctitle });

    jsonProfiler_03_loadParamsPCP( );
};


function loadCleanDummySimple(renderTo){

    
    simpleOptions = {

              chart: {
                renderTo: renderTo,
                backgroundColor: 'grey',
                 type: 'spline'
              },
              title: {
                  text: ''
              },
              legend: {
                  enabled: true,
                  align: 'center',
                  verticalAlign: 'top',
                  y: 25,
                  floating: false,
                  borderWidth: 1
              },
              rangeSelector: {
                  enabled: false
              },
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}<br/>',
            valueDecimals: 2
          },
            plotOptions: {
                spline: {
                    lineWidth: 1,
                      marker: {
                          enabled: false
                        }
                    },
                series: {
                    animation: {
                        duration: 2000
                        }
                    }
            },
              xAxis: {
                type: 'datetime'
              }
    };


    return simpleOptions;


}