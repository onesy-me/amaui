import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThunderstormFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormFilled'

      short_name='Thunderstorm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.55 24 2.35-2.675-2-1L14.8 17h2.65l-2.35 2.675 2 1L14.2 24Zm-6 0 2.35-2.675-2-1L8.8 17h2.65L9.1 19.675l2 1L8.2 24Zm1.95-8q-2.275 0-3.887-1.613Q2 12.775 2 10.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 2 12 2q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 9.725 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Z"/>
    </Icon>
  );
});

IconMaterialThunderstormFilled.displayName = 'AmauiIconMaterialThunderstormFilled';

export default IconMaterialThunderstormFilled;
