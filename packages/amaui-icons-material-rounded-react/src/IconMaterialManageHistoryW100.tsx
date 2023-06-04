import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageHistoryW100'

      short_name='ManageHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 4.3q3.2 0 5.45 2.25T19.65 12v.35h-.7V12q0-2.925-2.037-4.963Q14.875 5 11.95 5q-1.5 0-2.825.612Q7.8 6.225 6.75 7.3H8.8q.15 0 .25.1t.1.25q0 .15-.1.25T8.8 8H6.3q-.325 0-.537-.213-.213-.212-.213-.537v-2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8q1.125-1.175 2.6-1.838 1.475-.662 3.1-.662Zm2.15 10.275-2.2-2.2q-.125-.125-.175-.25-.05-.125-.05-.275v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5l2.1 2.1ZM11.575 19.7q-2.675-.125-4.687-1.863Q4.875 16.1 4.4 13.5q-.05-.15.025-.275.075-.125.225-.175.15-.05.25.037.1.088.15.238.5 2.275 2.163 3.812 1.662 1.538 3.912 1.813l.45.75Zm7.5 2.525q-.55-.075-1.013-.338-.462-.262-.812-.687l-.9.3q-.1.025-.175-.013-.075-.037-.125-.112-.05-.1-.037-.2.012-.1.087-.15l.7-.55q-.225-.55-.225-1.125t.225-1.125l-.725-.575q-.1-.05-.1-.162 0-.113.05-.213.05-.1.15-.15.1-.05.2 0l.9.35q.35-.4.812-.65.463-.25.988-.35l.125-.9q.025-.1.1-.163.075-.062.175-.062.1 0 .175.062.075.063.1.163l.125.9q.55.1 1.025.375.475.275.825.7l.925-.35q.1-.05.2.012.1.063.15.163.05.1.05.212 0 .113-.1.163l-.775.575q.175.5.188 1.037.012.538-.188 1.038l.825.625q.075.05.088.15.012.1-.038.2-.05.075-.125.112-.075.038-.175.013l-1.025-.35q-.35.45-.825.725-.475.275-1.025.35l-.125.9q-.025.1-.1.163-.075.062-.175.062-.1 0-.175-.062-.075-.063-.1-.163Zm.4-.675q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialManageHistoryW100.displayName = 'AmauiIconMaterialManageHistoryW100';

export default IconMaterialManageHistoryW100;
