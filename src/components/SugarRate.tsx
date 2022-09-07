import React from "react";

interface SugarRateProps {
  badgeTitle: string;
  rank: string;
  sugarRate: number;
}

const SugarRate: React.FC<SugarRateProps> = ({
  badgeTitle = "SUGAR-RATE",
  rank,
  sugarRate = 0,
}) => {
  return (
    <svg width="800" height="346" xmlns="http://www.w3.org/2000/svg">
      <g>
        <text
          xmlSpace="preserve"
          textAnchor="start"
          fontFamily="Noto Sans JP"
          fontSize="124"
          id="svg_24"
          y="114"
          x="16"
          strokeWidth="0"
          stroke="#000"
          fill="#000000"
        >
          {badgeTitle}
        </text>
        <g id="svg_25">
          <rect
            stroke="#000"
            strokeWidth="10"
            id="svg_2"
            height="214"
            width="792"
            y="129"
            x="3.99998"
            fill="#fff"
          />
          <path
            strokeWidth="10"
            id="svg_4"
            d="m157,132l-1,208"
            opacity="undefined"
            stroke="#000"
            fill="none"
          />
          <path
            strokeWidth="10"
            id="svg_5"
            d="m309,133l-1,208"
            opacity="undefined"
            stroke="#000"
            fill="none"
          />
          <path
            strokeWidth="10"
            id="svg_6"
            d="m461,132l-1,208"
            opacity="undefined"
            stroke="#000"
            fill="none"
          />
          <path
            strokeWidth="10"
            id="svg_7"
            d="m613,133l-1,208"
            opacity="undefined"
            stroke="#000"
            fill="none"
          />
          <rect
            stroke="#000"
            id="svg_10"
            height="204"
            width="143.00001"
            y="134"
            x="9"
            strokeWidth="0"
            fill="#3f7f00"
          />
          <rect
            stroke="#000"
            id="svg_11"
            height="204"
            width="143.00001"
            y="134"
            x="161"
            strokeWidth="0"
            fill="#00bf00"
          />
          <rect
            stroke="#000"
            id="svg_12"
            height="204"
            width="143.00001"
            y="134"
            x="313"
            strokeWidth="0"
            fill="#ffff00"
          />
          <rect
            stroke="#000"
            id="svg_13"
            height="204"
            width="143.00001"
            y="134"
            x="465"
            strokeWidth="0"
            fill="#ff7f00"
          />
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontFamily="Noto Sans JP"
            fontSize="124"
            id="svg_3"
            y="274.75"
            x="37"
            strokeWidth="0"
            stroke="#000"
            fill="#000000"
          >
            A
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontFamily="Noto Sans JP"
            fontSize="124"
            id="svg_15"
            y="274.75"
            x="337"
            strokeWidth="0"
            stroke="#000"
            fill="#000000"
          >
            C
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontFamily="Noto Sans JP"
            fontSize="124"
            id="svg_16"
            y="274.75"
            x="490"
            strokeWidth="0"
            stroke="#000"
            fill="#000000"
          >
            D
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontFamily="Noto Sans JP"
            fontSize="80"
            id="svg_17"
            y="260.25"
            x="631"
            strokeWidth="0"
            stroke="#000"
            fill="#000000"
          >
            {sugarRate}%
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontFamily="Noto Sans JP"
            fontSize="124"
            id="svg_21"
            y="274.75"
            x="193"
            strokeWidth="0"
            stroke="#000"
            fill="#000000"
          >
            B
          </text>
        </g>
        <ellipse
          ry="76.5"
          rx="69.5"
          id="svg_26"
          cy="236"
          cx="80.5"
          strokeWidth="5"
          stroke="#000000"
          fill="none"
        />
        <ellipse
          ry="8.5"
          rx="4"
          id="svg_27"
          cy="184"
          cx="101"
          strokeWidth="0"
          stroke="#000"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default SugarRate;
