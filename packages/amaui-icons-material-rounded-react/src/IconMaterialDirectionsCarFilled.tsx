import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsCarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarFilled'

      short_name='DirectionsCar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19v.525q0 .625-.425 1.05Q5.15 21 4.5 21q-.625 0-1.062-.438Q3 20.125 3 19.5V12l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5h11q.475 0 .863.275.387.275.537.725l2.1 6v7.525q0 .625-.425 1.05Q20.15 21 19.5 21q-.625 0-1.062-.438Q18 20.125 18 19.5V19Zm-.2-9h12.4l-1.05-3H6.85Zm1.7 6q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarFilled.displayName = 'AmauiIconMaterialDirectionsCarFilled';

export default IconMaterialDirectionsCarFilled;
