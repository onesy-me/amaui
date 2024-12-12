import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPatternW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PatternW100Filled'

      short_name='Pattern'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200q-16.5 0-28.25-11.75T200-240q0-16.5 11.75-28.25T240-280q5 0 8.5 1t7.5 3l188-188q-5-11-3-23t11-21q9-9 21-11t23 3l188-188q-1-4-2.5-7.5T680-720q0-16.5 11.75-28.25T720-760q16.5 0 28.25 11.75T760-720q0 16.5-11.75 28.25T720-680q-16 0-16-4L516-496q5 11 3 23t-10.71 20.71Q499-443 487-441t-23-3L276-256l2 2h164q5-12 15-19t22.7-7q13.3 0 23.8 7t14.5 19h164q5-12 15-19t23-7q16.5 0 28.25 11.75T760-240q0 16.5-11.75 28.25T720-200q-13 0-23-7t-15-19H518q-4 12-14.66 19T480-200q-13 0-23-7t-15-19H278q-4 12-14.74 19-10.73 7-23.26 7Zm0-240q-16.5 0-28.25-11.75T200-480q0-16.5 11.75-28.25T240-520q16.5 0 28.25 11.75T280-480q0 16.5-11.75 28.25T240-440Zm0-240q-16.5 0-28.25-11.75T200-720q0-16.5 11.75-28.25T240-760q16.5 0 28.25 11.75T280-720q0 16.5-11.75 28.25T240-680Zm240 0q-16.5 0-28.25-11.75T440-720q0-16.5 11.75-28.25T480-760q16.5 0 28.25 11.75T520-720q0 16.5-11.75 28.25T480-680Zm240 240q-16.5 0-28.25-11.75T680-480q0-16.5 11.75-28.25T720-520q16.5 0 28.25 11.75T760-480q0 16.5-11.75 28.25T720-440Z"/>
    </Icon>
  );
});

IconMaterialPatternW100Filled.displayName = 'OnesyIconMaterialPatternW100Filled';

export default IconMaterialPatternW100Filled;
