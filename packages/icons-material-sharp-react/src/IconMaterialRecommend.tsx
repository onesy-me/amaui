import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecommend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Recommend'

      short_name='Recommend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-240h258l102-237v-83H496l27-156-43-44-200 218v222q0 33 23.5 56.5T360-240ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialRecommend.displayName = 'OnesyIconMaterialRecommend';

export default IconMaterialRecommend;
