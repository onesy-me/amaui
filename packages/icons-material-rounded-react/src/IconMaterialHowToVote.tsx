import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToVote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVote'

      short_name='HowToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-152q0-14 5-28t15-25l62-70q11-13 28.5-13.5T260-437q11 11 12 27t-10 28l-55 62h546l-53-60q-11-12-10-28t12-27q12-12 29.5-11.5T760-433l60 68q10 11 15 25t5 28v152q0 33-23.5 56.5T760-80H200Zm0-80h560v-80H200v80Zm225-225L284-526q-23-23-22.5-56.5T285-639l196-196q23-23 57-24t57 22l141 141q23 23 24 56t-22 56L538-384q-23 23-56.5 22.5T425-385Zm255-254L539-780 341-582l141 141 198-198ZM200-160v-80 80Z"/>
    </Icon>
  );
});

IconMaterialHowToVote.displayName = 'OnesyIconMaterialHowToVote';

export default IconMaterialHowToVote;
