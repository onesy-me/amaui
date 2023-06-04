import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRvHookupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupW100Filled'

      short_name='RvHookup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.05 19.7q-.125-.125-.125-.25t.125-.25l1.5-1.5H11.1q-.1.875-.762 1.437-.663.563-1.538.563t-1.525-.563q-.65-.562-.775-1.437H5.45q-.975 0-1.662-.688-.688-.687-.688-1.662v-4.7h5.3v-3H3.425q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1H14q.65 0 1.075.425.425.425.425 1.075V17h5.05l-1.525-1.525q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l1.825 1.825q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-1.85 1.85q-.1.1-.225.1t-.25-.125ZM9.2 10.65h5.6v-2.2q0-.3-.25-.55-.25-.25-.55-.25H9.2ZM8.8 19q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.162Q9.475 15.7 8.8 15.7t-1.162.488q-.488.487-.488 1.162 0 .675.488 1.162Q8.125 19 8.8 19Z"/>
    </Icon>
  );
});

IconMaterialRvHookupW100Filled.displayName = 'AmauiIconMaterialRvHookupW100Filled';

export default IconMaterialRvHookupW100Filled;
