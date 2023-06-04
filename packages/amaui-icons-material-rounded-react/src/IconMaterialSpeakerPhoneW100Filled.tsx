import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneW100Filled'

      short_name='SpeakerPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 21h-3q-.65 0-1.075-.425Q9 20.15 9 19.5v-7q0-.65.425-1.075Q9.85 11 10.5 11h3q.65 0 1.075.425Q15 11.85 15 12.5v7q0 .65-.425 1.075Q14.15 21 13.5 21ZM8.2 8.25q-.125-.125-.125-.263 0-.137.125-.237.8-.725 1.775-1.088Q10.95 6.3 12 6.3q1.05 0 2.025.362Q15 7.025 15.8 7.75q.125.1.125.237 0 .138-.125.263-.1.1-.238.1-.137 0-.262-.1-.7-.6-1.537-.925Q12.925 7 12 7q-.925 0-1.762.325Q9.4 7.65 8.7 8.25q-.125.1-.262.1-.138 0-.238-.1Zm-2.8-2.9q-.1-.1-.112-.25-.013-.15.112-.25 1.35-1.25 3.063-1.9Q10.175 2.3 12 2.3t3.538.65q1.712.65 3.062 1.9.125.1.125.237 0 .138-.125.263-.1.1-.237.1-.138 0-.263-.1-1.275-1.125-2.85-1.738Q13.675 3 12 3t-3.25.612Q7.175 4.225 5.9 5.35q-.125.1-.262.1-.138 0-.238-.1Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneW100Filled.displayName = 'AmauiIconMaterialSpeakerPhoneW100Filled';

export default IconMaterialSpeakerPhoneW100Filled;
