import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialApprovalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApprovalW100Filled'

      short_name='Approval'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-212q-25 0-42.5-17.5T212-272v-100q0-26 17-43t43-17h416q26 0 43 17t17 43v100q0 25-17.5 42.5T688-212H272Zm0-108h416q14 0 23-9t9-23v-20q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v20q0 14 9 23t23 9Zm184-144L347-610q-7-10-10.5-21t-1.5-23q8-59 45-96.5T480-788q63 0 100 37.5t45 96.5q2 12-1.5 23T613-610L504-464q-9 12-24 12t-24-12Z"/>
    </Icon>
  );
});

IconMaterialApprovalW100Filled.displayName = 'OnesyIconMaterialApprovalW100Filled';

export default IconMaterialApprovalW100Filled;
