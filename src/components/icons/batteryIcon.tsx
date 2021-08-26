import React from 'react';
import Svg, { ClipPath, Defs, Rect, Path } from 'react-native-svg';

type Props = {
  batteryLevel: number,
};

const BatteryIcon = ({ batteryLevel }: Props) => {
  
  function batteryColour(batteryLevel: number) {
    let colour = 'green';
    if (batteryLevel === null) {
      	colour = 'orange';
    } else if (batteryLevel < 0.15) {
      	colour = 'red';
    }
    return colour;
  }

  function batteryFill(batteryLevel: number) {
    let fill;
    if (batteryLevel === null) {
      	fill = 1;
    } else {
      	fill = batteryLevel;
    }
    return fill;
  }

  return (
    <Svg width="30" height="51" viewBox="0 0 30 51">
		<Defs>
			<ClipPath id="clip">
				<Path d="M10,3 L20,3 L20,7 L27,7 L27,48 L3,48 L3,7 L10,7 L10,3 Z" />
			</ClipPath>
		</Defs>
		<Rect
			x="0"
			y={51 - batteryFill(batteryLevel) * 51}
			width="30"
			height={batteryFill(batteryLevel) * 51}
			fill={batteryColour(batteryLevel)}
			clipPath="url(#clip)"
		/>
		<Path
			d="M10,3 L20,3 L20,7 L27,7 L27,48 L3,48 L3,7 L10,7 L10,3 Z"
			strokeWidth="1"
			stroke="black"
		/>
    </Svg>
  );
}

export default BatteryIcon;