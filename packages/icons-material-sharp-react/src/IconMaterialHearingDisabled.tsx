import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHearingDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingDisabled'

      short_name='HearingDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 526-321q-20 16-32.5 28t-21 24q-8.5 12-15.5 27.5T442-202q-20 58-62.5 90T280-80q-66 0-113-47t-47-113h80q0 33 23.5 56.5T280-160q31 0 52.5-20t39.5-66q11-27 20-46t20-33.5q11-14.5 25-26.5t33-25L204-643q-2 11-3 21.5t-1 21.5h-80q0-29 5-55.5t15-51.5L27-820l57-57L876-85l-57 57Zm-73-301-57-57q35-47 53-101.5T760-600q0-73-27.5-139T654-856l58-56q62 63 95 143.5T840-600q0 73-24 142t-70 129ZM637-438l-58-58q11-23 16-49t5-55q0-85-57.5-142.5T400-800q-26 0-51 6.5T301-774l-59-59q35-23 75-35t83-12q119 0 199.5 80.5T680-600q0 45-10.5 85.5T637-438ZM497-578 377-698q5-2 11-2h12q42 0 71 29t29 71q0 6-.5 11.5T497-578Zm-97 78q-42 0-71-29.5T300-600q0-13 3-25t10-23l136 136q-11 6-23.5 9t-25.5 3Z"/>
    </Icon>
  );
});

IconMaterialHearingDisabled.displayName = 'OnesyIconMaterialHearingDisabled';

export default IconMaterialHearingDisabled;
