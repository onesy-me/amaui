import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPodcasts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Podcasts'

      short_name='Podcasts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-291q-18-11-29-28.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 23-11 41t-29 28v291q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Zm-207-99q-12 12-29 12t-28-13q-45-53-70.5-119T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 75-25.5 141T784-220q-11 13-27.5 13.5T728-218q-11-11-11-28t11-30q34-42 53-94t19-110q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 58 19 109.5t54 93.5q11 13 11.5 29.5T233-219Zm113-113q-12 12-29 12.5T290-333q-23-31-36.5-68T240-480q0-100 70-170t170-70q100 0 170 70t70 170q0 42-13.5 79.5T670-333q-10 13-27 13.5T614-331q-11-11-11.5-28t9.5-31q13-20 20.5-42.5T640-480q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 26 7.5 48t20.5 42q10 14 9.5 30.5T346-332Z"/>
    </Icon>
  );
});

IconMaterialPodcasts.displayName = 'OnesyIconMaterialPodcasts';

export default IconMaterialPodcasts;
