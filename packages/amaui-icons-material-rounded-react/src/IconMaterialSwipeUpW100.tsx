import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpW100'

      short_name='SwipeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.475 13.1q-.125.125-.287.112-.163-.012-.263-.162-.975-1.475-1.5-3.088Q3.9 8.35 3.9 6.5q0-1.025.063-1.963.062-.937.187-1.662L2.25 4.8q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.238 0-.137.1-.237L3.975 2.1q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L7.25 4.325q.1.1.1.237 0 .138-.1.238-.1.1-.25.1t-.25-.1l-1.9-1.925q-.125.725-.187 1.675Q4.6 5.5 4.6 6.5q0 1.7.513 3.262.512 1.563 1.387 2.888.075.1.062.237-.012.138-.087.213Zm8.75 7.525-4.9-1.85q-.225-.075-.362-.288-.138-.212-.113-.462.025-.2.175-.375t.375-.225l3.4-.775-3.975-8.9q-.2-.475-.037-.925.162-.45.637-.65t.938-.038q.462.163.662.638l2.15 4.85.95-.425q.1-.05.2-.05h.175l3.4.125q.825.05 1.412.637.588.588.788 1.388l1 3.925q.05.25-.062.463-.113.212-.363.337l-5.85 2.6q-.125.05-.287.05-.163 0-.313-.05Zm.325-.65 5.85-2.6-1-3.925q-.125-.525-.5-.963-.375-.437-1.025-.487l-3.45-.175-1.6.725-2.45-5.475q-.1-.2-.275-.288-.175-.087-.375.013-.2.1-.275.287-.075.188.025.388l4.3 9.675-4.225.95Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpW100.displayName = 'AmauiIconMaterialSwipeUpW100';

export default IconMaterialSwipeUpW100;
