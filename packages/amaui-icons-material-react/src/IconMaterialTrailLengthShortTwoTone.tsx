import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortTwoTone'
      short_name='TrailLengthShort'

      {...props}
    >
      <path d="M15 17q-1.825 0-3.188-1.137Q10.45 14.725 10.1 13H4v-2h6.1q.125-.575.338-1.075.212-.5.562-.925H6V7h9q2.075 0 3.538 1.462Q20 9.925 20 12q0 2.075-1.462 3.537Q17.075 17 15 17Zm0-2q1.25 0 2.125-.875T18 12q0-1.25-.875-2.125T15 9q-1.25 0-2.125.875T12 12q0 1.25.875 2.125T15 15Zm-8 2v-2h3v2Zm8-5Z"/>
    </Icon>
  );
});

export default IconMaterialTrailLengthShortTwoTone;
