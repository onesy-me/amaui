import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial10mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10mpFilled'

      short_name='10mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-680v150q0 13 8.5 21.5T370-500q13 0 21.5-8.5T400-530v-180q0-13-8.5-21.5T370-740h-60q-13 0-21.5 8.5T280-710q0 13 8.5 21.5T310-680h30Zm180 180h100q17 0 28.5-11.5T660-540v-160q0-17-11.5-28.5T620-740H520q-17 0-28.5 11.5T480-700v160q0 17 11.5 28.5T520-500Zm20-60v-120h60v120h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm100-280h40v90q0 13 8.5 21.5T370-280q13 0 21.5-8.5T400-310v-90h40v150q0 13 8.5 21.5T470-220q13 0 21.5-8.5T500-250v-170q0-17-11.5-28.5T460-460H280q-17 0-28.5 11.5T240-420v170q0 13 8.5 21.5T270-220q13 0 21.5-8.5T300-250v-150Zm300 120h80q17 0 28.5-11.5T720-320v-100q0-17-11.5-28.5T680-460H570q-13 0-21.5 8.5T540-430v180q0 13 8.5 21.5T570-220q13 0 21.5-8.5T600-250v-30Zm0-60v-60h60v60h-60Z"/>
    </Icon>
  );
});

IconMaterial10mpFilled.displayName = 'OnesyIconMaterial10mpFilled';

export default IconMaterial10mpFilled;
