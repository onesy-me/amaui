import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChangeCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeCircleFilled'

      short_name='ChangeCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.05 19 2.85-2.825-2.85-2.825L11 14.4l1.075 1.075q-.7.025-1.362-.225-.663-.25-1.188-.775-.5-.5-.763-1.15-.262-.65-.262-1.3 0-.425.113-.85.112-.425.312-.825l-1.1-1.1q-.425.625-.625 1.325T7 12q0 .95.375 1.875t1.1 1.65q.725.725 1.625 1.088.9.362 1.85.387l-.95.95Zm4.125-4.25q.425-.625.625-1.325T17 12q0-.95-.362-1.888-.363-.937-1.088-1.662-.725-.725-1.637-1.075-.913-.35-1.863-.35L13 6.05 11.95 5 9.1 7.825l2.85 2.825L13 9.6l-1.1-1.1q.675 0 1.375.262.7.263 1.2.763t.763 1.15q.262.65.262 1.3 0 .425-.113.85-.112.425-.312.825ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialChangeCircleFilled.displayName = 'AmauiIconMaterialChangeCircleFilled';

export default IconMaterialChangeCircleFilled;
