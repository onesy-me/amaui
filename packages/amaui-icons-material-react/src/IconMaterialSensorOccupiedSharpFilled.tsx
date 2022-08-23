import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSensorOccupiedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedSharpFilled'
      short_name='SensorOccupied'

      {...props}
    >
      <path d="M12 11Q10.75 11 9.875 10.125Q9 9.25 9 8Q9 6.75 9.875 5.875Q10.75 5 12 5Q13.25 5 14.125 5.875Q15 6.75 15 8Q15 9.25 14.125 10.125Q13.25 11 12 11ZM6 17V15.1Q6 14.575 6.263 14.112Q6.525 13.65 6.975 13.375Q8.1 12.725 9.35 12.363Q10.6 12 12 12Q13.4 12 14.65 12.363Q15.9 12.725 17.025 13.375Q17.475 13.65 17.738 14.112Q18 14.575 18 15.1V17ZM21.225 8.15Q20.45 6.325 19.062 4.937Q17.675 3.55 15.85 2.775L16.625 0.925Q18.825 1.825 20.488 3.5Q22.15 5.175 23.075 7.375ZM2.775 8.15 0.925 7.375Q1.85 5.175 3.513 3.512Q5.175 1.85 7.375 0.925L8.15 2.775Q6.325 3.55 4.938 4.937Q3.55 6.325 2.775 8.15ZM7.375 23.075Q5.175 22.175 3.513 20.5Q1.85 18.825 0.925 16.625L2.775 15.85Q3.55 17.675 4.938 19.062Q6.325 20.45 8.15 21.225ZM16.625 23.075 15.85 21.225Q17.675 20.45 19.062 19.062Q20.45 17.675 21.225 15.85L23.075 16.625Q22.175 18.825 20.5 20.487Q18.825 22.15 16.625 23.075Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedSharpFilled.displayName = 'AmauiIconMaterialSensorOccupiedSharpFilled';

export default IconMaterialSensorOccupiedSharpFilled;
