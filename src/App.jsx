import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "react-flow-renderer";
import { useStore } from "./store";
import Operator from "./nodes/Operator";

import "react-flow-renderer/dist/style.css"; // Corrected import path for the style

const nodeTypes = {
  operator: Operator,
};

const App = () => {
  const store = useStore();

  const handleConnect = (params) => {
    store.addEdge(params.source, params.target);
  };

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={store.nodes}
      edges={store.edges}
      onNodesChange={store.onNodesChange} // Use store.onNodesChange directly
      onConnect={handleConnect} // Use handleConnect to add edges
      fitView
    >
      <MiniMap />
      <Controls />
      <Background />
      
    </ReactFlow>
  );
};

export default App;
