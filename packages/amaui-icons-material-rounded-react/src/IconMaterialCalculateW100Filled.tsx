import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalculateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateW100Filled'

      short_name='Calculate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 8.8h3.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm6.75 8.05h3.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-2.5h3.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-5 3.25q.15 0 .25-.1t.1-.25V15.6h1.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9.1v-1.65q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H6.75q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1H8.4v1.65q0 .15.1.25t.25.1Zm5.1-7.5q.125.125.25.125t.25-.125l1.15-1.15 1.175 1.175q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25L16 8.45l1.175-1.175q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125L15.5 7.95l-1.175-1.175q-.075-.1-.212-.1-.138 0-.263.125t-.125.25q0 .125.125.25L15 8.45l-1.175 1.175q-.1.1-.1.225t.125.25ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCalculateW100Filled.displayName = 'AmauiIconMaterialCalculateW100Filled';

export default IconMaterialCalculateW100Filled;
