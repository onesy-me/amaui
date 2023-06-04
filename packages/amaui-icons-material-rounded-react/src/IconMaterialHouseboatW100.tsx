import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseboatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatW100'

      short_name='Houseboat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.675 17.7q-1.175 0-1.75-.5t-1.575-.5q-.75 0-1.212.325-.463.325-1.038.55-.2.075-.325-.05T2.65 17.2q0-.1.063-.175.062-.075.162-.125.65-.225 1.1-.563.45-.337 1.35-.337 1.2 0 1.788.5.587.5 1.537.5 1.025 0 1.613-.5Q10.85 16 12 16q1.15 0 1.738.5.587.5 1.612.5.95 0 1.538-.5.587-.5 1.787-.5.975 0 1.363.312.387.313 1.087.588.1.05.163.138.062.087.062.187 0 .2-.125.313-.125.112-.325.037-.575-.225-1.05-.55-.475-.325-1.2-.325-1 0-1.575.5t-1.75.5q-1.2 0-1.725-.5-.525-.5-1.6-.5-1.075 0-1.6.5-.525.5-1.725.5Zm-1.925-4q-.475 0-.912-.163-.438-.162-.763-.512l-.675-.7q-.1-.1-.088-.238.013-.137.113-.237.1-.1.225-.1t.225.1l.7.675q.225.225.525.35.3.125.65.125H8.3V8.675l-1.05.775q-.125.075-.25.062-.125-.012-.225-.137t-.087-.25Q6.7 9 6.825 8.9l4.725-3.5q.1-.075.212-.113.113-.037.238-.037.125 0 .238.037.112.038.212.113l4.7 3.475q.125.1.138.238.012.137-.088.262-.1.125-.225.15-.125.025-.25-.075L15.7 8.7V13h1.55q.35 0 .65-.125.3-.125.525-.35l.7-.675q.1-.1.238-.1.137 0 .237.1.1.1.1.237 0 .138-.1.238l-.675.675q-.35.35-.775.525-.425.175-.9.175ZM9 13h2.65v-2h.7v2H15V8.175L12 5.95l-3 2.2Zm0 0h6-6Z"/>
    </Icon>
  );
});

IconMaterialHouseboatW100.displayName = 'AmauiIconMaterialHouseboatW100';

export default IconMaterialHouseboatW100;
