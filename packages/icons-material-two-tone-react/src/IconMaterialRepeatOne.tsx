import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOne = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOne'

      short_name='RepeatOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z"/>
    </Icon>
  );
});

IconMaterialRepeatOne.displayName = 'OnesyIconMaterialRepeatOne';

export default IconMaterialRepeatOne;
