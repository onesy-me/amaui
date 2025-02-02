import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSourceNotesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesW100'

      short_name='SourceNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-560 560Zm106-414h348v-28H306v28Zm0 148h211q7.76-8.12 16.88-15.06Q543-488 553-494H306v28Zm0 148h120.03q1.97-8 4.47-14.5T435-346H306v28ZM172-172v-616h616v252q-6.76-1.68-13.88-2.84Q767-540 760-541v-219H200v560h219q1 7 2.16 14.12 1.16 7.12 2.84 13.88H172ZM720-56q-61 0-109-36.5T545-184h30q17 45 55.61 72.5T720-84q64.63 0 110.31-45.69Q876-175.37 876-240t-45.69-110.31Q784.63-396 720-396q-39 0-75 20t-62 52h81v28H536v-128h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q904-316.36 904-240q0 76.36-53.82 130.18Q796.36-56 720-56Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesW100.displayName = 'OnesyIconMaterialSourceNotesW100';

export default IconMaterialSourceNotesW100;
