import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTotalDissolvedSolidsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TotalDissolvedSolidsW100Filled'

      short_name='TotalDissolvedSolids'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-488q24-70 87.5-150T480-812q103 94 166.5 174T734-488H226Zm522 81q0 11-1 22t-3 22L514-134q-11 2-21.5 2.5T471-132l277-275Zm-179-1h41L360-159q-7-3-13.5-6.5T334-174l235-234Zm-179 0h41L264-241q-5-6-8.5-12t-7.5-13l142-142Zm-178 0h41l-39 39q-2-10-2-19.5V-408Z"/>
    </Icon>
  );
});

IconMaterialTotalDissolvedSolidsW100Filled.displayName = 'OnesyIconMaterialTotalDissolvedSolidsW100Filled';

export default IconMaterialTotalDissolvedSolidsW100Filled;
