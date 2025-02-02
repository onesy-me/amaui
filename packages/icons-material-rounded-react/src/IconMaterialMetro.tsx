import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMetro = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Metro'

      short_name='Metro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-180v-584q0-32 22-54t54-22h34q24 0 43.5 13t27.5 36l179 473 176-469q9-24 30-38.5t47-14.5h25q34 0 58 24t24 58v578q0 25-17.5 42.5T780-120q-25 0-42.5-17.5T720-180v-430L543-151q-5 14-17 22.5t-27 8.5h-38q-15 0-27-8.5T417-151L240-607v427q0 25-17.5 42.5T180-120q-25 0-42.5-17.5T120-180Z"/>
    </Icon>
  );
});

IconMaterialMetro.displayName = 'OnesyIconMaterialMetro';

export default IconMaterialMetro;
