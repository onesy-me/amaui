import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariableRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemoveW100'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-332q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09v-236.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h556q12.75 0 21.38 8.62Q788-610.75 788-598v27q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-29H200v240h349q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H202Zm-2-28v-240 240Zm568 28-75 75q-4 4-9.5 4.5t-10.72-4.72Q668-262 668-267q0-5 5-10l75-75-75-75q-4-4-4.5-9.5T673-447q5-5 10-5t10 5l75 75 75-75q4-4 9.5-4.5t10.72 4.72Q868-442 868-437q0 5-5 10l-75 75 75 75q4 4 4.5 9.5t-4.72 10.72Q858-252 853-252q-5 0-10-5l-75-75Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveW100.displayName = 'OnesyIconMaterialVariableRemoveW100';

export default IconMaterialVariableRemoveW100;
