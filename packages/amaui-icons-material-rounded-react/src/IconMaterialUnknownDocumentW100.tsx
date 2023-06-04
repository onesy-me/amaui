import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownDocumentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocumentW100'

      short_name='UnknownDocument'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 256v259-3 384-640 148-148Zm120 374h113q5-8 10-14.5t10-13.5H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0 160h78q-1-7-1.5-14t-.5-14h-76q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm-87.849 134Q206 924 189 907q-17-17-17-43V288q0-26 17-43t43-17h289q12.444 0 23.722 5T564 246l126 126q8 8 13 19.278 5 11.278 5 23.722v105q-7-2-13.5-3t-14.5-2V404H561.582Q549 404 540.5 395.49T532 374.4V256H232q-12 0-22 10t-10 22v576q0 12 10 22t22 10h204q5 8 10.5 14.5T458 924H232.151ZM644 612q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Zm0 260q8.462 0 14.231-5.769T664 852q0-8.462-5.769-14.231T644 832q-8.462 0-14.231 5.769T624 852q0 8.462 5.769 14.231T644 872Zm0-228q-18.627 0-34.314 9.5Q594 663 584 680q-3 5-.632 9.789 2.369 4.79 7.895 7Q596 699 601.5 697.5t8.5-6.5q6-8 14.716-13.5t19.176-5.5Q659 672 669.5 682t10.5 23.542q0 11.458-7 19.958-7 8.5-15 16.5-6 6-11.5 12.5T636 768q-4 5-5 11.5t-1 12.625Q630 800 633.5 806t10 6q6.5 0 10.5-4.8t4-11.2q0-10.532 6-18.67 6-8.138 14-15.798 12-10.532 21-24.66T708 706q0-26.156-18.823-44.078Q670.353 644 644 644Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocumentW100.displayName = 'AmauiIconMaterialUnknownDocumentW100';

export default IconMaterialUnknownDocumentW100;
