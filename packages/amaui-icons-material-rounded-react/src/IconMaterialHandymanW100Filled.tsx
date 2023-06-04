import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandymanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandymanW100Filled'

      short_name='Handyman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 20.675q-.15 0-.275-.05-.125-.05-.25-.175l-5.25-5.225v-.45L14.7 12.65h.45l5.25 5.25q.125.125.162.263.038.137.038.287 0 .15-.05.275-.05.125-.175.25l-1.5 1.475q-.125.125-.25.175-.125.05-.275.05Zm0-.65 1.6-1.6-5.025-5.025-1.6 1.6Zm-12.725.65q-.15 0-.275-.05-.125-.05-.25-.175l-1.525-1.5q-.125-.125-.162-.25-.038-.125-.038-.275 0-.15.038-.288.037-.137.162-.262l5.1-5.1h2.075l.75-.75L7.225 7.75H5.8L3.425 5.375 5.35 3.45l2.375 2.375V7.25L12 11.525l3.05-3.05L12.975 6.4l1.05-1.05h-2.1l-.325-.3 2.625-2.625.3.3V4.85l1.05-1.05 4.1 4.05q.35.325.513.75.162.425.162.9 0 .3-.075.587-.075.288-.225.563l-2.025-2.025L16.6 10.05l-1.075-1.075-4.3 4.3V15.4L6.15 20.45q-.125.125-.25.175-.125.05-.275.05Zm0-.675 5.125-5.125-1.6-1.6L4.025 18.4Z"/>
    </Icon>
  );
});

IconMaterialHandymanW100Filled.displayName = 'AmauiIconMaterialHandymanW100Filled';

export default IconMaterialHandymanW100Filled;
