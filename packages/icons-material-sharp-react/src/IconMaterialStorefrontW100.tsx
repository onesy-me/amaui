import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStorefrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorefrontW100'

      short_name='Storefront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M814-526v380H146v-382q-26-18-37.5-47.5T108-638l53-176h636l55 176q11 33-.5 63.5T814-526Zm-246-8q42 0 62.5-22.5T648-602l-28-184H494v174q0 32 22 55t52 23Zm-180 0q35 0 56.5-23t21.5-55v-174H340l-28 188q-2 17 18 40.5t58 23.5Zm-178 0q29 0 49-19.5t25-48.5l26-184H181l-45 154q-11 35 9 66.5t65 31.5Zm540 0q38 0 62-29.5t12-68.5l-46-154H650l26 184q5 29 25 48.5t49 19.5ZM174-174h612v-338q-9 3-18 4.5t-18 1.5q-27 0-47.5-11T664-552q-15 20-38 33t-58 13q-23 0-44-11.5T480-552q-21 23-46 34.5T388-506q-24 0-48-9.5T298-552q-32 32-54.5 39t-33.5 7q-9 0-18-1.5t-18-4.5v338Zm580 0H206h548Z"/>
    </Icon>
  );
});

IconMaterialStorefrontW100.displayName = 'OnesyIconMaterialStorefrontW100';

export default IconMaterialStorefrontW100;
