import React from 'react';
import Plot from 'react-plotly.js';


function App() {

  return (
    <div>
      <Plot
        data={[{
          values: [43, 24, 12, 15, 5],
          labels: ['Digitized', 'Pass-Point', 'Staged', 'Inventory-In', 'Disposed'],
          domain: { column: 0 },
          marker: {
            line: {
              width: 1,
              color: 'white'
            }
          },
          hoverinfo: "label+value",
          textinfo: "label+text+value",
          textfont: {
            size: 10
          },
          // textposition:"inside",
          hole: .6,
          type: 'pie'
        }]}
        layout={{
          title: 'Pallets', width: 360, height: 280, showlegend: false, annotations: [
            {
              font: {
                size: 10
              },
              showarrow: false,
              text: 99,
              x: 0.5,
              y: 0.5
            }]
        }}
      />
      <Plot
        data={[{
          values: [5, 2, 7],
          labels: ['Critical', 'High', 'Medium'],
          domain: { column: 0 },
          marker: {
            colors: ['red', 'orange', 'grey'],
            line: {
              width: 1,
              color: 'white'
            }
          },
          hoverinfo: "label+value",
          textinfo: "label+text+value",
          textfont: {
            size: 10
          },
          //textposition:"inside",
          hole: .6,
          type: 'pie'
        }]}
        layout={{
          title: 'Alerts', width: 360, height: 280, showlegend: false, annotations: [
            {
              font: {
                size: 10
              },
              showarrow: false,
              text: 14,
              x: 0.5,
              y: 0.5
            }]
        }}
      />
      <Plot
        data={[
          {
            domain: {},
            type: "indicator",
            mode: "gauge+number",
            value: 27.3,
            textfont: { size: 10 },
            gauge: {
              borderwidth: 0,
              axis: { range: [13, 47], tickfont: { size: 10 }, nticks: 5 },
              steps: [
                { range: [13, 20], color: "aqua" },
                { range: [20, 25], color: "yellow" },
                { range: [25, 30], color: "darkorange" },
                { range: [30, 50], color: "red" }
              ]
            }
          }
        ]}
        layout={{
          title: 'Average Elapsed Time', width: 320, height: 240, showlegend: false
        }}

      />

      <Plot
        data={[{
          type: "sunburst",
          labels: ["Portal", "Tracking", "Supply Chain", "Fulfillment Centre", "Print & Digitization", "Item(SGTIN)", "Container(SSCC)", "Inventory", "Move", "Data Management", "Import", "Export", "Alerts"],
          parents: ["", "Portal", "Tracking", "Tracking", "Portal", "Print & Digitization", "Print & Digitization", "Portal", "Inventory", "Portal", "Data Management", "Data Management", "Portal"],
          values: [4, 12, 10, 10, 10, 8, 8, 8, 6, 8, 6, 6, 8],
          outsidetextfont: { size: 18, color: "#377eb8" },
          leaf: { opacity: 0.5 },
          marker: { line: { width: 2 } },
        }]}
        layout={{
          title: 'Portal', width: 640, height: 480, showlegend: true
        }}

      />

      <Plot
        data={[{
          type: "sunburst",
          ids: [
            "Portal",
            "Supply Chain", 
            "Fulfillment Centre", 
            "Supply Chain - Tracking", 
            "Supply Chain - Printing and Digitization",
            "Supply Chain - Inventory", 
            "Supply Chain - Data Management", 
            "Supply Chain - Alerts",
            "Fulfillment Centre - Tracking", 
            "Fulfillment Centre - Printing and Digitization",
            "Fulfillment Centre - Data Management",
            "Fulfillment Centre - Alerts",
            "Supply Chain - Tracking - Digital Identities", 
            "Supply Chain - Tracking - Business Entities", 
            "Fulfillment Centre - Tracking - Digital Identities", 
            "Tracking",
            "Printing and Digitization",
            "Inventory",
            "Data Management",
            "Alerts",
            "Digital Identities", 
            "Business Entities",
            "Inter Facility",
            "Intra Facility",
            "Fast Facts",
            "Item SGTIN", 
            "Container SSCC",
            "Move",
            "Import", 
            "Export",
            "Item",
            "Container",
            "Trailer",
            "Shipment",
            "Order",
            "Load",
            "Drop",
            "Elapsed Time",
            "Temperatue Excursion",
            "Item Exception"
          ],
          labels: [
            "Portal",
            "Supply<br>Chain", 
            "Fulfillment<br>Centre", 
            "Tracking",
            "Printing<br>and<br>Digitization",
            "Inventory",
            "Data<br>Management",
            "Alerts",
            "Tracking",
            "Printing<br>and<br>Digitization",
            "Data<br>Management",
            "Alerts",
            "Digital<br>Identities", 
            "Business<br>Entities", 
            "Digital<br>Identities",
            "Inter<br>Facility",
            "Fast<br>Facts",
            "Intra<br>Facility",
            "Fast<br>Facts",
            "Item<br>(SGTIN)", 
            "Container<br>(SSCC)", 
            "Container<br>(SSCC)", 
            "Move", 
            "Import", 
            "Export",
            "Import",
            "Temperature<br>Excursion",
            "Item<br>Exception",
            "Elapsed<br>Time",
            "Item",
            "Container",
            "Trailer",
            "Shipment",
            "Order",
            "Load",
            "Drop",
            "Container"
          ],
          parents: [
            "",
            "Portal", 
            "Portal", 
            "Supply Chain",
            "Supply Chain",
            "Supply Chain",
            "Supply Chain",
            "Supply Chain",
            "Fulfillment Centre",
            "Fulfillment Centre",
            "Fulfillment Centre",
            "Fulfillment Centre",
            "Supply Chain - Tracking", 
            "Supply Chain - Tracking", 
            "Fulfillment Centre - Tracking",
            "Supply Chain - Tracking", 
            "Supply Chain - Tracking", 
            "Fulfillment Centre - Tracking", 
            "Fulfillment Centre - Tracking",  
            "Supply Chain - Printing and Digitization", 
            "Supply Chain - Printing and Digitization", 
            "Fulfillment Centre - Printing and Digitization",
            "Supply Chain - Inventory", 
            "Supply Chain - Data Management", 
            "Supply Chain - Data Management",
            "Fulfillment Centre - Data Management",
            "Supply Chain - Alerts",
            "Supply Chain - Alerts",
            "Fulfillment Centre - Alerts",
            "Supply Chain - Tracking - Digital Identities",
            "Supply Chain - Tracking - Digital Identities",
            "Supply Chain - Tracking - Digital Identities",
            "Supply Chain - Tracking - Business Entities",
            "Supply Chain - Tracking - Business Entities",
            "Supply Chain - Tracking - Business Entities",
            "Supply Chain - Tracking - Business Entities",
            "Fulfillment Centre - Tracking - Digital Identities"
          ]
          ,
          //outsidetextfont: { size: 20, color: "#377eb8" },
          outsidetextfont: { size: 12, color: "black" },
          leaf: {opacity: 0.5},
          marker: { line: { width: 2 } },
          //insidetextorientation: 'radial'
        }]}
        layout={
          {
            margin: { l: 0, r: 0, b: 0, t: 0 },
            //sunburstcolorway: ["#636efa", "#ef553b"],
            sunburstcolorway: ["purple", "darkorange"],
            width: 720, 
            height: 540
          }
        }

      />

<Plot
        data={[{
          type: "sunburst",
          ids: [
            "Configuration",
            "Location Management", 
            "Companies", 
            "Tenants",
            "User Management",
            "Device Management",
            "Templates",
            "Processes",
            "Process Assignments",
            "Products",
            "Locations",
            "Location Extensions",
            "Suppliers",
            "Consumers",
            "Users",
            "Groups",
            "Permissions",
            "Devices",
            "Device Types",
            "Item Templates",
            "Container Templates",
            "Trailer Templates"
          ],
          labels: [
            "Configuration",
            "Location<br>Management", 
            "Companies", 
            "Tenants",
            "User<br>Management",
            "Device<br>Management",
            "Templates",
            "Processes",
            "Process<br>Assignments",
            "Products",
            "Locations",
            "Location<br>Extensions",
            "Suppliers",
            "Consumers",
            "Users",
            "Groups",
            "Permissions",
            "Devices",
            "Device<br>Types",
            "Item<br>Templates",
            "Container<br>Templates",
            "Trailer<br>Templates"
          ],
          parents: [
            "",
            "Configuration", 
            "Configuration", 
            "Configuration", 
            "Configuration", 
            "Configuration", 
            "Configuration", 
            "Configuration", 
            "Configuration", 
            "Configuration",
            "Location Management",
            "Location Management",
            "Companies",
            "Companies",
            "User Management",
            "User Management",
            "User Management",
            "Device Management",
            "Device Management",
            "Templates",
            "Templates",
            "Templates"
          ]
          ,
          //outsidetextfont: { size: 20, color: "#377eb8" },
          outsidetextfont: { size: 12, color: "black" },
          leaf: {opacity: 0.5},
          marker: { line: { width: 2 } },
          //insidetextorientation: 'radial'
        }]}
        layout={
          {
            margin: { l: 0, r: 0, b: 0, t: 0 },
            //sunburstcolorway: ["#636efa", "#ef553b"],
            sunburstcolorway: ["magenta", "brown", "green", "orange", 
            "purple", "darkorange", "grey", "aqua", "yellow"],
            width: 640, 
            height: 480
          }
        }

      />
    </div>

  );

}

export default App;
