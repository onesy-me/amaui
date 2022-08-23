import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTempleHinduTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduTwoTone'
      short_name='TempleHindu'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="13.51,5 10.49,5 9.89,7 14.11,7"/><polygon opacity=".3" points="14.71,9 9.29,9 8.69,11 15.31,11"/><polygon opacity=".3" points="15.91,13 8.09,13 7.49,15 4,15 4,20 9,20 9,15 15,15 15,20 20,20 20,15 16.51,15"/><path d="M20,11v2h-2L15,3V1h-2v2h-2.03V1h-2v2.12L6,13H4v-2H2v11h9v-5h2v5h9V11H20z M10.49,5h3.02l0.6,2H9.89L10.49,5z M9.29,9 h5.42l0.6,2H8.69L9.29,9z M20,20h-5v-5H9v5H4v-5h3.49l0.6-2h7.82l0.6,2H20V20z"/></g></g>
    </Icon>
  );
});

IconMaterialTempleHinduTwoTone.displayName = 'AmauiIconMaterialTempleHinduTwoTone';

export default IconMaterialTempleHinduTwoTone;
