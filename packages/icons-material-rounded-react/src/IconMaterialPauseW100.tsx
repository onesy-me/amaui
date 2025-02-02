import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseW100'

      short_name='Pause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-252q-11 0-19.5-8.5T546-280v-400q0-11 8.5-19.5T574-708h106q11 0 19.5 8.5T708-680v400q0 11-8.5 19.5T680-252H574Zm-294 0q-11 0-19.5-8.5T252-280v-400q0-11 8.5-19.5T280-708h106q11 0 19.5 8.5T414-680v400q0 11-8.5 19.5T386-252H280Zm294-28h106v-400H574v400Zm-294 0h106v-400H280v400Zm0-400v400-400Zm294 0v400-400Z"/>
    </Icon>
  );
});

IconMaterialPauseW100.displayName = 'OnesyIconMaterialPauseW100';

export default IconMaterialPauseW100;
