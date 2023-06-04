import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOnW100Filled'

      short_name='RepeatOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 21.7q-.65 0-1.075-.425Q2.3 20.85 2.3 20.2V3.8q0-.65.425-1.075Q3.15 2.3 3.8 2.3h16.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425Zm13.6-4.3H5.5l2.025-2.025q.1-.1.088-.238Q7.6 15 7.5 14.9q-.125-.125-.25-.125T7 14.9l-2.325 2.325q-.225.225-.225.525 0 .3.225.525l2.35 2.35q.1.1.225.1t.25-.125q.125-.125.125-.25T7.5 20.1l-2-2h11.85q.325 0 .538-.212.212-.213.212-.538v-3.625q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25ZM6.6 6.6h11.9l-2.025 2.025q-.1.1-.1.225t.125.25q.125.125.25.125T17 9.1l2.325-2.325q.225-.225.225-.525 0-.3-.225-.525l-2.35-2.35q-.1-.1-.237-.088-.138.013-.238.113-.125.125-.125.25t.125.25l2 2H6.65q-.325 0-.537.212-.213.213-.213.538v3.625q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25Z"/>
    </Icon>
  );
});

IconMaterialRepeatOnW100Filled.displayName = 'AmauiIconMaterialRepeatOnW100Filled';

export default IconMaterialRepeatOnW100Filled;
