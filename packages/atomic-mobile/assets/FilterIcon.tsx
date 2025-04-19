import Svg, { Path, Circle } from "react-native-svg";

const FilterIcon = ({ size = 24, color = "#1E88E5" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 6H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="6" cy="6" r="2" fill={color} />
      <Path
        d="M3 12H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="12" cy="12" r="2" fill={color} />
      <Path
        d="M3 18H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="9" cy="18" r="2" fill={color} />
    </Svg>
  );
};

export default FilterIcon;
