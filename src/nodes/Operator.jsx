import React from "react";
import { Handle } from "reactflow";
import { tw } from "twind";
import { useStore } from "../store";

const Operator = ({ id, data }) => {
  const { setOperator, calculateResult } = useStore((state) => ({
    setOperator: (e) => state.updateNode(id, { operator: e.target.value }),
    calculateResult: () => {
      const operand1 = parseInt(state.nodes.find((node) => node.id === "operand1").data.label);
      const operand2 = parseInt(state.nodes.find((node) => node.id === "operand2").data.label);
      const operator = state.nodes.find((node) => node.id === id).data.operator;

      let result;
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        default:
          result = "Invalid operator";
      }

      return result;
    },
  }));

  const result = calculateResult();

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <Handle className={tw("w-2 h-2")} type="target" position="top" />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <select className="nodrag" value={data.operator} onChange={setOperator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <Handle className={tw("w-2 h-2")} type="target" position="right" />
        <Handle className={tw("w-2 h-2")} type="target" position="bottom" />
      </label>

      <p className={tw("px-2 py-1 text-center")}>Result: {result}</p>
    </div>
  );
};

export default Operator;
