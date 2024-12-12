import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial20mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='20mp'

      short_name='20mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-560v-40h80q17 0 28.5-11.5T440-640v-60q0-17-11.5-28.5T400-740H290q-13 0-21.5 8.5T260-710q0 13 8.5 21.5T290-680h90v40h-80q-17 0-28.5 11.5T260-600v70q0 13 8.5 21.5T290-500h120q13 0 21.5-8.5T440-530q0-13-8.5-21.5T410-560h-90Zm240 60h100q17 0 28.5-11.5T700-540v-160q0-17-11.5-28.5T660-740H560q-17 0-28.5 11.5T520-700v160q0 17 11.5 28.5T560-500Zm20-60v-120h60v120h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm100 360h40v90q0 13 8.5 21.5T370-280q13 0 21.5-8.5T400-310v-90h40v150q0 13 8.5 21.5T470-220q13 0 21.5-8.5T500-250v-170q0-17-11.5-28.5T460-460H280q-17 0-28.5 11.5T240-420v170q0 13 8.5 21.5T270-220q13 0 21.5-8.5T300-250v-150Zm300 120h80q17 0 28.5-11.5T720-320v-100q0-17-11.5-28.5T680-460H570q-13 0-21.5 8.5T540-430v180q0 13 8.5 21.5T570-220q13 0 21.5-8.5T600-250v-30Zm0-60v-60h60v60h-60Z"/>
    </Icon>
  );
});

IconMaterial20mp.displayName = 'OnesyIconMaterial20mp';

export default IconMaterial20mp;
