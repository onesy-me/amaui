import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheaterComedyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheaterComedyFilled'

      short_name='TheaterComedy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 7.5q.425 0 .712-.287Q20 6.925 20 6.5t-.288-.713Q19.425 5.5 19 5.5t-.712.287Q18 6.075 18 6.5t.288.713q.287.287.712.287ZM7 22q-2.5 0-4.25-1.75T1 16v-5q0-.825.588-1.413Q2.175 9 3 9h8q.825 0 1.413.587Q13 10.175 13 11v5q0 2.5-1.75 4.25T7 22Zm-2-7.5q.425 0 .713-.288Q6 13.925 6 13.5t-.287-.713Q5.425 12.5 5 12.5t-.713.287Q4 13.075 4 13.5t.287.712q.288.288.713.288Zm4 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 12.5 9 12.5t-.712.287Q8 13.075 8 13.5t.288.712q.287.288.712.288Zm-2 3.4q.775 0 1.4-.325.625-.325.9-.825.125-.225 0-.488Q9.175 16 8.85 16h-3.7q-.35 0-.475.25t.025.5q.275.5.913.825Q6.25 17.9 7 17.9ZM17 15q-.65 0-1.287-.137-.638-.138-1.213-.413V9.5l.15.725q-.125.25.05.463.175.212.5.212h3.6q.325 0 .5-.212.175-.213.05-.463-.275-.575-.925-.9Q17.775 9 17 9t-1.425.325q-.65.325-.925.9L14.5 9.5q0-.525-.225-.938-.225-.412-.625-.687l.65-.65q.15.125.325.2.175.075.375.075.425 0 .713-.287Q16 6.925 16 6.5t-.287-.713Q15.425 5.5 15 5.5t-.712.287Q14 6.075 14 6.5q0 .2.088.4.087.2.212.325l-.65.65q-.25-.175-.525-.275-.275-.1-.625-.1H11V4q0-.825.588-1.413Q12.175 2 13 2h8q.825 0 1.413.587Q23 3.175 23 4v5q0 2.5-1.75 4.25T17 15Z"/>
    </Icon>
  );
});

IconMaterialTheaterComedyFilled.displayName = 'AmauiIconMaterialTheaterComedyFilled';

export default IconMaterialTheaterComedyFilled;
