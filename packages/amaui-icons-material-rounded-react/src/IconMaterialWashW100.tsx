import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashW100'

      short_name='Wash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 8.4q-.825 0-1.412-.588Q16.1 7.225 16.1 6.4q0-.75.625-1.725.625-.975 1.05-1.5.05-.075.138-.113.087-.037.187-.037t.188.037q.087.038.137.113.425.525 1.05 1.5T20.1 6.4q0 .825-.587 1.412-.588.588-1.413.588Zm-5 .8q-.5 0-.85-.35T11.9 8q0-.35.3-.813.3-.462.575-.812.05-.075.138-.113.087-.037.187-.037t.188.037q.087.038.137.113.275.35.575.812.3.463.3.813 0 .5-.35.85t-.85.35ZM5 19.75q-.8 0-1.375-.575T3.05 17.8v-3.325q0-.4.175-.763.175-.362.45-.637L8.55 8.45q.225-.2.538-.2.312 0 .512.225l.05.05q.1.1.1.225T9.7 9l-1.575 2.75h8.725q.2 0 .35.162.15.163.15.388t-.162.388q-.163.162-.388.162h-5.25q-.25 0-.425.175t-.175.425q0 .25.175.425t.425.175h6.85q.225 0 .388.162.162.163.162.388t-.162.388q-.163.162-.388.162h-6.85q-.25 0-.425.175t-.175.425q0 .25.175.425t.425.175h6.05q.225 0 .388.163.162.162.162.387t-.162.388q-.163.162-.388.162h-6.05q-.25 0-.425.175t-.175.425q0 .25.175.425t.425.175H16q.225 0 .388.162.162.163.162.388t-.162.387q-.163.163-.388.163Zm0-.7h5.25v-6.6H7.275V10.6l-3.1 2.925q-.125.1-.275.362-.15.263-.15.613v3.3q0 .5.375.875T5 19.05Zm2-4.225Z"/>
    </Icon>
  );
});

IconMaterialWashW100.displayName = 'AmauiIconMaterialWashW100';

export default IconMaterialWashW100;
