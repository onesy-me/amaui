import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHeatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHeatW100'

      short_name='EmergencyHeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400q0 74 41.5 135T352-177q-10-14-15-29.5t-5-31.5q0-21 8.5-40t23.5-34l76-75 77 75q15 15 23 34t8 40q0 16-5 31.5T528-177q69-27 110.5-88T680-400q0-50-18.5-94.5T608-574q-20 13-42 19.5t-45 6.5q-63 0-108.5-41T361-692q-39 32-69 67.5t-50.5 73Q221-514 210.5-476T200-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T497-292l-57-56Zm-52-399v39q0 56 38.5 94t94.5 38q19 0 37.5-6t35.5-17l17-11q46 38 71.5 93.5T708-400q0 112-78 190t-190 78q-112 0-190-78t-78-190q0-95 58-188t158-159Zm452 201q-6 0-10-4t-4-10q0-6 4-10t10-4q6 0 10 4t4 10q0 6-4 10t-10 4Zm-14-108v-160h28v160h-28Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHeatW100.displayName = 'OnesyIconMaterialEmergencyHeatW100';

export default IconMaterialEmergencyHeatW100;
