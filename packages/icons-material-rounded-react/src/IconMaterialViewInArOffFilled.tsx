import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewInArOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArOffFilled'

      short_name='ViewInArOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M766-80h-86q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h14v8L146-700h14v20q0 17-11.5 28.5T120-640q-17 0-28.5-11.5T80-680v-86l-26-26q-12-12-12-28.5T54-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T790-57l-24-23Zm114-200v86l-80-80v-6q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280ZM194-880h86q17 0 28.5 11.5T320-840q0 17-11.5 28.5T280-800h-6l-80-80Zm646 240q-17 0-28.5-11.5T800-680v-120H680q-17 0-28.5-11.5T640-840q0-17 11.5-28.5T680-880h120q33 0 56.5 23.5T880-800v120q0 17-11.5 28.5T840-640ZM160-80q-33 0-56.5-23.5T80-160v-120q0-17 11.5-28.5T120-320q17 0 28.5 11.5T160-280v120h120q17 0 28.5 11.5T320-120q0 17-11.5 28.5T280-80H160Zm280-101L240-296q-19-11-29.5-29.5T200-365v-230q0-21 10.5-39.5T240-664l36-20 408 408-164 95q-19 11-40 11t-40-11Zm309-144L581-493l99-57v-45l-42-24-115 68-175-175 92-53q19-11 40-11t40 11l200 115q19 11 29.5 29.5T760-595v230q0 11-3 21t-8 19Zm-269 75 40-23v-167L368-592l-46-27-42 24v45l160 93v184l40 23Z"/>
    </Icon>
  );
});

IconMaterialViewInArOffFilled.displayName = 'OnesyIconMaterialViewInArOffFilled';

export default IconMaterialViewInArOffFilled;
