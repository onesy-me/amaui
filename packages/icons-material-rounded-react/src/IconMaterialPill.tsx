import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPill = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pill'

      short_name='Pill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-120q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73L504-186q-32 32-73 49t-86 17Zm266-286 107-106q20-20 31-47t11-56q0-60-42.5-102.5T615-760q-29 0-56 11t-47 31L406-611l205 205ZM345-200q29 0 56-11t47-31l106-107-205-205-107 106q-20 20-31 47t-11 56q0 60 42.5 102.5T345-200Z"/>
    </Icon>
  );
});

IconMaterialPill.displayName = 'OnesyIconMaterialPill';

export default IconMaterialPill;
