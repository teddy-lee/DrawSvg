//As the modelModules and viewModules are not know to the Board and are instantiated at runtime make sure they are available by requireing them here
define(["startnode", "joinendnode", "joinstartnode", "endnode", "flipflopendnode", "startnodeview", "joinendnodeview", "joinstartnodeview", "endnodeview", "flipflopendnodeview"], function(){
	
	var arrangement = {
		nodes: [{nodeId: "s1", x: "300", y: "100", modelModule: "startnode", viewModule:"startnodeview", starting:["#003366", "#FF0090", "#003366", "#35733E", "#FF0090", "#35733E"]},
				
				{nodeId: "j1", x: "50", y: "280", modelModule: "joinendnode", viewModule:"joinendnodeview"},
				{nodeId: "j2", x: "130", y: "280", modelModule: "joinendnode", viewModule:"joinendnodeview"},
				{nodeId: "j2a", x: "170", y: "350", modelModule: "joinendnode", viewModule:"joinendnodeview"},
				{nodeId: "j3", x: "90", y: "350", modelModule: "joinstartnode", viewModule:"joinstartnodeview"},
				
				{nodeId: "j4", x: "320", y: "280", modelModule: "flipflopendnode", viewModule:"flipflopendnodeview"},
				{nodeId: "j5", x: "280", y: "350", modelModule: "joinstartnode", viewModule:"joinstartnodeview"},
				{nodeId: "j6", x: "360", y: "350", modelModule: "joinstartnode", viewModule:"joinstartnodeview"},
				
				{nodeId: "j7", x: "510", y: "280", modelModule: "flipflopendnode", viewModule:"flipflopendnodeview"},
				{nodeId: "j8", x: "470", y: "350", modelModule: "joinstartnode", viewModule:"joinstartnodeview"},
				{nodeId: "j9", x: "550", y: "350", modelModule: "joinstartnode", viewModule:"joinstartnodeview"},
				
				
				{nodeId: "e1", x: "350", y: "500", modelModule: "endnode", viewModule:"endnodeview", expecting: ["#003366", "#003366", "#FF0090", "#FF0090", "#35733E", "#35733E"]}],

		connections: [
			{from: "j1", to: "j3"},
			{from: "j2", to: "j3"},
			{from: "j2a", to: "j3"},
			
			{from: "j4", to: "j5"},
			{from: "j4", to: "j6"},
			
			{from: "j7", to: "j8"},
			{from: "j7", to: "j9"},
			
		]
		
		
	}
	
	return arrangement;
    
});