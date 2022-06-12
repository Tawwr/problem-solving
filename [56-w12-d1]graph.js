function Graph(edgeDirection) {
	this.edgeDirection = edgeDirection;
	this.nodes = {};

	const Node = function (value) {
		this.value = value;
		this.adjacents = [];

		this.addAdjacent = function (node) {
			this.adjacents.push(node);
		};

		this.removeAdjacents = function (node) {
			this.adjacents = this.adjacents.filter(adjacent => adjacent !== node);

			return node;
		};

		this.getAdjacents = function () {
			return this.adjacents;
		};

		this.isAdjacent = function (node) {
			return this.adjacents.includes(node);
		};
	};

	this.addEdge = function (source, destination) {
		const sourceNode = this.addVertex(source);
		const destinationNode = this.addVertex(destination);

		sourceNode.addAdjacent(destinationNode);

		if (this.edgeDirection === 'undirected') {
			destinationNode.addAdjacent(sourceNode);
		}

		return [sourceNode, destinationNode];
	};

	this.addVertex = function (value) {
		if (value in this.nodes) {
			return this.nodes[value];
		}
		const vertex = new Node(value);
		this.nodes[value] = vertex;
		return vertex;
	};

	this.removeVertex = function (value) {
		//check if vertex is in Graph
		//if not return false
		//if in graph
		//remove it from all other vertices adjacents
		//remove it from graph
		if (!(value in this.nodes)) {
			return false;
		}
		for (const node in this.nodes) {
			console.log(this.nodes[node]);
			this.nodes[node].removeAdjacents(this.nodes[value]);
		}
		delete this.nodes[value];
		return true;
	};

	this.removeEdge = function (source, destination) {
		const sourceNode = this.nodes[source];
		const destinationNode = this.nodes[destination];
		if (sourceNode && destinationNode && sourceNode.isAdjacent(destinationNode)) {
			sourceNode.removeAdjacents(destinationNode);
			if (this.edgeDirection === 'undirected') {
				destinationNode.removeAdjacents(sourceNode);
			}
			return [source, destination];
		}
		return false;
	};
}

const graph = new Graph('directed');
