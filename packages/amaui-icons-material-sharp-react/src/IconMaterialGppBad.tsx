import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBad'

      short_name='GppBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 15.5 2.1-2.1 2.1 2.1 1.4-1.4-2.1-2.1 2.1-2.1-1.4-1.4-2.1 2.1-2.1-2.1-1.4 1.4 2.1 2.1-2.1 2.1ZM12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-10Zm0 7.9q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Z"/>
    </Icon>
  );
});

IconMaterialGppBad.displayName = 'AmauiIconMaterialGppBad';

export default IconMaterialGppBad;
