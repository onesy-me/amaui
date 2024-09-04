import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2'

      short_name='Landscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m46-160 138-276q10-20 28.5-32t41.5-12q24 0 44 12.5t29 35.5l27 66q2 6 9 5.5t9-6.5l86-287q14-48 53.5-77t89.5-29q49 0 87.5 28.5T742-657l173 497h-85L666-632q-8-23-25-35.5T601-680q-23 0-40.5 13T535-631l-86 287q-9 28-32.5 46T363-280q-27 0-50-14.5T280-335l-27-66-118 241H46Zm194-400q-50 0-85-35.5T120-680q0-50 35-85t85-35q50 0 85 35t35 85q0 49-35 84.5T240-560Zm0-80q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm123 360ZM240-680Z"/>
    </Icon>
  );
});

IconMaterialLandscape2.displayName = 'AmauiIconMaterialLandscape2';

export default IconMaterialLandscape2;
