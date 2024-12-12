import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDemographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DemographyW100Filled'

      short_name='Demography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-234q25 0 42.5-17.5T780-294q0-25-17.5-42.5T720-354q-25 0-42.5 17.5T660-294q0 25 17.5 42.5T720-234Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-167q17 25 43 39t56 14Zm0 28q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86ZM320-614h320q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-88 442q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v195q0 14.21-10 22.11-10 7.89-24 5.89-8-2-16.59-2.5T720-508q-23 0-45 4t-43 11q-3.15-.67-7-.83-3.85-.17-7-.17H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h255q-34 22-59.5 52.5T474-346H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h143q-5 19-8 38.5t-3 39.5v16q0 9 1 19 1 13-6.57 23T426-172H232Z"/>
    </Icon>
  );
});

IconMaterialDemographyW100Filled.displayName = 'OnesyIconMaterialDemographyW100Filled';

export default IconMaterialDemographyW100Filled;
