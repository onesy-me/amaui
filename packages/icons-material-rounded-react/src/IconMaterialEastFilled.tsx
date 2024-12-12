import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastFilled'

      short_name='East'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M727-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h607L572-676q-11-11-11.5-27.5T572-732q11-11 28-11t28 11l224 224q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L628-228q-11 11-27.5 11T572-228q-12-12-12-28.5t12-28.5l155-155Z"/>
    </Icon>
  );
});

IconMaterialEastFilled.displayName = 'OnesyIconMaterialEastFilled';

export default IconMaterialEastFilled;
