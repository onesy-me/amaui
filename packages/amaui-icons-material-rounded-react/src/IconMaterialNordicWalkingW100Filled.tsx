import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNordicWalkingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalkingW100Filled'

      short_name='NordicWalking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.25 22.35q-.15 0-.25-.1t-.1-.25v-7.6h.7V22q0 .15-.1.25t-.25.1ZM5 22.35q-.175 0-.275-.112-.1-.113-.05-.288L6.3 14.4H7l-1.675 7.675q-.025.125-.112.2-.088.075-.213.075ZM13.5 5.1q-.65 0-1.125-.475T11.9 3.5q0-.65.475-1.125T13.5 1.9q.65 0 1.125.475T15.1 3.5q0 .65-.475 1.125T13.5 5.1ZM8.275 22.35q-.175 0-.288-.112-.112-.113-.062-.288L10.65 7.8l-2.8 1.175q-.225.1-.362.287-.138.188-.138.438V12q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V9.7q0-.45.25-.825.25-.375.675-.55l3.5-1.45q.675-.275 1.2-.163.525.113.875.638l.975 1.575q.6.975 1.625 1.687 1.025.713 2.3.938.125.025.213.125.087.1.087.225 0 .175-.112.275-.113.1-.263.075-1.425-.2-2.663-1.088-1.237-.887-2.137-2.437L12.2 13.7l1.7 1.625q.225.2.338.487.112.288.112.588V22q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.875q0-.175-.062-.313-.063-.137-.188-.262l-2.9-2.8-1.9 8.325q-.025.125-.112.2-.088.075-.213.075Z"/>
    </Icon>
  );
});

IconMaterialNordicWalkingW100Filled.displayName = 'AmauiIconMaterialNordicWalkingW100Filled';

export default IconMaterialNordicWalkingW100Filled;
