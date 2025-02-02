import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThunderstormW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormW100'

      short_name='Thunderstorm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m539-49 59-66-45-23q-14-7-17-21t7-25l57-65q2-2 4.5-3.5t5.5-1.5q9 0 13 8t-2 15l-59 66 45 23q14 7 17 21t-7 25l-57 65q-2 2-4.5 3.5T550-26q-9 0-13-8t2-15Zm-240 0 59-66-45-23q-14-7-17-21t7-25l57-65q2-2 4.5-3.5t5.5-1.5q9 0 13 8t-2 15l-59 66 45 23q14 7 17 21t-7 25l-57 65q-2 2-4.5 3.5T310-26q-9 0-13-8t2-15Zm1-297q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-77-54.5-131.5T480-826q-56 0-102 30.5T309-714l-3 8h-8q-68 2-116 50t-48 116q0 69 48.5 117.5T300-374Zm180-226Z"/>
    </Icon>
  );
});

IconMaterialThunderstormW100.displayName = 'OnesyIconMaterialThunderstormW100';

export default IconMaterialThunderstormW100;
