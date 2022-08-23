import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPivotTableChartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChartTwoTone'
      short_name='PivotTableChart'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M21,5c0-1.1-0.9-2-2-2h-9v5h11V5z"/><path d="M3,19c0,1.1,0.9,2,2,2h3V10H3V19z"/><path d="M3,5v3h5V3H5C3.9,3,3,3.9,3,5z"/><path d="M18,9l-4,4h3v2c0,1.1-0.9,2-2,2h-2v-3l-4,4l4,4v-3h2c2.21,0,4-1.79,4-4v-2h3L18,9z"/></g></g>
    </Icon>
  );
});

IconMaterialPivotTableChartTwoTone.displayName = 'AmauiIconMaterialPivotTableChartTwoTone';

export default IconMaterialPivotTableChartTwoTone;
