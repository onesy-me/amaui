import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestoreFromTrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashFilled'

      short_name='RestoreFromTrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm160-366v126q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-126l36 35q11 11 27.5 11t28.5-12q11-11 11-28t-11-28L508-612q-12-12-28-12t-28 12L348-508q-11 11-11.5 27.5T348-452q11 11 27.5 11.5T404-451l36-35Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashFilled.displayName = 'OnesyIconMaterialRestoreFromTrashFilled';

export default IconMaterialRestoreFromTrashFilled;
