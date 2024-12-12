import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarRepairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairW100Filled'

      short_name='CarRepair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-144q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H200q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM340-472q11 0 19.5-8.5T368-500q0-11-8.5-19.5T340-528q-11 0-19.5 8.5T312-500q0 11 8.5 19.5T340-472Zm280 0q11 0 19.5-8.5T648-500q0-11-8.5-19.5T620-528q-11 0-19.5 8.5T592-500q0 11 8.5 19.5T620-472ZM265.96-332q-5.96 0-9.96-4.02-4-4.03-4-9.98v-212q0-5.25.5-10.13.5-4.87 2.21-9.84L301-708q5.76-17.78 20.88-28.89T357-748h246q20 0 35.12 11.11Q653.24-725.78 659-708l46.29 130.03q1.71 4.97 2.21 9.84.5 4.88.5 10.13v212q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-66H280v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM288-588h384l-39-111q-3-10-11-15.5t-19-5.5H357q-11 0-19 5.5T327-699l-39 111Z"/>
    </Icon>
  );
});

IconMaterialCarRepairW100Filled.displayName = 'OnesyIconMaterialCarRepairW100Filled';

export default IconMaterialCarRepairW100Filled;
