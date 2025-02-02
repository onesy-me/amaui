import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoPrintsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoPrintsW100Filled'

      short_name='PhotoPrints'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-516q17 0 28.5-11.5T600-556v-10l10 4q15 6 30.5 3t23.5-17q9-15 6-32t-20-23.88l-10-3.93 10-3.93q17-6.87 20-24.07 3-17.19-6-32.19-8-14-22.5-17.5T610-710l-10 4v-10q0-17-11.5-28.5T560-756q-17 0-28.5 11.5T520-716v10l-10-4q-17-7-31.5-3.5T456-696q-9 15-6 32.19 3 17.2 20 24.07l10 3.93-10 3.93Q453-625 450-608t6 32q8 14 23.5 17t30.5-3l10-4v10q0 17 11.5 28.5T560-516Zm0-80q-17 0-28.5-11.5T520-636q0-17 11.5-28.5T560-676q17 0 28.5 11.5T600-636q0 17-11.5 28.5T560-596ZM352-308q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H352Zm-99 168q-25 3-44.5-12T186-192l-48-374q-3-25 12.51-44.96Q166.03-630.93 191-634l21-2v300q0 45 31.5 76.5T320-228h414q2 11-5.5 19.5T710-198l-457 58Zm307-256q34 0 63.32-12.5Q652.63-421 676-443q20-19 32.58-42.77Q721.16-509.54 726-537q2-7.6-3.5-13.3Q717-556 709-555q-28 3-52.5 15T612-509q-23 22-36.5 51T560-396Zm0 0q-2-33-15.5-62T508-509q-20-19-44.5-31T411-555q-8-1-13.5 4.7T394-537q5 27.46 18 51.23Q425-462 445-443q23 22 52 34.5t63 12.5Z"/>
    </Icon>
  );
});

IconMaterialPhotoPrintsW100Filled.displayName = 'OnesyIconMaterialPhotoPrintsW100Filled';

export default IconMaterialPhotoPrintsW100Filled;
