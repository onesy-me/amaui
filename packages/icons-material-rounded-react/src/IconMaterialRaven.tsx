import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRaven = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Raven'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-240-51 123q-6 15-21.5 21.5T297-95q-15-6-21.5-21.5T275-147l43-104q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l191 78q13 5 12.5 18.5T512-742l-112 42v60l426 271q7 5 11 11.5t6 14.5l28 140q3 17-7.5 30T836-160h-14q-11 0-19-5.5T790-180l-30-60H560v120q0 17-11.5 28.5T520-80q-17 0-28.5-11.5T480-120v-120h-80ZM240-680q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 320Zm0 40h353l-63-40H400q-36 0-67.5-14.5T279-415q-13-14-25-38.5T242-498q0-17 11.5-28.5T282-538q15 0 26 10t14 24q5 28 27 46t51 18h165L320-596v-124q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720v160q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialRaven.displayName = 'OnesyIconMaterialRaven';

export default IconMaterialRaven;
