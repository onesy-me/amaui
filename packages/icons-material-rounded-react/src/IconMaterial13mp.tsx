import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial13mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='13mp'

      short_name='13mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-680v150q0 13 8.5 21.5T370-500q13 0 21.5-8.5T400-530v-180q0-13-8.5-21.5T370-740h-60q-13 0-21.5 8.5T280-710q0 13 8.5 21.5T310-680h30Zm260 120h-90q-13 0-21.5 8.5T480-530q0 13 8.5 21.5T510-500h110q17 0 28.5-11.5T660-540v-160q0-17-11.5-28.5T620-740H510q-13 0-21.5 8.5T480-710q0 13 8.5 21.5T510-680h90v40h-60q-8 0-14 6t-6 14q0 8 6 14t14 6h60v40ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm100 360h40v90q0 13 8.5 21.5T370-280q13 0 21.5-8.5T400-310v-90h40v150q0 13 8.5 21.5T470-220q13 0 21.5-8.5T500-250v-170q0-17-11.5-28.5T460-460H280q-17 0-28.5 11.5T240-420v170q0 13 8.5 21.5T270-220q13 0 21.5-8.5T300-250v-150Zm300 120h80q17 0 28.5-11.5T720-320v-100q0-17-11.5-28.5T680-460H570q-13 0-21.5 8.5T540-430v180q0 13 8.5 21.5T570-220q13 0 21.5-8.5T600-250v-30Zm0-60v-60h60v60h-60Z"/>
    </Icon>
  );
});

IconMaterial13mp.displayName = 'OnesyIconMaterial13mp';

export default IconMaterial13mp;
