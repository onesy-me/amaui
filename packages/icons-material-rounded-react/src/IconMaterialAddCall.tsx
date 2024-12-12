import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCall'

      short_name='AddCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-640h-80q-17 0-28.5-11.5T520-680q0-17 11.5-28.5T560-720h80v-80q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v80h80q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640h-80v80q0 17-11.5 28.5T680-520q-17 0-28.5-11.5T640-560v-80Zm158 520q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
    </Icon>
  );
});

IconMaterialAddCall.displayName = 'OnesyIconMaterialAddCall';

export default IconMaterialAddCall;
