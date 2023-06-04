import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaunaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaunaW100Filled'

      short_name='Sauna'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 924q-26 0-43-17t-17-43V288q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Zm-32-214v154q0 14 9 23t23 9h74V794h-19q-6 0-10.5-4.5T232 779v-69h-72Zm0-28h72v-22q0-10.2 6.9-17.1 6.9-6.9 17.1-6.9v-94q0-18.333 12.833-31.167Q281.667 498 300 498h80q18.333 0 31.167 12.833Q424 523.667 424 542v94q10 0 17 6.9t7 17.1v22h352V288q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v394Zm180.235-224Q322 458 309 445.235q-13-12.764-13-31Q296 396 308.765 383q12.764-13 31-13Q358 370 371 382.765q13 12.764 13 31Q384 432 371.235 445q-12.764 13-31 13ZM322 896h36V794h-36v102Zm92 0h354q14 0 23-9t9-23V710H448v69q0 6-4.5 10.5T433 794h-19v102Zm68-491q-13-16.532-19.5-33.065Q456 355.403 456 338v-12q1-6 5.318-10T472 312q5 0 8.5 4.5t3.5 9.5v12q0 13.75 6 26.875T508 392q15.882 19.317 22.941 36.439Q538 445.561 538 464q0 7-4.706 11.5T522 480q-5.778 0-9.389-4.75Q509 470.5 509 464q0-15-6-27.5T482 405Zm100 0q-13-16.532-19.5-33.065Q556 355.403 556 338v-12q1-6 5.318-10T572 312q5 0 8.5 4.5t3.5 9.5v12q0 13.75 6 26.875T608 392q15.882 19.317 22.941 36.439Q638 445.561 638 464q0 7-4.706 11.5T622 480q-5.778 0-9.389-4.75Q609 470.5 609 464q0-15-6-27.5T582 405Zm102 0q-13-16.532-19.5-33.065Q658 355.403 658 338v-12q1-6 5.318-10T674 312q5 0 8.5 4.5t3.5 9.5v12q0 13.75 6 26.875T710 392q15.882 19.317 22.941 36.439Q740 445.561 740 464q0 7-4 11.5t-11.171 4.5q-6.146 0-9.988-4.75Q711 470.5 711 464q0-15-6-27.5T684 405Z"/>
    </Icon>
  );
});

IconMaterialSaunaW100Filled.displayName = 'AmauiIconMaterialSaunaW100Filled';

export default IconMaterialSaunaW100Filled;
