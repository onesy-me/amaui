import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100'

      short_name='AccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.35q1.35-1.325 3.138-2.088Q9.925 15.5 12 15.5t3.863.762q1.787.763 3.137 2.088V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8Zm7-5.25q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 7.4q-1.2 0-2.025.825T9.15 10.25q0 1.2.825 2.025T12 13.1Zm-6.2 6.6q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm-.25-.7h12.9v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.637-1.65.638-3.075 1.963v.2ZM12 12.4q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512Q11.125 8.1 12 8.1t1.512.638q.638.637.638 1.512t-.638 1.512q-.637.638-1.512.638Zm0-.725Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100.displayName = 'AmauiIconMaterialAccountBoxW100';

export default IconMaterialAccountBoxW100;
