import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguagePinyin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguagePinyin'

      short_name='LanguagePinyin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-600h-80v120h80v-120ZM280-800q17 0 28.5 11.5T320-760v80h20q17 0 28.5 11.5T380-640q0 17-11.5 28.5T340-600h-20v96q7-5 13.5-8.5T347-521q9-6 19 1t10 20q0 18-6.5 34T348-440q-7 5-13.5 9t-14.5 8v203q0 23-18.5 41.5T260-160h-49q-14 0-25-8t-14-22q-5-19 7-34.5t32-15.5h9q8 0 14-6t6-14v-125q-7 3-13 6t-13 5q-15 6-29-1.5T168-399q-3-17 6-31t25-19q11-4 21-7.5t20-7.5v-136h-20q-17 0-28.5-11.5T180-640q0-17 11.5-28.5T220-680h20v-80q0-17 11.5-28.5T280-800Zm376 135q-14-6-18.5-21t3.5-29q8-12 15-24.5t14-24.5q8-15 23.5-21.5t31.5-.5q15 5 20.5 19.5T743-738q-8 14-16 27t-16 27q-9 14-24.5 20t-30.5-1Zm-122-11q-14 8-30 4t-26-18q-8-11-16.5-22T445-734q-10-12-6.5-27t17.5-22q16-8 32.5-3.5T516-768q8 10 15 20l14 20q9 13 6 28.5T534-676ZM384-160q-17 0-28.5-11.5T344-200q0-11 5-19.5t13-13.5q42-28 71-73t40-94h-33q-17 0-28.5-11.5T400-440q0-17 11.5-28.5T440-480h40v-120h-20q-17 0-28.5-11.5T420-640q0-17 11.5-28.5T460-680h280q17 0 28.5 11.5T780-640q0 17-11.5 28.5T740-600h-20v120h40q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400h-40v200q0 17-11.5 28.5T680-160q-17 0-28.5-11.5T640-200v-200h-86q-13 68-52 131.5T406-167q-5 3-10.5 5t-11.5 2Z"/>
    </Icon>
  );
});

IconMaterialLanguagePinyin.displayName = 'OnesyIconMaterialLanguagePinyin';

export default IconMaterialLanguagePinyin;
