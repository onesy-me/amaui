import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentW100Filled'

      short_name='AddComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-292-61 61q-14 14-32.5 6.34Q132-232.31 132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm222-254v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Z"/>
    </Icon>
  );
});

IconMaterialAddCommentW100Filled.displayName = 'OnesyIconMaterialAddCommentW100Filled';

export default IconMaterialAddCommentW100Filled;
