import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBoat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBoat'

      short_name='DirectionsBoat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 13.55ZM3.95 19l-2.175-7.625L4 10.6V4h5V1h6v3h5v6.6l2.225.775L20.05 19q-1.25 0-2.275-.587Q16.75 17.825 16 17q-.75.825-1.775 1.413Q13.2 19 12 19q-1.2 0-2.225-.587Q8.75 17.825 8 17q-.75.825-1.775 1.413Q5.2 19 3.95 19ZM2 23v-2h2q1.05 0 2.075-.325Q7.1 20.35 8 19.7q.9.65 1.925.95 1.025.3 2.075.3 1.05 0 2.075-.3 1.025-.3 1.925-.95.9.65 1.925.975Q18.95 21 20 21h2v2h-2q-1.05 0-2.05-.25-1-.25-1.95-.75-.95.5-1.962.75Q13.025 23 12 23t-2.037-.25Q8.95 22.5 8 22q-.95.5-1.95.75T4 23ZM6 9.95 12 8l6 1.95V6H6ZM12 17q1.175 0 1.988-.825Q14.8 15.35 16 13.95q1.2 1.35 1.625 1.85.425.5 1.025.85l1.1-4L12 10.1l-7.8 2.55 1.15 3.95q.6-.35 1.025-.8Q6.8 15.35 8 13.95q1.25 1.425 2.038 2.238Q10.825 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBoat.displayName = 'AmauiIconMaterialDirectionsBoat';

export default IconMaterialDirectionsBoat;
