import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPhotosPausedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosPausedFilled'

      short_name='MotionPhotosPaused'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 15q.425 0 .713-.288Q11 14.425 11 14v-4q0-.425-.287-.713Q10.425 9 10 9t-.712.287Q9 9.575 9 10v4q0 .425.288.712Q9.575 15 10 15Zm4 0q.425 0 .713-.288Q15 14.425 15 14v-4q0-.425-.287-.713Q14.425 9 14 9t-.712.287Q13 9.575 13 10v4q0 .425.288.712.287.288.712.288Zm-2 7q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-.65.088-1.275.087-.625.237-1.25.125-.55.55-.763.425-.212.925.038.275.15.425.475.15.325.05.675-.125.525-.2 1.05Q4 11.475 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-.55 0-1.075.075-.525.075-1.025.2-.35.1-.662-.038Q8.925 4.1 8.75 3.8q-.275-.45-.025-.9t.775-.575q.6-.175 1.225-.25Q11.35 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM5.5 7q-.625 0-1.062-.438Q4 6.125 4 5.5t.438-1.062Q4.875 4 5.5 4t1.062.438Q7 4.875 7 5.5t-.438 1.062Q6.125 7 5.5 7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosPausedFilled.displayName = 'AmauiIconMaterialMotionPhotosPausedFilled';

export default IconMaterialMotionPhotosPausedFilled;
