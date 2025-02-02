import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClinicalNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotesW100Filled'

      short_name='ClinicalNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-339q-35 0-59.5-24.5T596-423q0-35 24.5-59.5T680-507q35 0 59.5 24.5T764-423q0 35-24.5 59.5T680-339ZM356-196v24H232.48q-25.48 0-42.98-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v132q-24-15-51.5-23t-56.5-8q-7 0-13 .5t-13 1.5v-3q0-5.95-4.03-9.97Q645.95-642 640-642H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h288q-42 16-72.5 47T489-494H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h161q-5 26-4 52.5t9 52.5q-9 4-17.5 7.5T452-346H320q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h90q-26 23-40 55.5T356-196Zm150 80q-12.75 0-21.37-8.63Q476-133.25 476-146v-50q0-11.57 5.53-21.75Q487.05-227.94 497-234q26-16 45.5-22.5t49.7-11.75q9.8-1.75 18.8.39 9 2.15 15 9.86l54 71 53-71q6-8 15-10t19.04-.25Q798-263 816.82-256.6q18.81 6.39 46.18 22.6 10 6 15 16t6 21v51q0 12.75-8.62 21.37Q866.75-116 854-116H506Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotesW100Filled.displayName = 'OnesyIconMaterialClinicalNotesW100Filled';

export default IconMaterialClinicalNotesW100Filled;
