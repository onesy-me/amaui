import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentW100'

      short_name='AddComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-546v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h106q6 0 10-4t4-10q0-6-4-10t-10-4H494v-106q0-6-4-10t-10-4q-6 0-10 4t-4 10v106H360q-6 0-10 4t-4 10q0 6 4 10t10 4h106ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAddCommentW100.displayName = 'OnesyIconMaterialAddCommentW100';

export default IconMaterialAddCommentW100;
