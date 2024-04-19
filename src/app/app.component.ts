import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import tippy from 'tippy.js';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	// @ViewChild('myElement', { static: true }) myElement!: ElementRef;

	layoutType: string = 'cose';
	lineType: any = 'bezier';
	cy: any;

	constructor() {}

	ngOnInit() {
		setTimeout( () => {
			this.renderChart();
		}, 1000 )
	}

	renderChart() {

		if ( this.layoutType == 'dagre' ) {
			cytoscape.use(dagre);
		} else if ( this.layoutType == 'euler' ) {
			// cytoscape.use(euler); 
		}

		this.cy = cytoscape({
			container: document.getElementById('cy'),
			// container: this.myElement.nativeElement,
	
			boxSelectionEnabled: false,
			// autounselectify: true,

			layout: {
				// name: 'dagre'
				// name: 'circle'
				name: this.layoutType,
				// name: 'preset'
			},
	
			style: [
				{
					selector: 'node',
					style: {
						'label': 'data(label)',
						'text-wrap': 'wrap',
						'text-max-width': '100px',
						'text-events': 'no',
						'line-height': 1.2,

						// 'text-margin-x': 0,
						// 'text-margin-y': 10,

						// 'text-background-shape': 'roundrectangle',
						// 'text-background-color': 'data(color)',
						// 'text-background-padding': '20px',

						'shape': 'rectangle', // Set the shape to rectangle
						// 'color': 'data(color)',
						// 'width': 10,
						// 'height': 10,
						'width': 'label',
						'height': 'label',
						'background-color': 'data(color)', // Make background transparent
						// 'opacity': 1,
						'border-width': 0, // Remove border
						'text-valign': 'center', // Center text vertically
						'text-halign': 'center', // Center text horizontally
						'font-size': '14px', // Adjust font size as needed
						// 'text-outline-width': 1,
						// 'text-outline-color': 'white'

						// 'padding': '10px'

						
						// 'width': 'auto',
						// 'height': 'auto',
						// 'background-fit': 'contain', // Ensure the background image fits the node
						// 'background-image': 'data(image)',

					}
				},
	
				{
					selector: 'edge',
					style: {
						'width': 2,
						'target-arrow-shape': 'triangle',
						'line-color': '#9dbaea',
						'target-arrow-color': '#9dbaea',
						'curve-style': this.lineType
					}
				}
			],
	
			// elements: {
			// 	nodes: [
			// 	{ data: { id: 'n0' } },
			// 	{ data: { id: 'n1' } },
			// 	],
			// 	edges: [
			// 	{ data: { source: 'n0', target: 'n1' } },
			// 	]
			// }

		});

		var eles = this.cy.add([
			{ group: 'nodes', data: { id: 'n0',cmpnyNo: 23532, labelContent: 'TESCO PLC Main', color: '#b7e6a3' } },
			{ group: 'nodes', data: { id: 'n1',cmpnyNo: 23532, labelContent: 'Stewart Supremarkets Limited', color: 'yellow' } },
			{ group: 'nodes', data: { id: 'n2',cmpnyNo: 23532, labelContent: 'tesco Pension trustees Limited', color: 'yellow' }},
			{ group: 'nodes', data: { id: 'n3',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n4',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n5',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n6',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n7',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n8',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n9',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n10',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n11',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n12',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n13',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n14',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n15',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n16',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n17',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n18',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n19',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n20',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n21',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n22',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n23',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },
			{ group: 'nodes', data: { id: 'n24',cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' } },

			{ group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
			{ group: 'edges', data: { id: 'e1', source: 'n1', target: 'n2' } },
			{ group: 'edges', data: { id: 'e3', source: 'n1', target: 'n3' } },
			{ group: 'edges', data: { id: 'e4', source: 'n1', target: 'n4' } },
			{ group: 'edges', data: { id: 'e5', source: 'n1', target: 'n5' } },
			{ group: 'edges', data: { id: 'e6', source: 'n1', target: 'n6' } },
			{ group: 'edges', data: { id: 'e7', source: 'n1', target: 'n7' } },
			{ group: 'edges', data: { id: 'e8', source: 'n1', target: 'n8' } },
			{ group: 'edges', data: { id: 'e9', source: 'n1', target: 'n9' } },
			{ group: 'edges', data: { id: 'e10', source: 'n1', target: 'n10' } },
			{ group: 'edges', data: { id: 'e11', source: 'n1', target: 'n11' } },
			{ group: 'edges', data: { id: 'e12', source: 'n2', target: 'n12' } },
			{ group: 'edges', data: { id: 'e13', source: 'n2', target: 'n13' } },
			{ group: 'edges', data: { id: 'e14', source: 'n2', target: 'n14' } },
			{ group: 'edges', data: { id: 'e15', source: 'n2', target: 'n15' } },
			{ group: 'edges', data: { id: 'e16', source: 'n1', target: 'n16' } },
			{ group: 'edges', data: { id: 'e17', source: 'n1', target: 'n17' } },
			{ group: 'edges', data: { id: 'e18', source: 'n1', target: 'n18' } },
			{ group: 'edges', data: { id: 'e19', source: 'n1', target: 'n19' } },
			{ group: 'edges', data: { id: 'e20', source: 'n1', target: 'n20' } },
			{ group: 'edges', data: { id: 'e21', source: 'n1', target: 'n21' } },
			{ group: 'edges', data: { id: 'e22', source: 'n1', target: 'n22' } },
			{ group: 'edges', data: { id: 'e23', source: 'n1', target: 'n23' } },
			{ group: 'edges', data: { id: 'e24', source: 'n1', target: 'n24' } },
			
		]);

		let assignLable = () => {
			var nodes = this.cy.nodes();

			// var centerX = cy.width() / 2;
			// var centerY = cy.height() / 2;
			// var radius =  Math.min(centerX, centerY) - 50;
			// var angleIncrement = (2 * Math.PI) / nodes.length;
			// var angle = 0;

			nodes.forEach((node: any) => {
				const labelContent = node.data('labelContent');
				const additionalInfo = node.data('cmpnyNo');
				const addDetail = 'view details'
				const formattedLabel = `${labelContent}\n${additionalInfo}\n${addDetail}`;

				// var x = centerX + radius * Math.cos(angle);
				// var y = centerY + radius * Math.sin(angle);
				// node.position({ x: x, y: y });
				// angle += angleIncrement;

				
				// const formattedLabel = `<div  class="node-template">${labelContent}</div><div>${additionalInfo}</div>`;
				// const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
				//             <foreignObject width="100%" height="100%">
				//               <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
				//                 <div>'asdasdasgdajsgdajsgdj'</div>
				//                 <div>${labelContent}</div>
				//               </div>
				//             </foreignObject>
				//           </svg>`;
				// const imageData = `data:image/svg+xml;base64,${btoa(svgData)}`;
				// console.log( imageData )
				// node.data('image', imageData);
	
				node.data('label', formattedLabel);
			});
		}

		let changeColor = () => {
			this.cy.edges().forEach( ( ele: any ) => {
				if(ele.id() === 'e0'){
				  ele.style('line-color', '#b7e6a3');
				}
			});
		}
		// changeColor();
		assignLable();

		this.cy.layout({ name: this.layoutType }).run();

		this.cy.center( );
		this.cy.zoomingEnabled( true );
		this.cy.autolock( false );

		this.cy.on('mouseover', 'node', function(event: any){
			let node = event.target;
			node.style('background-color', '#f7f2c6');
		});

		this.cy.on('mouseout', 'node', function(event: any){
			let node = event.target;
			node.style('background-color', node.data('color'))
		});

		let tooltip = () => {

			this.cy.nodes().forEach( (node: any) => {
	
				// const dummyElement = document.createElement('div');
				// const dummyContent = document.createTextNode(node.data('label'));
				// dummyElement.appendChild(dummyContent);
				// document.body.appendChild(dummyElement);
	
				// tippy(dummyElement, {
				// 	content: node.data('label'),
				// 	trigger: 'mouseenter',
				// 	placement: 'bottom',
				// 	animation: 'shift-away',
				// 	theme: 'light',
				// 	arrow: true
				// });
	
				tippy(node.popperRef(), {
				  content: node.data('label'), // Display node label as tooltip content
				  trigger: 'mouseenter', // Show tooltip on mouseenter event
				  placement: 'bottom', // Tooltip placement
				  animation: 'shift-away', // Tooltip animation
				  theme: 'light', // Tooltip theme
				  arrow: true // Show tooltip arrow
				});
	
			});

		}

		tooltip();

		// cy.on('zoom', (event) => {
		// 	let zoomLevel = cy.zoom();
		// 	console.log( zoomLevel )
		// 	let labelFontSize = 14 / zoomLevel;
	
		// 	cy.nodes().forEach(function(node){
		// 	  node.style('font-size', labelFontSize + 'px');
		// 	});

		// });

		// cy.on('tap', 'node', function(evt){
		// 	var node = evt.target;
		// 	cy.add( 
		// 		{ group: 'nodes', data: { id: 'new' + cy.nodes().length,cmpnyNo: 23532, labelContent: 'Tesco (overseas) Limite4d', color: 'white' }, position: { x: evt.position.x, y: evt.position.y + 60 } }
		// 	 )
		// 	// assignLable();
		// });

		// setTimeout( function(){
		// 	cy.reset();
		// 	cy.center( );
		//   }, 5000 );
	}

	displayChart( hit: string ) {

		this.layoutType = hit;
		this.resetGraph();
	}

	changeCurveLine( lineType: string ) {

		this.lineType = lineType;
		this.resetGraph();
	}

	rotateChart() {
		let angle = 20;
		let cyContainer = document.getElementById('cy');
		if ( cyContainer ) {
			cyContainer.style.transform = `rotate(${angle}deg)`;
		}
	}

	resetGraph() {
		this.cy.elements().remove();
		this.renderChart();
	}
}

