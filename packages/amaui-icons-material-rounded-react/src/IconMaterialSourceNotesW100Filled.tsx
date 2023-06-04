import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesW100Filled'

      short_name='SourceNotes'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M719.504 1000Q666 1000 622.5 971 579 942 556 897q-3-5-.975-10.793Q557.05 880.414 562 878q5-2 10.5.5t8.5 7.5q19.16 38.351 55.79 62.176Q673.42 972 719.63 972q65.37 0 110.87-45.686Q876 880.629 876 816q0-64.629-45.686-110.314Q784.629 660 720 660q-39 0-75 20t-62 52h67q6.067 0 10.033 3.953 3.967 3.954 3.967 10Q664 752 660.033 756q-3.966 4-10.033 4h-84q-12.75 0-21.375-8.625T536 730v-84q0-6.067 3.953-10.033 3.954-3.967 10-3.967Q556 632 560 635.967q4 3.966 4 10.033v65q29-35 70-57t86-22q76.36 0 130.18 53.82Q904 739.64 904 816q0 76.36-53.965 130.18Q796.07 1000 719.504 1000ZM320 442h320q5.95 0 9.975-4.035 4.025-4.035 4.025-10T649.975 418q-4.025-4-9.975-4H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm-88 442q-24.75 0-42.375-17.625T172 824V328q0-24.75 17.625-42.375T232 268h496q24.75 0 42.375 17.625T788 328v192q-16.618-3.826-33.809-5.913T720 512q-47 0-89 13t-78 37H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h197q-27 25-48 55t-34 65H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h106q-5 19-7.5 38.5T416 816q0 17.374 2 34.187T424 884H232Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesW100Filled.displayName = 'AmauiIconMaterialSourceNotesW100Filled';

export default IconMaterialSourceNotesW100Filled;
