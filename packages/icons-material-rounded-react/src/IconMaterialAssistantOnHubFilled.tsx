import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantOnHubFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantOnHubFilled'

      short_name='AssistantOnHub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M413-480q17 0 28.5-11.5T453-520q0-17-11.5-28.5T413-560q-17 0-28.5 11.5T373-520q0 17 11.5 28.5T413-480Zm-133 0q17 0 28.5-11.5T320-520q0-17-11.5-28.5T280-560q-17 0-28.5 11.5T240-520q0 17 11.5 28.5T280-480Zm267 0q17 0 28.5-11.5T587-520q0-17-11.5-28.5T547-560q-17 0-28.5 11.5T507-520q0 17 11.5 28.5T547-480Zm133 0q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560q-17 0-28.5 11.5T640-520q0 17 11.5 28.5T680-480ZM480-160q-99 0-169.5-13.5T240-206v-34h-80q-33 0-56.5-23.5T80-320v-400q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v400q0 33-23.5 56.5T800-240h-80v34q0 19-70.5 32.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialAssistantOnHubFilled.displayName = 'OnesyIconMaterialAssistantOnHubFilled';

export default IconMaterialAssistantOnHubFilled;
