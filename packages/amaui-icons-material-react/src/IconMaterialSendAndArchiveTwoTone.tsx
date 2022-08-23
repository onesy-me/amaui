import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveTwoTone'
      short_name='SendAndArchive'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M5,7.01v3.49l6,1.5l-6,1.5v3.49l5.39-2.27l0,0c0.6-1.74,1.86-3.16,3.48-3.97c0,0,0,0,0,0L5,7.01z"/></g><g><path d="M11,12l-6-1.5V7.01l8.87,3.73c0.94-0.47,2-0.75,3.13-0.75c0.1,0,0.19,0.01,0.28,0.01L3,4v16l7-2.95c0-0.02,0-0.03,0-0.05 c0-0.8,0.14-1.56,0.39-2.28L5,16.99V13.5L11,12z"/></g><g><path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S19.76,12,17,12z M17,20l-3-3h2.5v-3h1v3H20L17,20z"/></g></g></g>
    </Icon>
  );
});

IconMaterialSendAndArchiveTwoTone.displayName = 'AmauiIconMaterialSendAndArchiveTwoTone';

export default IconMaterialSendAndArchiveTwoTone;
