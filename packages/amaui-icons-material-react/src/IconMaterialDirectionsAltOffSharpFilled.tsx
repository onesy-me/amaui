import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffSharpFilled'
      short_name='DirectionsAltOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8l-4 4L1.2 12l4-4L.675 3.5 2.1 2.075l19.8 19.8ZM12 17l1.1-1.1-1.425-1.4-1.075 1.1Zm6.85-1.05L22.8 12 12 1.2 8.05 5.15l2.9 2.9L12 7l5 5-1.05 1.05ZM7 13h3.175l-2-2H7Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffSharpFilled.displayName = 'AmauiIconMaterialDirectionsAltOffSharpFilled';

export default IconMaterialDirectionsAltOffSharpFilled;
