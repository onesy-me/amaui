import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsKabaddiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsKabaddiFilled'

      short_name='SportsKabaddi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.475 4.5q-.825 0-1.413-.588-.587-.587-.587-1.412t.587-1.413Q15.65.5 16.475.5q.825 0 1.413.587.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588Zm-5 4q-.825 0-1.413-.588-.587-.587-.587-1.412t.587-1.412q.588-.588 1.413-.588.825 0 1.413.588.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588Zm2.45 5.425q-1.175-.125-2.187-.575-1.013-.45-1.813-1.25l-.7-.7-2.35 2.35 2.1 2.15V21q0 .425-.287.712Q8.4 22 7.975 22t-.712-.288q-.288-.287-.288-.712v-4.25l-1.3-1.2v2.2l-3.55 3.55q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.95-2.95-1.1-2.95q-.175-.45-.075-1.038.1-.587.575-1.062l3.3-3.3q.3-.3.65-.45Q7.375 8 7.8 8q.425 0 .775.15.35.15.65.45l2 1.95q.55.55 1.263.9.712.35 1.562.475.4.05.663.337.262.288.262.663 0 .45-.312.75-.313.3-.738.25Zm6.75 7.275-1.6-6.7-2.1 2V21q0 .425-.287.712-.288.288-.713.288t-.712-.288q-.288-.287-.288-.712v-6l2.1-2-.6-3.5q-.375.45-.825.8-.45.35-.975.65-.825-.05-1.562-.35-.738-.3-1.238-.8 1.125-.2 1.988-.763.862-.562 1.412-1.437l1-1.6q.425-.675 1.175-.913.75-.237 1.475.063l4.45 1.9q.275.125.437.362.163.238.163.538V11q0 .425-.287.712-.288.288-.713.288t-.712-.288q-.288-.287-.288-.712V8.6l-1.8-.7 2.55 12.875q.1.5-.2.862-.3.363-.825.363-.35 0-.65-.225-.3-.225-.375-.575Z"/>
    </Icon>
  );
});

IconMaterialSportsKabaddiFilled.displayName = 'AmauiIconMaterialSportsKabaddiFilled';

export default IconMaterialSportsKabaddiFilled;
