import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterestsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsW100Filled'

      short_name='Interests'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m120-550 162-279 162 279H120Zm163 405q-57 0-96-39t-39-96q0-56 39-95.5t96-39.5q56 0 95.5 39.5T418-280q0 57-39.5 96T283-145Zm264 0v-270h270v270H547Zm135-405q-31-24-59.5-47T572-643.5Q550-667 537-691t-13-50q0-33 21-54t54-21q23 0 43 11.5t40 35.5q20-23 41-35t43-12q32 0 53 22.5t21 55.5q0 25-13 48.5T792-643q-22 23-50.5 46T682-550Z"/>
    </Icon>
  );
});

IconMaterialInterestsW100Filled.displayName = 'OnesyIconMaterialInterestsW100Filled';

export default IconMaterialInterestsW100Filled;
