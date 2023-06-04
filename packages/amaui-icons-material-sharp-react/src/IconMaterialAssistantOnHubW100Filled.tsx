import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantOnHubW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantOnHubW100Filled'

      short_name='AssistantOnHub'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M410 588q11 0 19.5-8.5T438 560q0-11-8.5-19.5T410 532q-11 0-19.5 8.5T382 560q0 11 8.5 19.5T410 588Zm-140 0q11 0 19.5-8.5T298 560q0-11-8.5-19.5T270 532q-11 0-19.5 8.5T242 560q0 11 8.5 19.5T270 588Zm280 0q11 0 19.5-8.5T578 560q0-11-8.5-19.5T550 532q-11 0-19.5 8.5T522 560q0 11 8.5 19.5T550 588Zm140 0q11 0 19.5-8.5T718 560q0-11-8.5-19.5T690 532q-11 0-19.5 8.5T662 560q0 11 8.5 19.5T690 588ZM480 868q-97 0-155.5-11T266 828v-40H132V332h696v456H694v40q0 18-58.5 29T480 868Z"/>
    </Icon>
  );
});

IconMaterialAssistantOnHubW100Filled.displayName = 'AmauiIconMaterialAssistantOnHubW100Filled';

export default IconMaterialAssistantOnHubW100Filled;
