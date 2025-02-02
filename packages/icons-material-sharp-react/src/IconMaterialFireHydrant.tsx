import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireHydrant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrant'

      short_name='FireHydrant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h80v-120H120v-240h120v-120h-80v-80h94q25-70 86.5-115T480-880q78 0 139.5 45T706-720h94v80h-80v120h120v240H720v120h80v80H160Zm181-640h278q-21-36-57.5-58T480-800q-45 0-81.5 22T341-720Zm-21 560h320v-200h120v-80H640v-200H320v200H200v80h120v200Zm160-100q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T420-400q0-25 17.5-42.5T480-460q25 0 42.5 17.5T540-400q0 25-17.5 42.5T480-340Zm0-60Zm0-240Z"/>
    </Icon>
  );
});

IconMaterialFireHydrant.displayName = 'OnesyIconMaterialFireHydrant';

export default IconMaterialFireHydrant;
