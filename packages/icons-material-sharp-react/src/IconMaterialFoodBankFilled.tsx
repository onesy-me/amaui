import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoodBankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankFilled'

      short_name='FoodBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240h40v-160q25 0 42.5-17.5T500-460v-120h-40v120h-20v-120h-40v120h-20v-120h-40v120q0 25 17.5 42.5T400-400v160Zm160 0h40v-340q-33 0-56.5 23.5T520-500v120h40v140ZM160-120v-480l320-240 320 240v480H160Z"/>
    </Icon>
  );
});

IconMaterialFoodBankFilled.displayName = 'OnesyIconMaterialFoodBankFilled';

export default IconMaterialFoodBankFilled;
