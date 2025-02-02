import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedW100'

      short_name='ShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-840v-28h240v28H360Zm120 708q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q63 0 113 21t95 59l52-52 20 20-52 52q38 45 59 95t21 113q0 64-24.5 120T697-222q-42 42-98 66t-119 24Zm0-308Zm-8-68h280q-18-68-62-117t-106-75L472-508Zm-56 40 142-242q-71-20-136.5-4T306-660l110 192Zm-212 68h218L284-642q-45 47-68 109t-12 133Zm172 220 110-192H208q17 66 61.5 116T376-180Zm28 8q91 27 155.5 1.5T654-220L542-414 404-172Zm272-66q18-20 56.5-82T756-480H536l140 242Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedW100.displayName = 'OnesyIconMaterialShutterSpeedW100';

export default IconMaterialShutterSpeedW100;
