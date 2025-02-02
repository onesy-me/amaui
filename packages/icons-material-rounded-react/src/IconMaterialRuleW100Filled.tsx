import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRuleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleW100Filled'

      short_name='Rule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m665-316-95 95q-4 4-9 3.5t-9-4.5q-4-4-4-9.67 0-5.66 4-9.33l94-94-95-95q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l94 95 95-95q3.67-4 9.33-4 5.67 0 9.67 4t4 9.67q0 5.66-4 9.33l-95 95 95 95q4 4 4 9t-4 9q-4 4-9.67 4-5.66 0-9.33-4l-95-94Zm-25-260 160-160q4-4 10-4.5t10 4.5q4 4.36 4 10.18 0 5.82-4 9.82L662-558q-9 9-21 9t-21-9l-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.67-4 5.66 0 9.33 4l75 76ZM146-354h280q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm0-280h280q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Z"/>
    </Icon>
  );
});

IconMaterialRuleW100Filled.displayName = 'OnesyIconMaterialRuleW100Filled';

export default IconMaterialRuleW100Filled;
