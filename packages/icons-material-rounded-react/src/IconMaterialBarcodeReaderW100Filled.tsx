import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarcodeReaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderW100Filled'

      short_name='BarcodeReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240.09-200Q206-200 186-226.5T174-285l77-289q-32-8-55.5-37.5T172-680q0-44.55 31.73-76.28Q235.45-788 280-788h268q33.63 0 50.81 28.5Q616-731 601-701l-48 96q-8.21 15-22.02 24-13.81 9-30.98 9H391l-16 61q12 1 20.5 9.34 8.5 8.33 8.5 20.66v48q0 12.75-8.62 21.37Q386.75-403 374-403h-28l-40 154q-6.25 21.72-24.43 35.36T240.09-200ZM812-825l-91 40q-6 3-12.16.53-6.16-2.48-8.84-8.53-3-6-.68-12.16 2.31-6.16 8.68-8.84l91-40q6-3 12.21-.53 6.2 2.48 8.79 8.53 3 6 .53 12.16-2.48 6.16-8.53 8.84ZM709-545q-6.29-2.76-9.14-9.38-2.86-6.62.14-12.36 3-6.26 9.5-8.76t12.5.5l90 42q6 3 8 8.5t-1 11.5q-3 6-8.5 8t-11.5 0l-90-40Zm121-119H730q-6.93 0-11.47-4.55-4.53-4.54-4.53-11.5 0-6.95 4.53-11.45 4.54-4.5 11.47-4.5h100q6.93 0 11.47 4.55 4.53 4.54 4.53 11.5 0 6.95-4.53 11.45-4.54 4.5-11.47 4.5Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderW100Filled.displayName = 'OnesyIconMaterialBarcodeReaderW100Filled';

export default IconMaterialBarcodeReaderW100Filled;
