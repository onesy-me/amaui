import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransgenderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransgenderFilled'

      short_name='Transgender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM440-40v-80h-80v-80h80v-84q-78-14-129-75t-51-141q0-33 9.5-65t28.5-59l-26-26-56 56-56-56 56-57-76-76v103H60v-240h240v80H197l76 76 57-56 56 56-56 57 26 26q27-20 59-29.5t65-9.5q33 0 65 9.5t59 29.5l159-159H660v-80h240v240h-80v-103L661-625q19 28 29 59.5t10 65.5q0 80-51 141t-129 75v84h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTransgenderFilled.displayName = 'OnesyIconMaterialTransgenderFilled';

export default IconMaterialTransgenderFilled;
