import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCssFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CssFilled'

      short_name='Css'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-420v-40H420q-17 0-28.5-11.5T380-500v-60q0-17 11.5-28.5T420-600h130q13 0 21.5 8.5T580-570q0 13-8.5 21.5T550-540H440v40h100q17 0 28.5 11.5T580-460v60q0 17-11.5 28.5T540-360H410q-13 0-21.5-8.5T380-390q0-13 8.5-21.5T410-420h110Zm260 0v-40H680q-17 0-28.5-11.5T640-500v-60q0-17 11.5-28.5T680-600h130q13 0 21.5 8.5T840-570q0 13-8.5 21.5T810-540H700v40h100q17 0 28.5 11.5T840-460v60q0 17-11.5 28.5T800-360H670q-13 0-21.5-8.5T640-390q0-13 8.5-21.5T670-420h110Zm-620 60q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v21q0 12-9 20.5t-21 8.5q-13 0-21.5-8.5T260-540h-80v120h80q0-12 8.5-21t21.5-9q12 0 21 9t9 21v20q0 17-11.5 28.5T280-360H160Z"/>
    </Icon>
  );
});

IconMaterialCssFilled.displayName = 'OnesyIconMaterialCssFilled';

export default IconMaterialCssFilled;
