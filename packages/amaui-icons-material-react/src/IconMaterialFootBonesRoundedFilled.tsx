import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFootBonesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FootBonesRoundedFilled'
      short_name='FootBones'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-1q0-.825.588-1.412Q3.175 15 4 15t1.412.588Q6 16.175 6 17v1q0 .825-.588 1.413Q4.825 20 4 20Zm17.05 0H19.5q-.25 0-.4-.188-.15-.187-.1-.437l.275-1.075q.05-.2.2-.312.15-.113.35-.063l1.35.2q.35.05.588.313.237.262.237.612 0 .4-.275.675T21.05 20Zm-3.7-.35-2.85-.95q-.2-.075-.3-.275-.1-.2 0-.4l.75-1.725q.1-.2.313-.288.212-.087.412.038l2.4 1.4q.15.075.213.225.062.15.012.325l-.3 1.3q-.05.2-.25.313-.2.112-.4.037ZM12.7 17.9l-1.95-.5q-.35-.1-.55-.362-.2-.263-.2-.613V15.5q0-.575.2-1.075t.675-.8q.125-.075.25-.088.125-.012.25.063l2.55 1.4q.175.1.238.287.062.188-.013.363l-.875 1.975q-.075.175-.237.25-.163.075-.338.025ZM7.45 17q-.2 0-.325-.113-.125-.112-.15-.287-.175-1.125-1.012-1.862Q5.125 14 4 14h-.5q-.2 0-.35-.15Q3 13.7 3 13.5q0-.2.15-.35.15-.15.35-.15h.9q.5 0 .95-.125.45-.125.875-.4.125-.075.275-.075.15 0 .275.075.5.3 1.075.412Q8.425 13 9 13q.3 0 .425.312.125.313-.075.613-.225.35-.288.75-.062.4-.062.825v1q0 .2-.15.35-.15.15-.35.15Zm-3-5q-1.05 0-1.75-.688Q2 10.625 2 9.6q0-.475.175-.925.175-.45.525-.8l1.3-1.3V4h5v2.575l1.3 1.3q.35.35.525.787.175.438.175.913 0 1.025-.7 1.725-.7.7-1.75.7-.475 0-.9-.2-.425-.2-.775-.5-.1-.075-.175-.138-.075-.062-.2-.062-.175 0-.375.2-.35.3-.787.487-.438.188-.888.213Z"/>
    </Icon>
  );
});

IconMaterialFootBonesRoundedFilled.displayName = 'AmauiIconMaterialFootBonesRoundedFilled';

export default IconMaterialFootBonesRoundedFilled;
