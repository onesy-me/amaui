import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiquorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorW100Filled'

      short_name='Liquor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-28h63v-143q-31-6-47-26.5T172-378v-264h154v264q0 26-16.5 47.5T263-303v143h63v28H172Zm28-339h98v-143h-98v143Zm288 339v-435l122-48v-213h96v213l122 47v436H488Zm150-623h40v-45h-40v45ZM516-449h284v-100l-122-47v-131h-40v131l-122 47v100Zm0 289h284v-116H516v116Z"/>
    </Icon>
  );
});

IconMaterialLiquorW100Filled.displayName = 'OnesyIconMaterialLiquorW100Filled';

export default IconMaterialLiquorW100Filled;
