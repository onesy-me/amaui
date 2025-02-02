import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesW100Filled'

      short_name='Subtitles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm92-138h284q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H284q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm108-138h284q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H392q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-107.96 0q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm392 138q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesW100Filled.displayName = 'OnesyIconMaterialSubtitlesW100Filled';

export default IconMaterialSubtitlesW100Filled;
