import React, { useRef, useEffect, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMap from 'highcharts/modules/map';
import { HighchartsReactProps } from 'highcharts-react-official';
import * as typo from '../data/mapData.json'

// {
//   "name": "Entzheim",
//   "lat": 48.54699,
//   "lon": 7.62794,
//   "country": "FR"
// }

// Initialize the map module
HighchartsMap(Highcharts);

interface CarteProps extends HighchartsReactProps {
  className?: string;
}

const Carte = ({ className, ...props }: CarteProps) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [options, setOptions] = useState<Highcharts.Options | null>(null);

  useEffect(() => {
    const fetchMapData = async () => {
      const topology = typo
      // const data = await fetch('https://www.highcharts.com/samples/data/european-train-stations-near-airports.json', 
      //   {
      //     "method": "GET",
      //     "headers": {
      //       "authorization": "Bearer",
      //       "content-type": "application/json"
      //     }
      //   }
      // ).then(response => response.json());

      const data = [
        {
          "name": "Entzheim",
          "lat": 48.54699,
          "lon": 7.62794,
          "country": "FR"
        }
      ]
        
      
      setOptions({
        chart: {
          map: topology,
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
        series: [{
          type: 'map',
          mapData: topology,
          name: 'France',
          borderColor: '#A0A0A0',
          nullColor: 'rgba(177, 244, 177, 0.5)',
          showInLegend: false,
        }, {
          type: 'mappoint',
          name: 'Train Stations',
          data: data,
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
        }],
      });
    };

    fetchMapData();
  }, []);

  if (!options) {
    return <div>Loading...</div>;
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'mapChart'}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default Carte;
