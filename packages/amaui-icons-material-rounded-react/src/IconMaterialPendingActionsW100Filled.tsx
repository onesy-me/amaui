import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPendingActionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsW100Filled'

      short_name='PendingActions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 20.7q-1.525 0-2.612-1.088Q13.8 18.525 13.8 17q0-1.525 1.088-2.613Q15.975 13.3 17.5 13.3q1.525 0 2.613 1.087Q21.2 15.475 21.2 17t-1.087 2.612Q19.025 20.7 17.5 20.7Zm1.4-1.8q.125.125.25.125t.25-.125q.125-.125.125-.25t-.125-.25l-1.55-1.55V14.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.35q0 .15.05.275.05.125.175.25Zm-13.1.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.775q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H18.2q.625 0 1.063.437.437.438.437 1.063v5.95q-.2-.075-.35-.138-.15-.062-.35-.112V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-2.5v.5q0 .625-.437 1.062Q14.825 7 14.2 7H9.8q-.625 0-1.062-.438Q8.3 6.125 8.3 5.5V5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h6.375q.05.2.125.362.075.163.2.338ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsW100Filled.displayName = 'AmauiIconMaterialPendingActionsW100Filled';

export default IconMaterialPendingActionsW100Filled;
