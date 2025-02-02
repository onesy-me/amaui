import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAlt'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" opacity=".3" width="10" x="7" y="14"/><rect height="3" opacity=".3" width="10" x="7" y="5"/><path d="M17,10c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v3c0,1.1,0.9,2,2,2h1v2H7c-1.1,0-2,0.9-2,2v7h2v-3h10v3h2v-7 c0-1.1-0.9-2-2-2h-1v-2H17z M17,14v2H7v-2H17z M10,12v-2h4v2H10z M7,8V5h10v3H7z"/></g></g>
    </Icon>
  );
});

IconMaterialChairAlt.displayName = 'OnesyIconMaterialChairAlt';

export default IconMaterialChairAlt;
