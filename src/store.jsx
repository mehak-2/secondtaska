import { applyNodeChanges, applyEdgeChanges } from "react-flow-renderer";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    { id: 'operand1', type: "operand1", position: { x: 0, y: 0 }, data: { label: '5' } },
    { id: 'operand2', type: "operand2", position: { x: 0, y: 100 }, data: { label: '6' } },
    { id: 'operator', type: "operator", position: { x: 0, y: 200 }, data: { operator: '+' } }, 
  ],
  edges: [],
 
  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },

  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  addEdge(sourceId, targetId) {
    const newEdge = { id: `edge-${sourceId}-${targetId}`, source: sourceId, target: targetId };
    set({
      edges: [...get().edges, newEdge],
    });
  },
}));