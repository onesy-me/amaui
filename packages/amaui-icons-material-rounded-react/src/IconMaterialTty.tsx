import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTty = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tty'

      short_name='Tty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 6q-.425 0-.712-.287Q14 5.425 14 5t.288-.713Q14.575 4 15 4t.713.287Q16 4.575 16 5t-.287.713Q15.425 6 15 6Zm3 0q-.425 0-.712-.287Q17 5.425 17 5t.288-.713Q17.575 4 18 4t.712.287Q19 4.575 19 5t-.288.713Q18.425 6 18 6Zm-6 0q-.425 0-.712-.287Q11 5.425 11 5t.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5t-.287.713Q12.425 6 12 6Zm9 0q-.425 0-.712-.287Q20 5.425 20 5t.288-.713Q20.575 4 21 4t.712.287Q22 4.575 22 5t-.288.713Q21.425 6 21 6Zm-4 3q-.425 0-.712-.288Q16 8.425 16 8t.288-.713Q16.575 7 17 7t.712.287Q18 7.575 18 8t-.288.712Q17.425 9 17 9Zm3 0q-.425 0-.712-.288Q19 8.425 19 8t.288-.713Q19.575 7 20 7t.712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Zm-6 0q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7t.713.287Q15 7.575 15 8t-.287.712Q14.425 9 14 9Zm4 3q-.425 0-.712-.288Q17 11.425 17 11t.288-.713Q17.575 10 18 10t.712.287Q19 10.575 19 11t-.288.712Q18.425 12 18 12Zm-3 0q-.425 0-.712-.288Q14 11.425 14 11t.288-.713Q14.575 10 15 10t.713.287Q16 10.575 16 11t-.287.712Q15.425 12 15 12Zm6 0q-.425 0-.712-.288Q20 11.425 20 11t.288-.713Q20.575 10 21 10t.712.287Q22 10.575 22 11t-.288.712Q21.425 12 21 12Zm-9 0q-.425 0-.712-.288Q11 11.425 11 11t.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11t-.287.712Q12.425 12 12 12Zm6.95 9q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q2 7.275 2 4.05q0-.45.3-.75t.75-.3H7.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L5.975 10.9q1.05 1.8 2.638 3.375Q10.2 15.85 12.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM5.025 9l1.65-1.65L6.25 5H4.025q.125 1.025.35 2.025.225 1 .65 1.975ZM18 18.95v-2.2l-2.35-.475-1.675 1.675q.975.425 1.988.675 1.012.25 2.037.325Zm-4-1.025ZM5.025 9Z"/>
    </Icon>
  );
});

IconMaterialTty.displayName = 'AmauiIconMaterialTty';

export default IconMaterialTty;
