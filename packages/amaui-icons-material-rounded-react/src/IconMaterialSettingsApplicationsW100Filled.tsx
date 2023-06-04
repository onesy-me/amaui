import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsApplicationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsApplicationsW100Filled'

      short_name='SettingsApplications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM12 16q.15 0 .213-.1.062-.1.087-.25l.1-.8q.65-.125 1.05-.35.4-.225.75-.65l.775.325q.125.05.263.05.137 0 .187-.125l.025-.05q.05-.125.013-.225-.038-.1-.163-.2l-.6-.475q.2-.6.2-1.15 0-.55-.2-1.15l.6-.475q.125-.075.163-.187.037-.113-.013-.238l-.025-.05q-.05-.125-.187-.125-.138 0-.263.05l-.775.325q-.35-.425-.75-.65-.4-.225-1.05-.35l-.1-.8q-.025-.15-.087-.25Q12.15 8 12 8t-.212.1q-.063.1-.088.25l-.1.8q-.65.125-1.05.35-.4.225-.75.65l-.775-.325q-.125-.05-.263-.05-.137 0-.187.125l-.025.05q-.05.125-.012.238.037.112.162.187l.6.475q-.2.6-.2 1.15 0 .55.2 1.15l-.6.475q-.125.1-.175.187-.05.088 0 .213l.025.05q.05.125.2.137.15.013.275-.037l.775-.325q.35.425.75.65.4.225 1.05.35l.1.8q.025.15.088.25.062.1.212.1Zm0-2q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialSettingsApplicationsW100Filled.displayName = 'AmauiIconMaterialSettingsApplicationsW100Filled';

export default IconMaterialSettingsApplicationsW100Filled;
