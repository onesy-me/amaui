import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBusiness = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusiness'

      short_name='AddBusiness'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="15.36,9 3.64,9 3.04,12 15.96,12"/><rect height="2" width="15" x="2" y="4"/><path d="M15,17h2v-3h1v-2l-1-5H2l-1,5v2h1v6h9v-6h4V17z M9,18H4v-4h5V18z M3.04,12l0.6-3h11.72l0.6,3H3.04z"/><polygon points="20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20 23,18"/></g></g>
    </Icon>
  );
});

IconMaterialAddBusiness.displayName = 'OnesyIconMaterialAddBusiness';

export default IconMaterialAddBusiness;
