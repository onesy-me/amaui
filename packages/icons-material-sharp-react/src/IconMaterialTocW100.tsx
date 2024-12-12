import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTocW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TocW100'

      short_name='Toc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-338v-28h474v28H172Zm0-128v-28h474v28H172Zm0-128v-28h474v28H172Zm596 262q-8.5 0-14.25-5.46T748-351q0-8.92 5.75-14.96Q759.5-372 768-372t14.25 6.04Q788-359.92 788-351q0 8.08-5.75 13.54Q776.5-332 768-332Zm0-127q-8.5 0-14.25-5.5T748-480q0-8.08 5.75-13.54Q759.5-499 768-499t14.25 5.46Q788-488.08 788-480q0 10-5.75 15.5T768-459Zm0-129q-8.5 0-14.25-5.46T748-607q0-8.92 5.75-14.96Q759.5-628 768-628t14.25 6.04Q788-615.92 788-607q0 8.08-5.75 13.54Q776.5-588 768-588Z"/>
    </Icon>
  );
});

IconMaterialTocW100.displayName = 'OnesyIconMaterialTocW100';

export default IconMaterialTocW100;
