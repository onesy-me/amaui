import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOff'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M383-463Zm194-34ZM763-84l-77-76H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm117-636v430q0 20-12.5 30T840-250q-15 0-27.5-10.5T800-291v-349L598-513q-14 9-27 4.5T551-524q-7-11-5-24.5t16-22.5l238-149H371q-20 0-30-12.5T331-760q0-15 10-27.5t30-12.5h429q33 0 56.5 23.5T880-720Z"/>
    </Icon>
  );
});

IconMaterialMailOff.displayName = 'OnesyIconMaterialMailOff';

export default IconMaterialMailOff;
