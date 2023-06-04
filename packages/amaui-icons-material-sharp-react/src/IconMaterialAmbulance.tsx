import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbulance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ambulance'

      short_name='Ambulance'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 256V96h80v160h-80Zm-177 57L143 193l57-57 120 120-57 57Zm-143 703V656l98-280h142v-80h131q-24 34-37.5 74.5T440 456H274l-59 160h276q17 24 38 44.5t47 35.5H200v160h560V733q21-3 41-9t39-15v307H720v-80H240v80H120Zm120-200h160v-80H240v80Zm320 0h160v-80H560v80Zm-360 40V696v160Zm491-310 139-138-42-42-97 95-39-39-42 43 81 81Zm29 110q-83 0-141.5-58.5T520 456q0-83 58.5-141.5T720 256q83 0 141.5 58.5T920 456q0 83-58.5 141.5T720 656Z"/>
    </Icon>
  );
});

IconMaterialAmbulance.displayName = 'AmauiIconMaterialAmbulance';

export default IconMaterialAmbulance;
