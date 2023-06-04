import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreTimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeW100Filled'

      short_name='MoreTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7q-1.6 0-3-.6t-2.45-1.65Q4.5 16.4 3.9 15q-.6-1.4-.6-3 0-3.2 2.25-5.45T11 4.3q.45 0 .863.037.412.038.837.138.125.025.213.137.087.113.087.238 0 .2-.113.287-.112.088-.312.038-.375-.1-.763-.138Q11.425 5 11 5 8.1 5 6.05 7.05 4 9.1 4 12q0 2.9 2.05 4.95Q8.1 19 11 19q2.9 0 4.95-2.05Q18 14.9 18 12q0-.175-.012-.363-.013-.187-.038-.387-.025-.175.075-.288.1-.112.275-.112.125 0 .213.075.087.075.112.2.05.2.063.437.012.238.012.438 0 3.2-2.25 5.45T11 19.7Zm7.35-10.85q-.15 0-.25-.1T18 8.5V5.85h-2.65q-.15 0-.25-.1T15 5.5q0-.15.1-.25t.25-.1H18V2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.7V8.5q0 .15-.1.25t-.25.1ZM14 15.5l-3.125-3.125q-.125-.125-.175-.25-.05-.125-.05-.275v-4.5q0-.15.1-.25T11 7q.15 0 .25.1t.1.25v4.5L14.5 15q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeW100Filled.displayName = 'AmauiIconMaterialMoreTimeW100Filled';

export default IconMaterialMoreTimeW100Filled;
