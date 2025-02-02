import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPediatricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100'

      short_name='Pediatrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-650v-28h140v-110h28v110h140v28H326Zm6 496v-366q0-37.5 26.25-63.75T422-610h116q37.5 0 63.75 26.25T628-520v366H332Zm28-28h240v-338q0-26.35-17.83-44.17Q564.35-582 538-582H422q-26.35 0-44.17 17.83Q360-546.35 360-520v53h94v28h-94v114h94v28h-94v115Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100.displayName = 'OnesyIconMaterialPediatricsW100';

export default IconMaterialPediatricsW100;
