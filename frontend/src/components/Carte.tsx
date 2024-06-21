import { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
// import franceMap from "@highcharts/map-collection/countries/fr/fr-all.topojson";

// Initialize the map module

const Carte = () => {
  const [data, setData] = useState<any>(null);
  const [map, setMap] = useState<any>(null);
  const [options, setOptions] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const franceMap = await fetch(
          "https://code.highcharts.com/mapdata/custom/europe.topo.json"
        ).then((response) => response.json());
        // const franceMap = mapData
        // const offreData = await fetch('https://www.highcharts.com/samples/data/european-train-stations-near-airports.json').then(response => response.json());
        setMap(franceMap);
        setData([
          {
            name: "Entzheim",
            lat: 48.54699,
            lon: 7.62794,
            country: "FR",
          },
          {
            name: "Aéroport Paris Roissy Charles de Gaulle CDG",
            lat: 49.00412433626132,
            lon: 2.5707364082336426,
            country: "FR",
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    setOptions({
      chart: {
        map: map,
        backgroundColor: null,
        borderColor: "rgba(104, 74, 138, 0.1)",
        borderWidth: 2,
      },
      title: {
        text: "Nos Offres",
        align: "left",
        style: {
          color: "rgba(104, 74, 138, 1)",
        },
        className: "text-gray-100 dark:text-gray-100", // Tailwind CSS classes for dark mode
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: "spacingBox",
          align: "left",
          verticalAlign: "middle",
          x: 0,
          y: -18,
          width: 18,
          height: 18,
          style: {
            color: "#222222",
            fontWeight: "bold",
            backgroundColor: "#684a8a", // Customize background color
            borderColor: "#522c7c", // Customize border color
            borderRadius: "3px", // Customize border radius
          },
          theme: {
            "stroke-width": 1,
            stroke: "#522c7c", // Customize stroke color
            r: 3, // Customize border radius
            states: {
              hover: {
                fill: "#522c7c", // Customize hover fill color
                style: {
                  color: "#BBBBBB",
                },
              },
              select: {
                fill: "#522c7c", // Customize select fill color
                style: {
                  color: "#BBBBBB",
                },
              },
            },
          },
        },
      },

      tooltip: {
        headerFormat: "",
        useHTML: true,
        pointFormat: `<span class="flag {point.flag}">{point.name} {point.value}</span>`,
        formatter: function () {
          document.addEventListener("onClick", () => {
            window.location.pathname = "/manager/offres/";
          });
          return;
        },
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
              type: "grid",
              gridSize: 70,
            },
            zones: [
              {
                from: 1,
                to: 4,
                marker: {
                  radius: 13,
                },
              },
              {
                from: 5,
                to: 9,
                marker: {
                  radius: 15,
                },
              },
              {
                from: 10,
                to: 15,
                marker: {
                  radius: 17,
                },
              },
              {
                from: 16,
                to: 20,
                marker: {
                  radius: 19,
                },
              },
              {
                from: 21,
                to: 100,
                marker: {
                  radius: 21,
                },
              },
            ],
          },
        },
      },
      series: [
        {
          name: "Europe",
          accessibility: {
            exposeAsGroupOnly: true,
          },
          borderColor: "rgba(104, 74, 138, 0.1)",
          borderWidth: 2,
          nullColor: "rgba(104, 74, 138, 0.5)",
          showInLegend: false,
        },
        {
          type: "mappoint",
          enableMouseTracking: true,
          accessibility: {
            point: {
              descriptionFormat:
                "{#if isCluster}" +
                "Grouping of {clusterPointsAmount} points." +
                "{else}" +
                "{name}, country code: {country}." +
                "{/if}",
            },
          },
          colorKey: "clusterPointsAmount",
          name: "Offres",
          data: data,
          color: "#684a8a",
          marker: {
            symbol: "mapmarker",
            radius: 8,
          },
          dataLabels: {
            verticalAlign: "top",
          },
        },
      ],
    });
  }, [data, map]);

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
