import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortByAlphaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaW100Filled'

      short_name='SortByAlpha'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.325 16.45q-.2 0-.3-.138-.1-.137-.025-.337l3.375-8.1q.05-.125.187-.225.138-.1.288-.1.15 0 .288.1.137.1.187.225l3.3 8.025q.1.225-.012.388-.113.162-.363.162-.1 0-.2-.063-.1-.062-.15-.162L9.1 14.1H4.55l-.925 2.15q-.05.075-.125.137-.075.063-.175.063Zm1.475-3h4L6.85 8.6h-.1Zm9.9 3q-.2 0-.325-.125T14.25 16q0-.075.025-.188.025-.112.075-.162L19.5 8.2h-4.725q-.125 0-.225-.1t-.1-.225q0-.125.1-.225t.225-.1h5.175q.2 0 .325.125T20.4 8q0 .075-.025.188-.025.112-.075.162l-5.15 7.45h4.975q.125 0 .225.1t.1.225q0 .125-.1.225t-.225.1Zm-4.125-11.7q-.275 0-.387-.238-.113-.237.087-.437l1.45-1.45q.05-.05.275-.1.025 0 .275.1l1.45 1.45q.2.2.087.437-.112.238-.387.238ZM12 21.475q-.025 0-.275-.1l-1.45-1.45q-.2-.2-.087-.437.112-.238.387-.238h2.85q.275 0 .387.238.113.237-.087.437l-1.45 1.45q-.05.05-.275.1Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaW100Filled.displayName = 'AmauiIconMaterialSortByAlphaW100Filled';

export default IconMaterialSortByAlphaW100Filled;
