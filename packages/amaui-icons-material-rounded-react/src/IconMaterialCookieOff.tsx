import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOff'

      short_name='CookieOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M880 576q0 61-16.5 116.5T815 796l-58-58q18-31 29-66.5t14-73.5q-50-22-78.5-60T683 453q-77-11-132-66t-68-132q-49-2-90 10t-76 33l-57-57q54-37 120.5-54.5T524 178q15 2 25 15t11 31q4 66 54 111t118 40q17-2 23.5 6t4.5 25q-5 43 19.5 75.5T839 528q18 8 29.5 21t11.5 27ZM340 696q-25 0-42.5-17.5T280 636q0-25 17.5-42.5T340 576q25 0 42.5 17.5T400 636q0 25-17.5 42.5T340 696Zm451 303-90-89q-48 32-103.5 49T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-62 17-117.5T146 355l-91-91q-12-12-11.5-28.5T56 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791 999ZM480 896q45 0 85.5-12t76.5-33L205 414q-21 36-33 76.5T160 576q0 133 93.5 226.5T480 896Zm-56-264Zm113-114Z"/>
    </Icon>
  );
});

IconMaterialCookieOff.displayName = 'AmauiIconMaterialCookieOff';

export default IconMaterialCookieOff;
