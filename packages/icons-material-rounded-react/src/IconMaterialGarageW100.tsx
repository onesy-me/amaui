import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageW100'

      short_name='Garage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-576q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm148-252q-11 0-19.5-8.5T312-440q0-11 8.5-19.5T340-468q11 0 19.5 8.5T368-440q0 11-8.5 19.5T340-412Zm280 0q-11 0-19.5-8.5T592-440q0-11 8.5-19.5T620-468q11 0 19.5 8.5T648-440q0 11-8.5 19.5T620-412ZM266-272q6 0 10-4t4-10v-66h400v66q0 6 4 10t10 4q6 0 10-4t4-10v-212q0-5-.5-10t-2.5-10l-46-130q-6-18-21-29t-35-11H357q-20 0-35 11t-21 29l-46 130q-2 5-2.5 10t-.5 10v212q0 6 4 10t10 4Zm22-256 39-111q3-10 11-15.5t19-5.5h246q11 0 19 5.5t11 15.5l39 111H288ZM160-800v640-640Zm120 420v-120h400v120H280Z"/>
    </Icon>
  );
});

IconMaterialGarageW100.displayName = 'OnesyIconMaterialGarageW100';

export default IconMaterialGarageW100;
