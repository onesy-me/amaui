import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistoryEduFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryEduFilled'

      short_name='HistoryEdu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-.825 0-1.412-.587Q6 18.825 6 18v-2q0-.425.287-.713Q6.575 15 7 15h2v-2.25q-.875-.05-1.662-.388-.788-.337-1.438-1.012v-1.1H4.75l-2.4-2.4q-.425-.425-.425-.875t.425-.8q.725-.625 1.788-.95Q5.2 4.9 6.4 4.9q.675 0 1.313.1.637.1 1.287.375V5q0-.425.288-.713Q9.575 4 10 4h10q.425 0 .712.287Q21 4.575 21 5v12q0 1.25-.875 2.125T18 20Zm3-5h5q.425 0 .712.287.288.288.288.713v1q0 .425.288.712.287.288.712.288t.712-.288Q19 17.425 19 17V6h-8v.6l5.7 5.7q.175.175.238.325.062.15.062.375 0 .425-.288.712Q16.425 14 16 14q-.225 0-.375-.062-.15-.063-.325-.238l-2.55-2.55-.2.2q-.35.35-.738.625-.387.275-.812.425ZM5.6 8.25h2.3v2.15q.3.2.625.275.325.075.675.075.575 0 1.038-.175.462-.175.912-.625l.2-.2-1.4-1.4q-.725-.725-1.625-1.088Q7.425 6.9 6.4 6.9q-.5 0-.95.075-.45.075-.9.225Z"/>
    </Icon>
  );
});

IconMaterialHistoryEduFilled.displayName = 'AmauiIconMaterialHistoryEduFilled';

export default IconMaterialHistoryEduFilled;
