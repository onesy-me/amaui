import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageKoreanLatinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageKoreanLatinFilled'

      short_name='LanguageKoreanLatin'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 599q26 0 44.5-11.5T279 553q0-23-18.5-35T216 506q-26 0-44.5 12T153 553q0 23 18.5 34.5T216 599ZM75 448v-44h114v-56h52v56h115v44H75Zm141 195q-47 0-80.5-23.5T102 553q0-44 33.5-67t80.5-23q48 0 81.5 23t33.5 67q0 44-33.5 67T216 643Zm-73 161V664h53v96h264v44H143Zm245-105V348h51v150h69v44h-68v157h-52Zm314 23q28 0 54.5-13t48.5-37V566q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636 666q0 26 18 41t48 15Zm-23 68q-57 0-90-32.5T556 669q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721 421q-26 0-51.5 9.5T604 464l-32-56q33-25 77.5-40.5T740 352q71 0 108 44t37 128v257h-67l-6-45q-28 25-61.5 39.5T679 790Z"/>
    </Icon>
  );
});

IconMaterialLanguageKoreanLatinFilled.displayName = 'AmauiIconMaterialLanguageKoreanLatinFilled';

export default IconMaterialLanguageKoreanLatinFilled;
