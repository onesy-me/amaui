import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowDensityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensityW100'

      short_name='LowDensity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-604q-8.5 0-14.25-5.75T460-624q0-8.5 5.75-14.25T480-644q8.5 0 14.25 5.75T500-624q0 8.5-5.75 14.25T480-604ZM336-460q-8.5 0-14.25-5.75T316-480q0-8.5 5.75-14.25T336-500q8.5 0 14.25 5.75T356-480q0 8.5-5.75 14.25T336-460Zm144 0q-8.5 0-14.25-5.75T460-480q0-8.5 5.75-14.25T480-500q8.5 0 14.25 5.75T500-480q0 8.5-5.75 14.25T480-460ZM192-748q-8.5 0-14.25-5.75T172-768q0-8.5 5.75-14.25T192-788q8.5 0 14.25 5.75T212-768q0 8.5-5.75 14.25T192-748Zm144 0q-8.5 0-14.25-5.75T316-768q0-8.5 5.75-14.25T336-788q8.5 0 14.25 5.75T356-768q0 8.5-5.75 14.25T336-748ZM192-604q-8.5 0-14.25-5.75T172-624q0-8.5 5.75-14.25T192-644q8.5 0 14.25 5.75T212-624q0 8.5-5.75 14.25T192-604Zm40 432q-24.75 0-42.37-17.63Q172-207.25 172-232v-254q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v254q0 14 9 23t23 9h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H474q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h254q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Z"/>
    </Icon>
  );
});

IconMaterialLowDensityW100.displayName = 'OnesyIconMaterialLowDensityW100';

export default IconMaterialLowDensityW100;
