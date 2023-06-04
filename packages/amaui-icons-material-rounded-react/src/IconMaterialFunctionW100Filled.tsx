import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunctionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionW100Filled'

      short_name='Function'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 17.35v-.7h1.2L14.775 13 11.6 9.35h-2L8 17.425q-.3 1.525-.862 2.225-.563.7-1.488.7-.8 0-1.325-.45-.525-.45-.525-1.175 0-.475.238-.763.237-.287.612-.287.35 0 .6.25t.25.6q0 .325-.213.562-.212.238-.512.263.125.125.35.212.225.088.5.088.65 0 1.05-.563.4-.562.65-1.787L8.9 9.35h-3v-.7h3.125L9.5 6.1q.225-1.225.763-1.838.537-.612 1.412-.612.8 0 1.325.462.525.463.525 1.188 0 .475-.237.762-.238.288-.613.288-.35 0-.6-.238-.25-.237-.25-.587 0-.325.213-.563.212-.237.537-.262-.125-.15-.387-.25-.263-.1-.538-.1-.575 0-.937.475-.363.475-.538 1.4L9.75 8.65h4.35v.7h-1.575l2.725 3.125 2.725-3.125H16.4v-.7h3.7v.7h-1.2L15.725 13l3.2 3.65H20.1v.7h-3.7v-.7h1.575l-2.725-3.125-2.725 3.125H14.1v.7Z"/>
    </Icon>
  );
});

IconMaterialFunctionW100Filled.displayName = 'AmauiIconMaterialFunctionW100Filled';

export default IconMaterialFunctionW100Filled;
