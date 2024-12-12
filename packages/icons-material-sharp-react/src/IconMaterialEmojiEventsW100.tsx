import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiEventsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiEventsW100'

      short_name='EmojiEvents'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-172v-28h114v-158q-52-2-96.5-42T318-492q-60-7-103-48t-43-100v-68h142v-80h332v80h142v68q0 59-43 100t-103 48q-7 52-51.5 92T494-358v158h114v28H352Zm-38-350v-158H200v40q0 48 33 81.5t81 36.5Zm166.24 136q56.76 0 96.26-39.67Q616-465.33 616-522v-238H344v238q0 56.67 39.74 96.33Q423.47-386 480.24-386ZM646-522q48-3 81-36.5t33-81.5v-40H646v158Zm-166-51Z"/>
    </Icon>
  );
});

IconMaterialEmojiEventsW100.displayName = 'OnesyIconMaterialEmojiEventsW100';

export default IconMaterialEmojiEventsW100;
