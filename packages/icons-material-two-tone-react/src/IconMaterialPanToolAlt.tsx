import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAlt'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M17.08,19h-6.55l-3.7-3.78L11,16.11V5.5C11,5.22,11.22,5,11.5,5S12,5.22,12,5.5v6.18h1.76L18,13.56L17.08,19 z" opacity=".3"/><path d="M18.89,11.77l-3.8-1.67C14.96,10.04,14.81,10,14.65,10H14V5.5C14,4.12,12.88,3,11.5,3S9,4.12,9,5.5v8.15l-1.87-0.4 c-0.19-0.03-1.02-0.15-1.73,0.56L4,15.22l5.12,5.19C9.49,20.79,10,21,10.53,21h6.55c0.98,0,1.81-0.7,1.97-1.67l0.92-5.44 C20.12,13.03,19.68,12.17,18.89,11.77z M17.08,19h-6.55l-3.7-3.78L11,16.11V5.5C11,5.22,11.22,5,11.5,5S12,5.22,12,5.5v6.18h1.76 L18,13.56L17.08,19z"/></g>
    </Icon>
  );
});

IconMaterialPanToolAlt.displayName = 'OnesyIconMaterialPanToolAlt';

export default IconMaterialPanToolAlt;
