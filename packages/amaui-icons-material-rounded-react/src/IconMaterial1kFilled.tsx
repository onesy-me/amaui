import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kFilled'

      short_name='1k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 15q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.237.212.138.088.313.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L13.5 11.25V9.725q0-.3-.212-.513Q13.075 9 12.75 9q-.325 0-.537.212Q12 9.425 12 9.75v4.525q0 .3.213.512.212.213.537.213Zm-3.5 0q.325 0 .538-.213.212-.212.212-.537v-4.5q0-.325-.212-.538Q9.575 9 9.25 9H7.725q-.3 0-.512.212Q7 9.425 7 9.75q0 .325.213.537.212.213.537.213h.75v3.775q0 .3.213.512.212.213.537.213ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterial1kFilled.displayName = 'AmauiIconMaterial1kFilled';

export default IconMaterial1kFilled;
