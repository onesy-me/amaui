import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorOccupiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedFilled'

      short_name='SensorOccupied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q-1.25 0-2.125-.875T9 8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8q0 1.25-.875 2.125T12 11Zm-5 6q-.425 0-.713-.288Q6 16.425 6 16v-.9q0-.525.263-.988.262-.462.712-.737 1.125-.65 2.375-1.012Q10.6 12 12 12t2.65.363q1.25.362 2.375 1.012.45.275.713.737.262.463.262.988v.9q0 .425-.288.712Q17.425 17 17 17Zm9.25-15.15q.175-.4.55-.55.375-.15.75.05 1.575.825 2.825 2.062Q21.625 4.65 22.5 6.2q.225.4.125.837-.1.438-.5.638-.375.2-.775.038-.4-.163-.6-.538-.7-1.275-1.7-2.263-1-.987-2.275-1.687-.375-.2-.537-.588-.163-.387.012-.787Zm-8.575.025q.2.375.025.775-.175.4-.55.6-1.25.7-2.225 1.688-.975.987-1.675 2.237-.2.375-.6.538-.4.162-.775-.038-.4-.2-.5-.638-.1-.437.125-.837.825-1.5 2.025-2.688 1.2-1.187 2.7-2.012.4-.225.825-.125.425.1.625.5Zm-5.8 14.45q.375-.2.775-.025.4.175.6.55.675 1.2 1.625 2.175.95.975 2.15 1.65.4.225.588.625.187.4.012.8t-.6.513q-.425.112-.825-.088-1.5-.8-2.687-2.012Q2.325 19.3 1.5 17.8q-.225-.4-.125-.838.1-.437.5-.637Zm20.2.075q.4.175.525.575.125.4-.075.8-.825 1.5-2.025 2.7-1.2 1.2-2.7 2.025-.4.225-.837.125-.438-.1-.638-.5-.2-.375-.025-.775.175-.4.575-.625 1.2-.65 2.15-1.588.95-.937 1.625-2.112.225-.4.625-.6.4-.2.8-.025Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedFilled.displayName = 'AmauiIconMaterialSensorOccupiedFilled';

export default IconMaterialSensorOccupiedFilled;
