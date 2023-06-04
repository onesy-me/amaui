import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubbleChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartFilled'

      short_name='BubbleChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-1.65 0-2.825-1.175Q3 15.65 3 14q0-1.65 1.175-2.825Q5.35 10 7 10q1.65 0 2.825 1.175Q11 12.35 11 14q0 1.65-1.175 2.825Q8.65 18 7 18Zm9.5-4q-2.3 0-3.9-1.6T11 8.5q0-2.3 1.6-3.9T16.5 3q2.3 0 3.9 1.6T22 8.5q0 2.3-1.6 3.9T16.5 14Zm-2 7q-1.25 0-2.125-.875T11.5 18q0-1.25.875-2.125T14.5 15q1.25 0 2.125.875T17.5 18q0 1.25-.875 2.125T14.5 21Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartFilled.displayName = 'AmauiIconMaterialBubbleChartFilled';

export default IconMaterialBubbleChartFilled;
