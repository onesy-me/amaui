import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingMinistry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingMinistry'

      short_name='MovingMinistry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21q-.425 0-.712-.288Q1 20.425 1 20V4q0-.425.288-.713Q1.575 3 2 3h12q.425 0 .713.287Q15 3.575 15 4v16q0 .425-.287.712Q14.425 21 14 21H9v-4H7v4Zm1-2h2v-4h6v4h2V5H3Zm2-6h2v-2H5Zm0-4h2V7H5Zm4 4h2v-2H9Zm0-4h2V7H9Zm10.175 4H17q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11h2.175l-.375-.375q-.15-.15-.225-.338-.075-.187-.075-.375 0-.187.075-.375.075-.187.225-.337.3-.3.7-.3.4 0 .7.3l2.1 2.1q.3.3.3.7 0 .4-.3.7l-2.1 2.1q-.3.3-.7.3-.4 0-.7-.3-.15-.15-.225-.338-.075-.187-.075-.375 0-.187.075-.375.075-.187.225-.337ZM5 19v-4h6v4-4H5v4Z"/>
    </Icon>
  );
});

IconMaterialMovingMinistry.displayName = 'AmauiIconMaterialMovingMinistry';

export default IconMaterialMovingMinistry;
