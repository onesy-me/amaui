import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNeurologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NeurologyW100'

      short_name='Neurology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M390 894q-43 0-73.5-29.5T285 792q-47-9-78-46t-31-86q0-17.588 4.5-34.756Q185 608.075 194 593q-14-17-21-38.29-7-21.291-7-44.71 0-52.053 34.5-90.027Q235 382 286 377q-1-4-1-8v-9q0-44 30.5-74t74.5-30q30 0 50 12t40 36q21-24 40-36t50-12q42.583 0 73.291 30.5Q674 317 674 360v9q0 4-1 8 51 5 86 42.5t35 90.5q0 23.419-7.5 44.71Q779 576 765 593q9 15 14 32.194 5 17.193 5 34.806 0 50-31 87t-79 45q-1 43-31 72.5T570 894q-32 0-50.5-12T480 845q-21 25-40 37t-50 12Zm104-534v430q0 31.92 22.164 53.96Q538.329 866 570.429 866 601 866 622.5 845q21.5-21 23.5-51-32-1-59.5-15.5T541 738q-4-5-3.079-10.333.921-5.334 6.079-8.667 5-4 10.714-3.079 5.715.921 9.286 6.079 14.667 21.333 37.333 32.667Q624 766 650 766q45 0 75.5-30.5T756 660q0-11.667-3-23.333Q750 625 745 614q-17 14-39.1 22t-45.9 8q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4 45 0 75.5-30.5T766 510q0-43.443-29.5-73.722Q707 406 664 404q-9 19-24.5 33T604 459q-5 2-10.143-.333-5.143-2.334-6.857-7.667-2-5 0-10.5t8-7.5q23-8 37-28t14-45.5q0-31.5-22.056-53.5-22.057-22-54-22Q538 284 516 306.04q-22 22.04-22 53.96Zm-28 430V360q0-31.92-22.056-53.96-22.057-22.04-54-22.04Q358 284 336 306.04q-22 22.04-22 53.96 0 25 14 45t37 28q5 2 8 7t1.171 10.217q-2.195 5.218-7.683 7.5Q361 460 355 458q-20-8-35.5-21.5T295 404q-42 2-71.5 32.5T194 510.323Q194 555 224.5 585.5 255 616 300 616q5.95 0 9.975 4.035 4.025 4.035 4.025 10T309.975 640q-4.025 4-9.975 4-23.8 0-45.9-8-22.1-8-39.1-22-5 11-8 22.667-3 11.666-3 23.333 0 45 30.5 75.5T310 766q26.296 0 48.648-11.5Q381 743 396 722q3.571-5.158 9.286-6.079Q411 715 416 718.5t6 9q1 5.5-3 10.5-19 26-46.5 40.5T313 794q2 30 24 51t52.571 21q32.1 0 54.265-22.04Q466 821.92 466 790Zm14-215Z"/>
    </Icon>
  );
});

IconMaterialNeurologyW100.displayName = 'AmauiIconMaterialNeurologyW100';

export default IconMaterialNeurologyW100;
