import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputAntennaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntennaFilled'

      short_name='SettingsInputAntenna'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-480q-17 0-29-10.5T41-516q7-85 44-159t96-128.5Q240-858 317-889t163-31q86 0 163 31t136 85.5Q838-749 875-675t44 159q2 15-10 25.5T880-480q-16 0-28-10t-14-26q-14-138-116-231t-242-93q-140 0-242 93T122-516q-2 16-14 26t-28 10Zm160 0q-17 0-28.5-11t-9.5-26q14-104 92.5-173.5T480-760q107 0 185.5 69.5T758-517q2 15-9.5 26T720-480q-16 0-28.5-8.5T677-512q-12-72-67-120t-130-48q-75 0-130 48t-67 120q-2 15-14.5 23.5T240-480Zm240 296-92 92q-11 11-28 11t-28-11q-11-11-11-28t11-28l108-108v-132q-27-12-43.5-37T380-480q0-42 29-71t71-29q42 0 71 29t29 71q0 30-16.5 55T520-388v132l108 108q11 11 11 28t-11 28q-11 11-28 11t-28-11l-92-92Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntennaFilled.displayName = 'OnesyIconMaterialSettingsInputAntennaFilled';

export default IconMaterialSettingsInputAntennaFilled;
