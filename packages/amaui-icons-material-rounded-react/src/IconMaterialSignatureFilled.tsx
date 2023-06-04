import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignatureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignatureFilled'

      short_name='Signature'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M563 565q73-54 114-118.5T718 318q0-32-10.5-47T679 256q-47 0-83 79.5T560 515q0 14 .5 26.5T563 565ZM164 748q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l36 36 36-36q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36-36 36Zm454-12q-30 0-55-11.5T520 687q-16 8-33 16l-34 16q-16 7-31.5.5T400 697q-6-16 1.5-31t23.5-22q17-8 33-15.5t31-15.5q-5-22-7.5-48t-2.5-56q0-144 57-238.5T679 176q52 0 85 38.5T797 322q0 86-54.5 170T591 643q7 7 14.5 10.5T621 657q21 0 49-23t54-62q10-14 25.5-19.5T780 554q15 8 22 23.5t4 32.5q-2 12-2 23t3 21q5-2 11.5-6.5T832 636q12-11 28.5-12.5T890 632q14 11 15 27t-10 27q-23 23-48.5 36.5T798 736q-21 0-37.5-12.5T733 685q-28 25-57 38t-58 13ZM160 936q-17 0-28.5-11.5T120 896q0-17 11.5-28.5T160 856q17 0 28.5 11.5T200 896q0 17-11.5 28.5T160 936Zm160 0q-17 0-28.5-11.5T280 896q0-17 11.5-28.5T320 856q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936Zm160 0q-17 0-28.5-11.5T440 896q0-17 11.5-28.5T480 856q17 0 28.5 11.5T520 896q0 17-11.5 28.5T480 936Zm160 0q-17 0-28.5-11.5T600 896q0-17 11.5-28.5T640 856q17 0 28.5 11.5T680 896q0 17-11.5 28.5T640 936Zm160 0q-17 0-28.5-11.5T760 896q0-17 11.5-28.5T800 856q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936Z"/>
    </Icon>
  );
});

IconMaterialSignatureFilled.displayName = 'AmauiIconMaterialSignatureFilled';

export default IconMaterialSignatureFilled;
