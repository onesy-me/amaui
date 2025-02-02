import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsVideoCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVideoCamera'

      short_name='SettingsVideoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80H560q-17 0-28.5-11.5T520-120v-240q0-17 11.5-28.5T560-400h240q17 0 28.5 11.5T840-360v80l63-63q5-5 11-2.5t6 9.5v192q0 7-6 9.5t-11-2.5l-63-63v80q0 17-11.5 28.5T800-80ZM592-483q-15 8-31 2.5T537-501q-8-17-22.5-28T482-540q-25 0-42.5 17T422-481q0 18 9.5 32.5T458-426q15 8 21 23.5t-2 30.5q-8 15-23.5 21t-30.5-2q-38-17-59.5-51T342-480q0-58 41-99t99-41q42 0 76.5 22t51.5 60q8 15 2.5 31T592-483ZM411-80q-17 0-30-11t-15-28l-12-89q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l8-66q3-27 23-44.5t47-17.5h96q27 0 47 17.5t23 44.5l8 66q13 5 24.5 12t22.5 15l60-26q25-11 50.5-2t39.5 32l47 82q14 23 8.5 49T832-547l-46 35q-14 10-30 8t-26-16q-10-14-7.5-30t15.5-26l39-30-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v150q0 14-8 24t-21 10Zm70-401Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSettingsVideoCamera.displayName = 'OnesyIconMaterialSettingsVideoCamera';

export default IconMaterialSettingsVideoCamera;
