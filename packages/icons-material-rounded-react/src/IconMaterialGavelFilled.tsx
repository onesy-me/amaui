import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGavelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelFilled'

      short_name='Gavel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h400q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200Zm129-171L216-484q-23-23-23.5-56.5T215-597l29-29 228 226-29 29q-23 23-57 23t-57-23Zm311-197L414-796l29-29q23-23 56.5-22.5T556-824l113 113q23 23 23 57t-23 57l-29 29Zm156 380L302-682l56-56 494 494q11 11 11 28t-11 28q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialGavelFilled.displayName = 'OnesyIconMaterialGavelFilled';

export default IconMaterialGavelFilled;
