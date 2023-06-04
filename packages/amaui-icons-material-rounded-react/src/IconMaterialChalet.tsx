import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChalet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chalet'

      short_name='Chalet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 11q-.2 0-.35-.15-.15-.15-.15-.35v-.7l-.4.4q-.15.15-.35.15-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35l1.1-1.1v-.9h-.9l-1.1 1.1q-.15.15-.35.15-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35l.4-.4h-.7q-.2 0-.35-.15Q14 7.2 14 7q0-.2.15-.35.15-.15.35-.15h.7l-.4-.4q-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15l1.1 1.1h.9v-.9l-1.1-1.1q-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15l.4.4v-.7q0-.2.15-.35Q17.8 3 18 3q.2 0 .35.15.15.15.15.35v.7l.4-.4q.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35l-1.1 1.1v.9h.9l1.1-1.1q.15-.15.35-.15.2 0 .35.15.15.15.15.35 0 .2-.15.35l-.4.4h.7q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15h-.7l.4.4q.15.15.15.35 0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15l-1.1-1.1h-.9v.9l1.1 1.1q.15.15.15.35 0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15l-.4-.4v.7q0 .2-.15.35-.15.15-.35.15ZM6 20q-.425 0-.713-.288Q5 19.425 5 19v-3.7l-.4.4q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l6.1-6.1q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l6.1 6.1q.275.275.275.688 0 .412-.275.712-.3.3-.713.3-.412 0-.712-.3L15 15.325V19q0 .425-.287.712Q14.425 20 14 20Zm1-2h2v-2q0-.425.288-.713Q9.575 15 10 15t.713.287Q11 15.575 11 16v2h2v-4.675l-3-3-3 3Zm0 0h6-6Z"/>
    </Icon>
  );
});

IconMaterialChalet.displayName = 'AmauiIconMaterialChalet';

export default IconMaterialChalet;
