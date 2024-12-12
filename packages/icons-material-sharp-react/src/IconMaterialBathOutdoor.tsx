import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathOutdoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathOutdoor'

      short_name='BathOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-509v93q-20 14-30 28.5T200-360q0 6 1.5 12t5.5 12l33 16h90l6 17 44-17h160l29 38 107-16 44-62h40q0-13-10-27.5T720-416v-93q58 29 89 67.5t31 81.5l40 60-40 120H716l4 20-100 40H340l-10-26-110 26L80-220v-100l42-21q-1-5-1.5-9.5t-.5-9.5q0-43 31-81.5t89-67.5Zm-78 272 37-37-39-19-20 10v31l22 15Zm73 52 75-18-22-57h-18l-57 57 22 18Zm147 5h121l27-54-20-26H392l-34 14 24 66Zm190 0h36l42-17-7-35-45 7-26 45Zm138-60h87l17-51-6-9h-57l-41 60ZM270-440q5-15 7.5-28.5T280-498q0-30-15-52t-34-47q-19-25-34-55.5T182-731q0-15 1.5-32t5.5-37h81q-5 23-6.5 38t-1.5 28q0 37 15.5 61.5T311-624q18 24 33.5 53t15.5 75q0 14-2 28t-6 28h-82Zm160 0q5-15 7.5-28.5T440-498q0-30-15-52t-34-47q-19-25-34-55.5T342-731q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T470-624q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82Zm160 0q5-15 7.5-28.5T600-498q0-30-15-52t-34-47q-19-25-34-55.5T502-731q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T630-624q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82Z"/>
    </Icon>
  );
});

IconMaterialBathOutdoor.displayName = 'OnesyIconMaterialBathOutdoor';

export default IconMaterialBathOutdoor;
