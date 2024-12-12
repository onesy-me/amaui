import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingMinistry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingMinistry'

      short_name='MovingMinistry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-720h560v720H360v-160h-80v160H40Zm80-80h80v-160h240v160h80v-560H120v560Zm80-240h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm420 260-56-56 43-44H640v-80h127l-43-44 56-56 140 140-140 140ZM200-200v-160h240v160-160H200v160Z"/>
    </Icon>
  );
});

IconMaterialMovingMinistry.displayName = 'OnesyIconMaterialMovingMinistry';

export default IconMaterialMovingMinistry;
