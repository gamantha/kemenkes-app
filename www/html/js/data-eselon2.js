/**
 * Define bullet data
 */
var bullets = [ 
{"x":"89","y" : "83","url" : "profile.php?profile_id=1033&project_activity_id=800","value" : "Dr. Drs. NANA MULYANA, M.Kes",},
{"x":"85","y" : "75","url" : "profile.php?profile_id=1034&project_activity_id=801","value" : "drg. AGUS SUPRAPTO, M.Kes",},
{"x":"91","y" : "89","url" : "profile.php?profile_id=1035&project_activity_id=802","value" : "Dra. Hj. OOS FATIMAH ROSYATI, M. Kes.",},
{"x":"95","y" : "94","url" : "profile.php?profile_id=1036&project_activity_id=803","value" : "dr. KIRANA PRITASARI, MQIH",},
{"x":"92","y" : "77","url" : "profile.php?profile_id=1037&project_activity_id=804","value" : "Dra. ENGKO SOSIALINE MAGDALENE, Apt, M.Bio Med.",},
{"x":"95","y" : "92","url" : "profile.php?profile_id=1038&project_activity_id=805","value" : "Dr. Dra. AGUSDINI BANUN SAPTANINGSIH, Apt, MARS",},
{"x":"88","y" : "82","url" : "profile.php?profile_id=1039&project_activity_id=806","value" : "dr. IMRAN AGUS NURALI, Sp.KO",},
{"x":"89","y" : "77","url" : "profile.php?profile_id=1040&project_activity_id=807","value" : "dr. TRI HESTY WIDYASTOETI MARWOTOSOEKO, Sp.M",},
{"x":"86","y" : "92","url" : "profile.php?profile_id=1041&project_activity_id=808","value" : "drg. R VENSYA SITOHANG, M.Epid",},
{"x":"92","y" : "89","url" : "profile.php?profile_id=1043&project_activity_id=810","value" : "dr. TRISA WAHJUNI PUTRI, M.Kes",},
{"x":"97","y" : "83","url" : "profile.php?profile_id=1044&project_activity_id=811","value" : "Dr. ACHMAD YURIANTO",},
{"x":"108","y" : "97","url" : "profile.php?profile_id=1045&project_activity_id=812","value" : "drg. ARIANTI ANAYA, M. K.M",},
{"x":"100","y" : "100","url" : "profile.php?profile_id=1440&project_activity_id=1193","value" : "dr. ACHMAD SOEBAGJO TANCARINO, MARS",},
{"x":"97","y" : "100","url" : "profile.php?profile_id=1441&project_activity_id=1194","value" : "SUHARTATI, S.Kp, M.Kes",},
{"x":"95","y" : "94","url" : "profile.php?profile_id=1442&project_activity_id=1195","value" : "Dra. R. DETTIE YULIATI, Apt, MSi",},
{"x":"77","y" : "69","url" : "profile.php?profile_id=1443&project_activity_id=1196","value" : "Ir. SODIKIN SADEK, M.Kes",},
{"x":"85","y" : "68","url" : "profile.php?profile_id=1444&project_activity_id=1197","value" : "dr. ENI GUSTINA, MPH",},
{"x":"91","y" : "74","url" : "profile.php?profile_id=1445&project_activity_id=1198","value" : "drg. KARTINI RUSTANDI, M.Kes",},
{"x":"91","y" : "92","url" : "profile.php?profile_id=1446&project_activity_id=1199","value" : "Dr. dr. FIDIANSJAH, Sp.KJ., MPH",},
{"x":"77","y" : "84","url" : "profile.php?profile_id=1447&project_activity_id=1200","value" : "EDWARD HAREFA, SE, MM",},
{"x":"88","y" : "92","url" : "profile.php?profile_id=1448&project_activity_id=1201","value" : "Drs. BAYU TEJA MULIAWAN, M. Pharm, MM, Apt",},
{"x":"97","y" : "97","url" : "profile.php?profile_id=1449&project_activity_id=1202","value" : "drg. RARIT GEMPARI, MARS",},
{"x":"91","y" : "86","url" : "profile.php?profile_id=1450&project_activity_id=1203","value" : "DR. H. EKA JUSUP SINGKA, M.Sc",},
{"x":"82","y" : "73","url" : "profile.php?profile_id=1451&project_activity_id=1204","value" : "drg. MOH.NUR NASIRUDDIN, M. Kes.",},
{"x":"89","y" : "83","url" : "profile.php?profile_id=1452&project_activity_id=1205","value" : "GEDE KETUT WIRAKAMBOJA, SKM, MPS",},
{"x":"102","y" : "97","url" : "profile.php?profile_id=1453&project_activity_id=1206","value" : "dr. DIDI DANUKUSUMO, Sp.OG (K)",},
{"x":"121","y" : "111","url" : "profile.php?profile_id=1454&project_activity_id=1207","value" : "Dr. dr. RATNA DWI RESTUTI, Sp.THT-KL(K)",},
{"x":"103","y" : "100","url" : "profile.php?profile_id=1455&project_activity_id=1208","value" : "dr. ZUBAEDAH, Sp.P, MARS",},
{"x":"126","y" : "111","url" : "profile.php?profile_id=1456&project_activity_id=1209","value" : "dr. MURSYID BUSTAMI, Sp.S(K), KIC, MARS",},
 ];

/**
 * Define quadrant data
 */
var quadrants = [ {
  "x1": 0,
  "x2": 75,
  "y1": 0,
  "y2": 75,
  "color": "none",
  "label": "1",
  "labelColor": "#f9bf00"
}, {
  "x1": 0,
  "x2": 75,
  "y1": 75,
  "y2": 100,
  "color": "none",
  "label": "2",
  "labelColor": "#f9bf00"
}, {
  "x1": 0,
  "x2": 75,
  "y1": 100,
  "y2": 140,
  "color": "none",
  "label": "4",
  "labelColor": "#f9bf00"
}, {
  "x1": 75,
  "x2": 100,
  "y1": 0,
  "y2": 75,
  "color": "none",
  "label": "3",
  "labelColor": "#f9bf00"
}, {
  "x1": 75,
  "x2": 100,
  "y1": 75,
  "y2": 100,
  "color": "none",
  "label": "5",
  "labelColor": "#f9bf00"
}, {
  "x1": 75,
  "x2": 100,
  "y1": 100,
  "y2": 140,
  "color": "none",
  "label": "7",
  "labelColor": "#f9bf00"
}, {
  "x1": 100,
  "x2": 140,
  "y1": 0,
  "y2": 75,
  "color": "none",
  "label": "6",
  "labelColor": "#f9bf00"
}, {
  "x1": 100,
  "x2": 140,
  "y1": 75,
  "y2": 100,
  "color": "none",
  "label": "8",
  "labelColor": "#f9bf00",
}, {
  "x1": 100,
  "x2": 140,
  "y1": 100,
  "y2": 140,
  "color": "none",
  "label": "9",
  "labelColor": "#f9bf00",

} ];

/**
 * Define a plugin whichs checkes "quadrants" settings in chart config and
 * creates eevrything needed: graphs and data items
 */
AmCharts.addInitHandler( function( chart ) {

  if ( typeof chart.quadrants == "undefined" )
    return;

  for ( var i = 0; i < chart.quadrants.length; i++ ) {

    // get quadrant data
    var q = chart.quadrants[ i ];

    // generate an id
    var qid = 'q' + i;

    // create data points for each corners of the quadrant
    var dp = {};
    dp[ qid + "x" ] = q.x1;
    dp[ qid + "y" ] = q.y1;
    chart.dataProvider.push( dp );

    var dp = {};
    dp[ qid + "x" ] = q.x1;
    dp[ qid + "y" ] = q.y2;
    chart.dataProvider.push( dp );

    var dp = {};
    dp[ qid + "x" ] = q.x2;
    dp[ qid + "y" ] = q.y2;
    chart.dataProvider.push( dp );

    var dp = {};
    dp[ qid + "x" ] = q.x2;
    dp[ qid + "y" ] = q.y1;
    chart.dataProvider.push( dp );


    // create a graph
    chart.graphs.push( {
      "xField": qid + "x",
      "yField": qid + "y",
      "fillColors": q.color,
      "fillAlphas": q.alpha || 1,
      "lineAlpha": 0.5,
      "lineColor": "#ff0019",
      "includeInMinMax": false,
      "showInLegend": false
    } );

    // create data point for label
    if ( q.label ) {
      chart.dataProvider.push( {
        "label": q.label,
        "labelColor": q.labelColor,
        "labelx": q.x1 + ( q.x2 - q.x1 ) / 2,
        "labely": q.y1 + ( q.y2 - q.y1 ) / 2
      } );
    }

  }

  // create graph for all label
  chart.graphs.push( {
    "xField": "labelx",
    "yField": "labely",
    "labelColorField": "labelColor",
    "labelText": "[[label]]",
    "labelPosition": "middle",
    "fontSize": 60,
    "fillAlphas": 0,
    "lineAlpha": 0,
    "includeInMinMax": false,
    "showInLegend": true
  } );

  console.log( chart.dataProvider );

}, [ "xy" ] );

/**
 * Create chart
 */
var chart = AmCharts.makeChart( "chartdiv", {
	"theme": "light",
  "outlineColor": "#0000",
  "type": "xy",
  "dataProvider": bullets,
  "quadrants": quadrants,
  "valueAxes": [ {
    "position": "bottom",
    "title": "Kompetensi",
    "integersOnly": true,
    "minimum": 0,
    "maximum": 140,

  }, {
    "position": "left",
    "title": "Potensi",
    "integersOnly": true,
    "minimum": 0,
    "maximum": 140
  } ],
   
	  "startDuration": 0.2,
  "graphs": [ {
	"balloonText": "<b>[[value]]<b> <br/> Potensi : <b>[[x]]</b> | Kompetensi : <b>[[y]]</b>",	  
    "bullet": "bubble",
         "bulletBorderAlpha": 0.2,
    "bulletBorderThickness": 1,
    "bulletBorderColor": "#000",
    "bulletColor": "#0061ff",
    "bulletAlpha": 1,
    "bulletSize": 10,
    "lineAlpha": 0,
    "xField": "x",
    "yField": "y",
	"valueField": "value",
	"urlField": "url",
	
  } ],

  "chartCursor": {
	  "graphBulletSize": 15
  },
      "export": {
    	"enabled": false
     }
} );



/** Pie Potensi  **/

var chart = AmCharts.makeChart( "chartpotensi", {
  "type": "pie",
  "theme": "light",
  "labelRadius": -22,
  "dataProvider": [ {
    "Potensi": "K-1",
    "nilai": 5
  }, {
    "Potensi": "K-2",
    "nilai": 20
  }, {
    "Potensi": "K-3",
    "nilai": 4
  },],
  "valueField": "nilai",
  "titleField": "Potensi",
   "balloon":{
   "fixedPosition":true
  },

} );

var chart = AmCharts.makeChart( "chartkompetensi", {
  "type": "pie",
  "theme": "light",
  "labelRadius": -22,
  "dataProvider": [ {
    "Potensi": "K-1",
    "nilai": 6
  }, {
    "Potensi": "K-2",
    "nilai": 23
  }, {
    "Potensi": "K-3",
    "nilai": 0
  },],
  "valueField": "nilai",
  "titleField": "Potensi",
   "balloon":{
   "fixedPosition":true
  },

} );