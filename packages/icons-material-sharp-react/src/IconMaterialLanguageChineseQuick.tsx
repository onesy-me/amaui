import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageChineseQuick = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageChineseQuick'

      short_name='LanguageChineseQuick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m98-258-25-43q21-11 39-25.5t36-29.5v-115H81v-44h113v156q20 25 50 38t62 13q56 0 111.5-1t111.5-4q-5 11-9 23t-7 24q-52 2-103.5 1T306-266q-38 0-74-13t-62-41q-17 17-35 32.5T98-258Zm238-58v-106q-22 29-50 51t-58 42q-7-9-14.5-17.5T197-363q35-15 64.5-38t52.5-52h-84v-129h107v-30H210v-41h127v-48h44v48h136v41H381v30h113v128h-91q25 29 55 51t65 37q-10 8-18.5 16.5T491-330q-32-17-59.5-40.5T381-421v105h-45Zm0-227h-61v51h61v-51Zm114 0h-70v51h70v-51Zm-278-37q-17-26-39.5-46.5T83-662l34-29q26 17 47.5 38t43.5 43l-36 30Zm633 196v-106q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636-390q0 26 18 41t48 15q28 0 54.5-13t48.5-37Zm13 109-6-45q-28 25-61.5 39.5T679-266q-57 0-90-32.5T556-387q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721-635q-26 0-51.5 9.5T604-592l-32-56q33-25 77.5-40.5T740-704q71 0 108 44t37 128v257h-67Z"/>
    </Icon>
  );
});

IconMaterialLanguageChineseQuick.displayName = 'OnesyIconMaterialLanguageChineseQuick';

export default IconMaterialLanguageChineseQuick;
