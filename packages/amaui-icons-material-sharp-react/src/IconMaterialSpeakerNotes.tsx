import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotes'

      short_name='SpeakerNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 8h8V6h-8Zm0 3h8V9h-8Zm0 3h5v-2h-5ZM7 8q.425 0 .713-.287Q8 7.425 8 7t-.287-.713Q7.425 6 7 6t-.713.287Q6 6.575 6 7t.287.713Q6.575 8 7 8Zm0 3q.425 0 .713-.288Q8 10.425 8 10t-.287-.713Q7.425 9 7 9t-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0 3q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm-5 8V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialSpeakerNotes.displayName = 'AmauiIconMaterialSpeakerNotes';

export default IconMaterialSpeakerNotes;
