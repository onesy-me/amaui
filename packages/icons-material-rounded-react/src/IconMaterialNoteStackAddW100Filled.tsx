import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteStackAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteStackAddW100Filled'

      short_name='NoteStackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-192v-376q0-25.06 17.5-42.53Q367-628 392-628h376q24.75 0 42.38 17.62Q828-592.75 828-568v241q0 12.44-5 23.72T810-284L676-150q-8 8-19.28 13-11.28 5-23.72 5H392q-24.75 0-42.37-17.63Q332-167.25 332-192ZM133-692q-5-25 9.45-45.21T182-762l370-65q25-5 45.21 9.45T622-778l8 50H392q-66 0-113 47t-47 113v290q-13-6-22-17.5T198-322l-65-370Zm433 326v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H594v-106q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v106H460q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Z"/>
    </Icon>
  );
});

IconMaterialNoteStackAddW100Filled.displayName = 'OnesyIconMaterialNoteStackAddW100Filled';

export default IconMaterialNoteStackAddW100Filled;
