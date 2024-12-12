import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteW100'

      short_name='EventNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-76q0-7 4.5-11.5T328-840q7 0 11.5 4.5T344-824v76h276v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-336H200v336q0 12 10 22t22 10Zm-32-396h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Zm120 130q-6 0-10-4t-4-10q0-6 4-10t10-4h320q6 0 10 4t4 10q0 6-4 10t-10 4H320Zm0 160q-6 0-10-4t-4-10q0-6 4-10t10-4h200q6 0 10 4t4 10q0 6-4 10t-10 4H320Z"/>
    </Icon>
  );
});

IconMaterialEventNoteW100.displayName = 'OnesyIconMaterialEventNoteW100';

export default IconMaterialEventNoteW100;
