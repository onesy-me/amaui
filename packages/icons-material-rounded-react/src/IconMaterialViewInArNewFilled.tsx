import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArNewFilled'

      short_name='ViewInArNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 6q-.425 0-.712-.287Q1 5.425 1 5V4q0-1.25.875-2.125T4 1h1q.425 0 .713.287Q6 1.575 6 2t-.287.712Q5.425 3 5 3H4q-.425 0-.712.287Q3 3.575 3 4v1q0 .425-.287.713Q2.425 6 2 6Zm2 17q-1.25 0-2.125-.875T1 20v-1q0-.425.288-.712Q1.575 18 2 18t.713.288Q3 18.575 3 19v1q0 .425.288.712Q3.575 21 4 21h1q.425 0 .713.288Q6 21.575 6 22t-.287.712Q5.425 23 5 23Zm15 0q-.425 0-.712-.288Q18 22.425 18 22t.288-.712Q18.575 21 19 21h1q.425 0 .712-.288Q21 20.425 21 20v-1q0-.425.288-.712Q21.575 18 22 18t.712.288Q23 18.575 23 19v1q0 1.25-.875 2.125T20 23Zm3-17q-.425 0-.712-.287Q21 5.425 21 5V4q0-.425-.288-.713Q20.425 3 20 3h-1q-.425 0-.712-.288Q18 2.425 18 2t.288-.713Q18.575 1 19 1h1q1.25 0 2.125.875T23 4v1q0 .425-.288.713Q22.425 6 22 6ZM12 17.825l1-.575v-4.6l4-2.3V9.175L16 8.6l-4 2.3-4-2.3-1 .575v1.175l4 2.3v4.6ZM11 19.6l-5-2.9q-.475-.275-.737-.737Q5 15.5 5 14.975v-5.8q0-.525.263-.988.262-.462.737-.737l5-2.9q.475-.275 1-.275t1 .275l5 2.9q.475.275.738.737.262.463.262.988v5.8q0 .525-.262.988-.263.462-.738.737l-5 2.9q-.475.275-1 .275t-1-.275Z"/>
    </Icon>
  );
});

IconMaterialViewInArNewFilled.displayName = 'OnesyIconMaterialViewInArNewFilled';

export default IconMaterialViewInArNewFilled;
