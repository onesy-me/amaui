import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentW100Filled'

      short_name='EditDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v98q0 8-5 14t-13 8q-14 5-25.5 12T682-491L460-270q-8 8-13 19.5t-5 23.5v65q0 13-8.5 21.5T412-132H272Zm270-30v-36q0-6 2-11t7-10l202-201q5-4 10-6t10-2q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L629-141q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T542-162Zm231-162 37-38-37-38-38 38 38 38ZM602-652h118L572-800l148 148-148-148v118q0 13 8.5 21.5T602-652Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentW100Filled.displayName = 'OnesyIconMaterialEditDocumentW100Filled';

export default IconMaterialEditDocumentW100Filled;
