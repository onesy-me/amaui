import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiscFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFull'

      short_name='DiscFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.875 0 3.188-1.312Q16.5 13.875 16.5 12q0-1.875-1.312-3.188Q13.875 7.5 12 7.5q-1.875 0-3.188 1.312Q7.5 10.125 7.5 12q0 1.875 1.312 3.188Q10.125 16.5 12 16.5Zm0-3.5q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm5.625 7.25q-1.275.85-2.7 1.3Q13.5 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q2.625 0 4.863 1.237Q19.1 4.475 20.45 6.675q.225.375.075.775-.15.4-.575.575-.35.125-.712.012-.363-.112-.588-.462-1.1-1.675-2.862-2.625Q14.025 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q1.225 0 2.375-.363 1.15-.362 2.125-1.037.425-.275.825-.187.4.087.625.512.175.35.075.738-.1.387-.4.587ZM21 18q-.425 0-.712-.288Q20 17.425 20 17v-6q0-.425.288-.713Q20.575 10 21 10t.712.287Q22 10.575 22 11v6q0 .425-.288.712Q21.425 18 21 18Zm0 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22Zm-3.375-1.75q.3-.2.4-.587.1-.388-.075-.738-.225-.425-.625-.512-.4-.088-.825.187-.975.675-2.125 1.037Q13.225 20 12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q2.025 0 3.788.95 1.762.95 2.862 2.625.225.35.588.462.362.113.712-.012.425-.175.575-.575.15-.4-.075-.775.2.4.375.662Q21 7.6 21.15 8H20q-.825 0-1.413.587Q18 9.175 18 10v10Z"/>
    </Icon>
  );
});

IconMaterialDiscFull.displayName = 'AmauiIconMaterialDiscFull';

export default IconMaterialDiscFull;
