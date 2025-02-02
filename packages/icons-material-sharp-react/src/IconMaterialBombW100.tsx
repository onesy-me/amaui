import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBombW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BombW100'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361.24-112Q258-112 185-184.68 112-257.35 112-360q0-105 75.5-176.5T369-608q8 0 16.5.5T402-606l45-81 65 37 5-8q20-34 57-44t71 10l12 7-14 24-12-7q-24-14-51-7t-40 31l-4 8 65 36-47 82q23 38 39 78.5t16 85.5q0 102-72.26 172-72.27 70-175.5 70Zm-.24-27q92 0 156-64.5T581-359q0-31-8.5-61T547-477l-26-41 41-72-104-60-41 70h-48q-94 0-161.5 63.5T140-361q0 92 64.5 157T361-139Zm0-220Zm387-255v-28h68v28h-68ZM586-788v-68h28v68h-28Zm162 40-19-19 48-49 19 20-48 48Z"/>
    </Icon>
  );
});

IconMaterialBombW100.displayName = 'OnesyIconMaterialBombW100';

export default IconMaterialBombW100;
