import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoPresentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentW100'

      short_name='CoPresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 19.15V4.35H3v8h-.7v-8.7h19.4v15.5ZM9 13.2q-1.125 0-1.912-.788Q6.3 11.625 6.3 10.5t.788-1.912Q7.875 7.8 9 7.8t1.913.788q.787.787.787 1.912t-.787 1.912Q10.125 13.2 9 13.2Zm0-.7q.825 0 1.413-.588Q11 11.325 11 10.5t-.587-1.413Q9.825 8.5 9 8.5q-.825 0-1.412.587Q7 9.675 7 10.5q0 .825.588 1.412.587.588 1.412.588Zm-6.7 7.7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q7.65 15.8 9 15.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.238-.662-.237-.313-.662-.538-1.2-.575-2.487-.888Q10.325 16.5 9 16.5t-2.612.312Q5.1 17.125 3.9 17.7q-.425.225-.663.538Q3 18.55 3 18.9Zm6-9Zm0 9Z"/>
    </Icon>
  );
});

IconMaterialCoPresentW100.displayName = 'AmauiIconMaterialCoPresentW100';

export default IconMaterialCoPresentW100;
