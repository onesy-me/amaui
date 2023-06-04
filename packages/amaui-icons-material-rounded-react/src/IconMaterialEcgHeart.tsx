import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeart'

      short_name='EcgHeart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576Zm0 360q-18 0-34.5-6.5T416 910L148 641q-35-35-51.5-80T80 467q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880 466q0 49-17 94t-51 80L543 910q-13 13-29 19.5t-34 6.5Zm40-520q10 0 19 5t14 13l68 102h166q7-17 10.5-34.5T801 466q-2-69-46-118.5T645 298q-31 0-59.5 12T536 345l-27 29q-5 6-13 9.5t-16 3.5q-8 0-16-3.5t-14-9.5l-27-29q-21-23-49-36t-60-13q-66 0-110 50.5T160 466q0 18 3 35.5t10 34.5h187q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8Zm12 130-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H236l237 237q2 2 3.5 2.5t3.5.5q2 0 3.5-.5t3.5-2.5l236-237H600q-10 0-19-5t-15-13l-34-52Z"/>
    </Icon>
  );
});

IconMaterialEcgHeart.displayName = 'AmauiIconMaterialEcgHeart';

export default IconMaterialEcgHeart;
