import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageChineseWubi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageChineseWubi'

      short_name='LanguageChineseWubi'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M702 722q28 0 54.5-13t48.5-37V566q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636 666q0 26 18 41t48 15Zm-23 68q-57 0-90-32.5T556 669q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721 421q-26 0-51.5 9.5T604 464l-32-56q33-25 77.5-40.5T740 352q71 0 108 44t37 128v257h-67l-6-45q-28 25-61.5 39.5T679 790Zm-432-42h169V587H282q-8 41-16.5 81T247 748ZM75 796v-48h119q10-40 18.5-80t16.5-81H128v-50h110q5-26 9.5-53t9.5-53H109v-48h404v48H311q-5 26-10 53t-10 53h173v211h88v48H75Z"/>
    </Icon>
  );
});

IconMaterialLanguageChineseWubi.displayName = 'AmauiIconMaterialLanguageChineseWubi';

export default IconMaterialLanguageChineseWubi;
