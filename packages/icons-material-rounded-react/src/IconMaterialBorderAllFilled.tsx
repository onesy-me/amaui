import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllFilled'

      short_name='BorderAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120q-33 0-56.5-23.5T520-200v-160q0-33 23.5-56.5T600-440h160q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H600Zm0-400q-33 0-56.5-23.5T520-600v-160q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H600Zm-400 0q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v160q0 33-23.5 56.5T360-520H200Zm0 400q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h160q33 0 56.5 23.5T440-360v160q0 33-23.5 56.5T360-120H200Z"/>
    </Icon>
  );
});

IconMaterialBorderAllFilled.displayName = 'OnesyIconMaterialBorderAllFilled';

export default IconMaterialBorderAllFilled;
