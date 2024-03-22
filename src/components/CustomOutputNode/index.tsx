import { useState } from "react";
import { Handle, NodeProps, Position, NodeToolbar } from "reactflow";
import { NodeData } from "../../config/types";

function CustomOutputNode({ data }: NodeProps<NodeData>) {
  const [showTooltip, setShowTooltip] = useState(false);

  const mouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const mouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <div className="output-wrapper">
      <div
        onMouseEnter={() => mouseEnterHandler()}
        onMouseLeave={() => mouseLeaveHandler()}
      >
        {showTooltip ? (
          <div className="on-hover">
            <div className="on-hover-title">{data.label} Insights </div>
            {data.image ? (
              <img className="on-hover-image" src={data.image} />
            ) : (
              <></>
            )}

            {Object.entries(data.tooltipData).map(([key, value]) => (
              <div className="on-hover-data" key={key}>
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
                : <span className="on-hover-data-value">{value}</span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <div className="inputWrapper">{data.label}</div>

        <Handle type="target" position={Position.Top} />
        <Handle
          type="source"
          position={Position.Top}
          style={{ color: data.color, background: data.background }}
        />
      </div>
    </div>
  );
}

export default CustomOutputNode;
