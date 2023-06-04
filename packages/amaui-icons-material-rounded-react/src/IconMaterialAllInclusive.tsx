import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInclusive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInclusive'

      short_name='AllInclusive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 17.5q-2.3 0-3.9-1.6T0 12q0-2.3 1.6-3.9t3.9-1.6q.925 0 1.775.325.85.325 1.525.925l1.7 1.55L9 10.65l-1.55-1.4q-.4-.35-.9-.55-.5-.2-1.05-.2-1.45 0-2.475 1.025Q2 10.55 2 12q0 1.45 1.025 2.475Q4.05 15.5 5.5 15.5q.55 0 1.05-.2t.9-.55l7.75-7q.675-.6 1.525-.925.85-.325 1.775-.325 2.3 0 3.9 1.6T24 12q0 2.3-1.6 3.9t-3.9 1.6q-.925 0-1.775-.325-.85-.325-1.525-.925l-1.7-1.55 1.5-1.35 1.55 1.4q.4.35.9.55.5.2 1.05.2 1.45 0 2.475-1.025Q22 13.45 22 12q0-1.45-1.025-2.475Q19.95 8.5 18.5 8.5q-.55 0-1.05.2t-.9.55l-7.75 7q-.675.6-1.525.925-.85.325-1.775.325Z"/>
    </Icon>
  );
});

IconMaterialAllInclusive.displayName = 'AmauiIconMaterialAllInclusive';

export default IconMaterialAllInclusive;
