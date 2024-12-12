import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickPhrasesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrasesFilled'

      short_name='QuickPhrases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-60v-221q-101-8-170.5-82T80-540q0-109 75.5-184.5T340-800h27l-63-64 56-56 160 160-160 160-56-56 63-64h-27q-75 0-127.5 52.5T160-540q0 75 52.5 127.5T340-360h60v107l107-107h113q75 0 127.5-52.5T800-540q0-75-52.5-127.5T620-720h-20v-80h20q109 0 184.5 75.5T880-540q0 109-75.5 184.5T620-280h-80L320-60Z"/>
    </Icon>
  );
});

IconMaterialQuickPhrasesFilled.displayName = 'OnesyIconMaterialQuickPhrasesFilled';

export default IconMaterialQuickPhrasesFilled;
