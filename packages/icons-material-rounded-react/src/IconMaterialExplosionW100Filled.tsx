import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplosionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplosionW100Filled'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M425.85-352 459-320q9 9 21 9t21-9l33.15-32H578q12.75 0 21.38-8.63Q608-369.25 608-382v-43.85L640-459q9-9 9-21t-9-21l-32-33.15V-578q0-12.75-8.62-21.38Q590.75-608 578-608h-44l-38-38q-6.82-7-15.91-7T464-646l-38 38h-44q-12.75 0-21.37 8.62Q352-590.75 352-578v43.85L320-501q-9 9-9 21t9 21l32 33.15V-382q0 12.75 8.63 21.37Q369.25-352 382-352h43.85Zm-58.22 140H272q-24.75 0-42.37-17.63Q212-247.25 212-272v-95.63L142-438q-9-9-13-19.81-4-10.82-4-22 0-11.19 4-22.19 4-11 13-20l70-70.37V-688q0-24.75 17.63-42.38Q247.25-748 272-748h95.63L438-818q9-9 19.81-13 10.82-4 22-4 11.19 0 22.19 4 11 4 20 13l70.37 70H688q24.75 0 42.38 17.62Q748-712.75 748-688v95.63L818-522q9 9 13 19.81 4 10.82 4 22 0 11.19-4 22.19-4 11-13 20l-70 70.37V-272q0 24.75-17.62 42.37Q712.75-212 688-212h-95.63L522-142q-9 9-19.81 13-10.82 4-22 4-11.19 0-22.19-4-11-4-20-13l-70.37-70Z"/>
    </Icon>
  );
});

IconMaterialExplosionW100Filled.displayName = 'OnesyIconMaterialExplosionW100Filled';

export default IconMaterialExplosionW100Filled;
