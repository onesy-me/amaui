import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContractDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractDeleteFilled'

      short_name='ContractDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m675-99-56-56 84-85-84-85 56-56 85 84 85-84 56 56-84 85 84 85-56 56-85-84-85 84ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-80q-50 0-85-35t-35-85v-120h120v-560h600v415q-19-7-39-10.5t-41-3.5v-321H320v480h214q-7 20-10.5 40t-3.5 40q0 44 15.5 85T582-80H240Z"/>
    </Icon>
  );
});

IconMaterialContractDeleteFilled.displayName = 'OnesyIconMaterialContractDeleteFilled';

export default IconMaterialContractDeleteFilled;
