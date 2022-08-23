import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsScoreTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsScoreTwoTone'
      short_name='SportsScore'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M11,6H9V4h2V6z M15,4h-2v2h2V4z M9,14h2v-2H9V14z M19,10V8h-2v2H19z M19,14v-2h-2v2H19z M13,14h2v-2h-2V14z M19,4h-2v2h2 V4z M13,8V6h-2v2H13z M7,10V8h2V6H7V4H5v16h2v-8h2v-2H7z M15,12h2v-2h-2V12z M11,10v2h2v-2H11z M9,8v2h2V8H9z M13,10h2V8h-2V10z M15,6v2h2V6H15z"/></g></g>
    </Icon>
  );
});

IconMaterialSportsScoreTwoTone.displayName = 'AmauiIconMaterialSportsScoreTwoTone';

export default IconMaterialSportsScoreTwoTone;
