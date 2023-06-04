import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoiseControlOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOff'

      short_name='NoiseControlOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.5 0-2.875-.413-1.375-.412-2.55-1.162l1.45-1.45q.875.5 1.875.763Q10.9 20 12 20t2.1-.262q1-.263 1.875-.763l1.45 1.45q-1.175.75-2.55 1.162Q13.5 22 12 22Zm-8.425-4.575q-.75-1.175-1.162-2.55Q2 13.5 2 12t.413-2.875q.412-1.375 1.162-2.55l1.45 1.45q-.5.875-.762 1.875Q4 10.9 4 12t.263 2.1q.262 1 .762 1.875Zm16.85 0-1.45-1.45q.5-.875.763-1.875Q20 13.1 20 12t-.262-2.1q-.263-1-.763-1.875l1.45-1.45q.75 1.175 1.162 2.55Q22 10.5 22 12t-.413 2.875q-.412 1.375-1.162 2.55Zm-12.4-12.4-1.45-1.45q1.175-.75 2.55-1.163Q10.5 2 12 2t2.875.412q1.375.413 2.55 1.163l-1.45 1.45q-.875-.5-1.875-.763Q13.1 4 12 4t-2.1.262q-1 .263-1.875.763ZM13 18q1.275 0 2.137-.875Q16 16.25 16 15h-2q0 .425-.287.712Q13.425 16 13 16q-.325 0-.575-.188-.25-.187-.375-.512-.15-.425-.362-.838-.213-.412-.563-.762l-1.35-1.35q-.375-.375-.575-.862Q9 11 9 10.5q0-1.05.725-1.775Q10.45 8 11.5 8q.9 0 1.588.562.687.563.862 1.438h2.025q-.2-1.725-1.475-2.863Q13.225 6 11.5 6 9.625 6 8.312 7.312 7 8.625 7 10.5q0 .925.35 1.762.35.838 1 1.488l1.375 1.375q.175.175.263.387.087.213.162.438.325.9 1.113 1.475Q12.05 18 13 18Zm.5-4q.65 0 1.075-.438Q15 13.125 15 12.5q0-.65-.425-1.075Q14.15 11 13.5 11q-.625 0-1.062.425Q12 11.85 12 12.5q0 .625.438 1.062.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOff.displayName = 'AmauiIconMaterialNoiseControlOff';

export default IconMaterialNoiseControlOff;
