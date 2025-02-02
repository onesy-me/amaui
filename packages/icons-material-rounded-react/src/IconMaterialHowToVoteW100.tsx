import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHowToVoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVoteW100'

      short_name='HowToVote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-120q-26 0-43-17t-17-43v-89q0-11 3.5-21.5T175-309l109-123q4-5 10-5t11 5q4 4 4 9t-4 10L188-280h584L657-411q-4-5-4-10t4-9q5-5 11-5t10 5l107 121q8 8 11.5 18.5T800-269v89q0 26-17 43t-43 17H220Zm0-28h520q13 0 22.5-9.5T772-180v-72H188v72q0 13 9.5 22.5T220-148Zm219-261L326-524q-18-18-17.5-42.5T327-609l169-169q18-18 42-18t42 18l114 114q18 18 18 42t-18 42L523-409q-18 18-42 18t-42-18Zm234-190q8-8 8-23t-8-23L561-757q-8-8-23-8t-23 8L346-588q-8 8-8 23t8 23l112 112q8 8 23 8t23-8l169-169ZM188-148v-104 104Z"/>
    </Icon>
  );
});

IconMaterialHowToVoteW100.displayName = 'OnesyIconMaterialHowToVoteW100';

export default IconMaterialHowToVoteW100;
