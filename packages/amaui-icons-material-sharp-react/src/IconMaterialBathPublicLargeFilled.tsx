import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathPublicLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathPublicLargeFilled'

      short_name='BathPublicLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976V336h200v80H160v480h640V416H680v-80h200v640H80Zm180-240q-25 0-42.5-17.5T200 676q0-25 17.5-42.5T260 616q25 0 42.5 17.5T320 676q0 25-17.5 42.5T260 736Zm-60 120v-25q0-32 22-53.5t52-21.5q14 0 29.5 6.5T328 780l45 52q6 7 12.5 13t14.5 11H200Zm160-120v-27q0-32 33-52.5t87-20.5q54 0 87 20.5t33 52.5v27H360Zm400 120H560q8-5 14.5-11t12.5-13l45-52q8-10 24.5-17t29.5-7q30 0 52 22t22 53v25ZM480 616q-25 0-42.5-17.5T420 556q0-25 17.5-42.5T480 496q25 0 42.5 17.5T540 556q0 25-17.5 42.5T480 616Zm220 120q-25 0-42.5-17.5T640 676q0-25 17.5-42.5T700 616q25 0 42.5 17.5T760 676q0 25-17.5 42.5T700 736ZM331 416q5-18 6.5-27t1.5-20q0-15-7-30.5T308 303q-23-27-34.5-56.5T262 187q0-12 1.5-24.5T268 136h60q-3 19-4.5 30t-1.5 21q0 18 8 37.5t24 39.5q23 30 34 55.5t11 49.5q0 12-1.5 24t-4.5 23h-62Zm121 0q5-18 7-27t2-20q0-15-7.5-30.5T429 303q-23-27-34-56.5T384 187q0-12 1-24.5t4-26.5h60q-3 19-4 30t-1 21q0 18 7.5 37.5T475 264q23 30 34 55.5t11 49.5q0 12-1.5 24t-4.5 23h-62Zm120 0q5-18 6.5-27t1.5-20q0-15-7-30.5T549 303q-23-27-34.5-56.5T503 187q0-12 1.5-24.5T509 136h60q-3 19-4 30t-1 21q0 18 7.5 37.5T595 264q23 30 34 55.5t11 49.5q0 12-1.5 24t-4.5 23h-62Z"/>
    </Icon>
  );
});

IconMaterialBathPublicLargeFilled.displayName = 'AmauiIconMaterialBathPublicLargeFilled';

export default IconMaterialBathPublicLargeFilled;
