import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalMaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMaskW100Filled'

      short_name='MedicalMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-254q-68 0-134.5-5.5T212-273v-78q-45-11-73-47t-28-82q0-46 28-82t73-47v-100q67 8 133.5 13.5T480-690q68 0 134.5-6T748-709v100q45 11 73 47t28 82q0 46-28 82t-73 47v78q-67 7-133.5 13T480-254Zm0-113q43 0 85-6t84-17v-28q-42 11-84 17t-85 6q-43 0-85-6t-84-17v29q42 11 84 16.5t85 5.5Zm-268-13v-200q-32 11-52.5 38.5T139-480q0 34 20.5 61.5T212-380Zm536 0q32-11 52.5-38.5T821-480q0-35-20.5-62T748-580v200ZM480-526q43 0 85-6t84-17v-28q-42 11-84 17t-85 6q-43 0-85-6t-84-17v29q42 11 84 16.5t85 5.5Z"/>
    </Icon>
  );
});

IconMaterialMedicalMaskW100Filled.displayName = 'OnesyIconMaterialMedicalMaskW100Filled';

export default IconMaterialMedicalMaskW100Filled;
