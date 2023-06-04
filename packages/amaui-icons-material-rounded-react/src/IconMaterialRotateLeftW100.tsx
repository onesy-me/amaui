import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftW100'

      short_name='RotateLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.75 12.05q-.175 0-.275-.112-.1-.113-.05-.288.15-.85.463-1.588.312-.737.762-1.387.1-.125.262-.138.163-.012.288.113.075.075.088.2.012.125-.063.225-.425.625-.7 1.3-.275.675-.425 1.4-.025.125-.125.2-.1.075-.225.075Zm5.825 8.575q-.8-.175-1.55-.488-.75-.312-1.4-.762-.125-.1-.137-.25-.013-.15.112-.275.075-.075.2-.088.125-.012.225.063.625.425 1.3.687.675.263 1.375.388.125.025.213.138.087.112.087.237 0 .2-.125.3-.125.1-.3.05Zm-4.925-3.2Q5.175 16.75 4.875 16q-.3-.75-.45-1.55-.05-.175.063-.288.112-.112.287-.112.125 0 .213.075.087.075.112.2.15.725.425 1.4.275.675.7 1.3.075.1.075.213 0 .112-.1.212-.125.125-.288.112-.162-.012-.262-.137Zm7.75 3.2q-.175.05-.287-.05-.113-.1-.113-.275 0-.125.075-.225t.2-.125q2.5-.5 4.112-2.438Q19 15.575 19 13.05q0-2.925-2.038-4.962Q14.925 6.05 12 6.05h-.95l2 2q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2.325-2.325q-.125-.125-.175-.25Q10 5.85 10 5.7q0-.15.05-.275.05-.125.175-.25L12.55 2.85q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2 2H12q3.2 0 5.45 2.25t2.25 5.45q0 2.825-1.787 4.95-1.788 2.125-4.513 2.625Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftW100.displayName = 'AmauiIconMaterialRotateLeftW100';

export default IconMaterialRotateLeftW100;
