import { scaleLinear, max, scaleBand, easeExpInOut } from "d3";
import { NodeGroup } from "react-move";
import { useSelector } from "react-redux";

const dims = [300, 160];

const StaticGraph = props => {
  const visitItems = useSelector(state => state.items.fetchItems);
  if (visitItems.length === 0) return;

  const y = scaleLinear()
    .range([dims[1], 0])
    .domain([0, max(visitItems, d => d.touNum)]);

  const scale = scaleBand()
    .range([0, dims[0]])
    .domain(visitItems.map(d => d.touDiv))
    .padding(0.3);

  const width = scale.bandwidth();

  return (
    <svg>
      <NodeGroup
        data={visitItems}
        keyAccessor={d => d.touNum}
        start={() => ({
          opacity: 1e-6,
          height: 1e-6,
        })}
        enter={d => ({
          opacity: [0.7],
          height: [dims[1] - y(d.touNum)],
          timing: { duration: 750, ease: easeExpInOut },
        })}
        update={d => ({
          opacity: [0.7],
          height: [1e-6, dims[1] - y(d.touNum)],
          timing: { duration: 750, ease: easeExpInOut },
        })}
        leave={() => ({
          opacity: 1e-6,
          height: 1e-6,
          timing: { duration: 750, ease: easeExpInOut },
        })}
      >
        {nodes => (
          <>
            {nodes.map(({ key, data, state: { opacity, height } }) => (
              <g key={key} transform={`translate(${scale(data.touDiv)},0)`}>
                <rect
                  height={height}
                  y={y(data.touNum)}
                  width={width}
                  opacity={opacity}
                  fill={
                    data.touDiv === "현지인"
                      ? "black"
                      : data.touDiv === "외지인"
                      ? "red"
                      : "blue"
                  }
                />
                <text
                  fontSize="1.3rem"
                  transform={`translate(${scale.bandwidth() / 5},0)`}
                  opacity={opacity}
                  y={dims[1] + 30}
                  dx={
                    data.touDiv === "외국인"
                      ? ".5em"
                      : data.touDiv === "현지인"
                      ? "-.4em"
                      : ""
                  }
                  fill="black"
                  fontWeight="bold"
                >
                  {data.touNum}
                </text>
              </g>
            ))}
          </>
        )}
      </NodeGroup>
    </svg>
  );
};

export default StaticGraph;
