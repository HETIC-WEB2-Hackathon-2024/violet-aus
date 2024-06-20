import { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highmaps";
// import franceMap from "@highcharts/map-collection/countries/fr/fr-all.topojson";

// Initialize the map module

const Carte = () => {
  const [data, setData] = useState<any>(null);
  const [map, setMap] = useState<any>(null);

  data === true;

  useEffect(()=>{
    (async () => {
      try {
        const franceMap = await fetch('https://code.highcharts.com/mapdata/countries/fr/fr-all.geo.json').then(response => response.json());
        // const franceMap = mapData
        // const offreData = await fetch('https://www.highcharts.com/samples/data/european-train-stations-near-airports.json').then(response => response.json());
        setMap(franceMap)
        setData([
          {
            "name": "Entzheim",
            "lat": 48.54699,
            "lon": 7.62794,
            "country": "FR"
          }, {
            "name": "Aéroport Paris Roissy Charles de Gaulle CDG",
            "lat": 49.00412433626132,
            "lon": 2.5707364082336426,
            "country": "FR"
          }
        ])
      }catch (error){
        console.error(error)
      }
    })()
  },[])

  // Base options for the Highcharts map
  const options = {
    chart: {
      map: map,
    },
    title: {
      text: 'Nos Offres',
      align: 'left',
    },
    mapNavigation: {
      enabled: true,
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br>Lat: {point.lat:.2f}, Lon: {point.lon:.2f}',
    },
    colorAxis: {
      min: 0,
      max: 20,
    },
    plotOptions: {
      mappoint: {
        cluster: {
          enabled: true,
          allowOverlap: false,
          animation: {
            duration: 450,
          },
          layoutAlgorithm: {
            type: 'grid',
            gridSize: 70,
          },
          zones: [{
            from: 1,
            to: 4,
            marker: {
              radius: 13,
            },
          }, {
            from: 5,
            to: 9,
            marker: {
              radius: 15,
            },
          }, {
            from: 10,
            to: 15,
            marker: {
              radius: 17,
            },
          }, {
            from: 16,
            to: 20,
            marker: {
              radius: 19,
            },
          }, {
            from: 21,
            to: 100,
            marker: {
              radius: 21,
            },
          }],
        },
      },
    },
    series: [
      {
        type: 'map',
        mapData: map,
        name: 'France',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(177, 244, 177, 0.5)'
      }, 
      {
        type: 'mappoint',
        name: 'Train Stations',
        data: [
          {
            "name": "Entzheim",
            "lat": 48.54699,
            "lon": 7.62794,
            "country": "FR"
          }, {
            "name": "Aéroport Paris Roissy Charles de Gaulle CDG",
            "lat": 49.00412433626132,
            "lon": 2.5707364082336426,
            "country": "FR"
          }
        ],
        colorKey: 'clusterPointsAmount',
        marker: {
          lineWidth: 1,
          lineColor: '#fff',
          symbol: 'circle',
          radius: 8,
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          align: 'center',
        },
      }
    ],
  };


  if (!options) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
    
  );
};

export default Carte;
