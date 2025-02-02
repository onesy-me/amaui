import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiFindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindW100'

      short_name='WifiFind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M470-204 99-575q-5-5-7.5-11.5T90-599q1-6 4-12t8-10q85-63 178.5-95T480-748q109 0 203 34t181 98q5 3 7 7.5t2 9.5q0 5-1.5 9.5T866-581q-78-66-180-102.5T480-720q-104 0-198 33t-166 89l374 374q4 4 4.5 9.5T490-204q-5 5-10 5t-10-5Zm373-17-95-95q-13 11-31 17.5t-37 6.5q-45 0-76.5-31.5T572-400q0-45 31.5-76.5T680-508q45 0 76.5 31.5T788-400q0 17-5.5 34T768-336l95 95q4 4 4.5 9.5T863-221q-5 5-10 5t-10-5Zm-163-99q33 0 56.5-23.5T760-400q0-33-23.5-56.5T680-480q-33 0-56.5 23.5T600-400q0 33 23.5 56.5T680-320ZM480-214Z"/>
    </Icon>
  );
});

IconMaterialWifiFindW100.displayName = 'OnesyIconMaterialWifiFindW100';

export default IconMaterialWifiFindW100;
