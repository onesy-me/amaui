import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsVoiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceW100'

      short_name='SettingsVoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12ZM480-452q-29 0-48.5-19.5T412-520v-240q0-29 19.5-48.5T480-828q29 0 48.5 19.5T548-760v240q0 29-19.5 48.5T480-452Zm0-188Zm-14 494v-144q-91-8-152.5-73.5T252-520h28q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h28q0 91-61.5 156.5T494-290v144h-28Zm14-334q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceW100.displayName = 'OnesyIconMaterialSettingsVoiceW100';

export default IconMaterialSettingsVoiceW100;
