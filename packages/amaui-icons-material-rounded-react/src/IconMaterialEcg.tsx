import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ecg'

      short_name='Ecg'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576ZM80 456V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v240h-80V336H160v120H80Zm80 440q-33 0-56.5-23.5T80 816V696h80v120h280v80H160Zm560 100-61-52q-88-75-113.5-108.5T520 766q0-45 32-77.5t78-32.5q26 0 49.5 12t40.5 35q16-23 39.5-35t50.5-12q45 0 77.5 32.5T920 766q0 36-26 69.5T780 944l-60 52Zm0-106 28-23q56-48 74-67.5t18-33.5q0-12-9-21t-21-9q-8 0-14.5 3.5T780 751l-60 57-61-57q-9-8-15.5-11.5T630 736q-13 0-21.5 9t-8.5 21q0 14 17.5 33.5T691 867l29 23ZM280 776q-12 0-21.5-5.5T244 754l-69-138h-55q-17 0-28.5-11.5T80 576q0-17 11.5-28.5T120 536h80q11 0 20.5 6t14.5 16l45 89 124-249q5-10 15-15t21-5q11 0 21 5t15 15l68 138h96q17 0 28.5 11.5T680 576q0 17-11.5 28.5T640 616H520q-12 0-21.5-5.5T484 594l-44-88-125 248q-5 11-14.5 16.5T280 776Zm440 37Z"/>
    </Icon>
  );
});

IconMaterialEcg.displayName = 'AmauiIconMaterialEcg';

export default IconMaterialEcg;
