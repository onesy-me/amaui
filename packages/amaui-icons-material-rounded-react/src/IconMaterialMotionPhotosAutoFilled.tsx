import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPhotosAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosAutoFilled'

      short_name='MotionPhotosAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.225 15.5q.175 0 .35-.113.175-.112.225-.262l.6-1.675h3.2l.6 1.65q.05.175.213.287.162.113.362.113.4 0 .588-.262.187-.263.037-.638l-2.45-6.45q-.1-.275-.375-.462Q12.3 7.5 12 7.5q-.275 0-.562.188-.288.187-.388.462l-2.425 6.475q-.125.35.038.613.162.262.562.262Zm1.575-3.2L11.95 9h.1l1.15 3.3ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-.65.088-1.275.087-.625.237-1.25.125-.55.55-.763.425-.212.925.038.275.15.425.475.15.325.05.675-.125.525-.2 1.05Q4 11.475 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-.55 0-1.075.075-.525.075-1.025.2-.35.1-.662-.038Q8.925 4.1 8.75 3.8q-.275-.45-.025-.9t.775-.575q.6-.175 1.225-.25Q11.35 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM5.5 7q-.625 0-1.062-.438Q4 6.125 4 5.5t.438-1.062Q4.875 4 5.5 4t1.062.438Q7 4.875 7 5.5t-.438 1.062Q6.125 7 5.5 7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosAutoFilled.displayName = 'AmauiIconMaterialMotionPhotosAutoFilled';

export default IconMaterialMotionPhotosAutoFilled;
