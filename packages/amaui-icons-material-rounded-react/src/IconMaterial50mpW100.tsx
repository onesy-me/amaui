import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial50mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='50mpW100'

      short_name='50mp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M544 540h92q11.9 0 19.95-8.05Q664 523.9 664 512V360q0-11.9-8.05-19.95Q647.9 332 636 332h-92q-11.9 0-19.95 8.05Q516 348.1 516 360v152q0 11.9 8.05 19.95Q532.1 540 544 540Zm0-28V360h92v152h-92ZM284 640h72v106q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q376 760 380 756.033q4-3.966 4-10.033V640h72v166q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q476 820 480 816.033q4-3.966 4-10.033V636q0-11-6.5-17.5T460 612H280q-11 0-17.5 6.5T256 636v170q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q276 820 280 816.033q4-3.966 4-10.033V640Zm300 120h96q11 0 17.5-6.5T704 736V636q0-11-6.5-17.5T680 612h-94q-12.75 0-21.375 8.625T556 642v164q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q576 820 580 816.033q4-3.966 4-10.033v-46Zm0-28v-92h92v92h-92ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm196 154v62H290q-6.067 0-10.033 3.953-3.967 3.954-3.967 10Q276 532 279.967 536q3.966 4 10.033 4h106q11.9 0 19.95-8.05Q424 523.9 424 512v-62q0-11.9-8.05-19.95Q407.9 422 396 422h-92v-62h106q6.067 0 10.033-3.953 3.967-3.954 3.967-10Q424 340 420.033 336q-3.966-4-10.033-4H306q-12.75 0-21.375 8.625T276 362v58q0 12.75 8.625 21.375T306 450h90Z"/>
    </Icon>
  );
});

IconMaterial50mpW100.displayName = 'AmauiIconMaterial50mpW100';

export default IconMaterial50mpW100;
