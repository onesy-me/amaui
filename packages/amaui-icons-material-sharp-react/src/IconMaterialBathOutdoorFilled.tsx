import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathOutdoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathOutdoorFilled'

      short_name='BathOutdoor'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 547v93q-20 14-30 28.5T200 696q0 6 1.5 12t5.5 12l33 16h90l6 17 44-17h160l29 38 107-16 44-62h40q0-13-10-27.5T720 640v-93q58 29 89 67.5t31 81.5l40 60-40 120H716l4 20-100 40H340l-10-26-110 26L80 836V736l42-21q-1-5-1.5-9.5t-.5-9.5q0-43 31-81.5t89-67.5Zm30 69q5-15 7.5-28.5T280 558q0-30-15-52t-34-47q-19-25-34-55.5T182 325q0-15 1.5-32t5.5-37h81q-5 23-6.5 38t-1.5 28q0 37 15.5 61.5T311 432q18 24 33.5 53t15.5 75q0 14-2 28t-6 28h-82Zm160 0q5-15 7.5-28.5T440 558q0-30-15-52t-34-47q-19-25-34-55.5T342 325q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T470 432q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82Zm160 0q5-15 7.5-28.5T600 558q0-30-15-52t-34-47q-19-25-34-55.5T502 325q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T630 432q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82Z"/>
    </Icon>
  );
});

IconMaterialBathOutdoorFilled.displayName = 'AmauiIconMaterialBathOutdoorFilled';

export default IconMaterialBathOutdoorFilled;
