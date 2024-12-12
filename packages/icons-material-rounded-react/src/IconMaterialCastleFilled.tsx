import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleFilled'

      short_name='Castle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-360q0-17 11.5-28.5T80-600q17 0 28.5 11.5T120-560v40h80v-280q0-17 11.5-28.5T240-840q17 0 28.5 11.5T280-800v40h80v-40q0-17 11.5-28.5T400-840q17 0 28.5 11.5T440-800v40h80v-40q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v40h80v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v280h80v-40q0-17 11.5-28.5T880-600q17 0 28.5 11.5T920-560v360q0 33-23.5 56.5T840-120H600q-17 0-28.5-11.5T560-160v-80q0-33-23.5-56.5T480-320q-33 0-56.5 23.5T400-240v80q0 17-11.5 28.5T360-120H120q-33 0-56.5-23.5T40-200Zm330-280h60q5 0 7.5-2.5t2.5-7.5v-70q0-17-11.5-28.5T400-600q-17 0-28.5 11.5T360-560v70q0 5 2.5 7.5t7.5 2.5Zm160 0h60q5 0 7.5-2.5t2.5-7.5v-70q0-17-11.5-28.5T560-600q-17 0-28.5 11.5T520-560v70q0 5 2.5 7.5t7.5 2.5Z"/>
    </Icon>
  );
});

IconMaterialCastleFilled.displayName = 'OnesyIconMaterialCastleFilled';

export default IconMaterialCastleFilled;
