import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFontDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadW100Filled'

      short_name='FontDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-382h196l39 111q2 5 5 7t8 2q8 0 11.5-6t1.5-13L492-704q-1-3-3.5-4.5T483-710h-6q-3 0-5.5 1.5T468-704L317-281q-2 7 1.5 13t11.5 6q5 0 8-2t5-7l39-111Zm10-28 86-242h4l86 242H392ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadW100Filled.displayName = 'OnesyIconMaterialFontDownloadW100Filled';

export default IconMaterialFontDownloadW100Filled;
