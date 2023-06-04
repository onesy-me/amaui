import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeReaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderFilled'

      short_name='BarcodeReader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.5 0-2.388-1.163-.887-1.162-.512-2.587l1.8-6.8q-.825-.525-1.362-1.425Q3 8.125 3 7q0-1.65 1.175-2.825Q5.35 3 7 3h8q1.125 0 1.7.95t.075 1.95l-2 4q-.275.5-.737.8-.463.3-1.038.3h-2.025l-.275 1h.3q.425 0 .713.287.287.288.287.713v2q0 .425-.287.712Q11.425 16 11 16H9.65l-.75 2.8q-.275.975-1.075 1.587Q7.025 21 6 21ZM21.925 3.675 19.675 4.7q-.275.125-.562.012-.288-.112-.413-.387t-.025-.563q.1-.287.375-.412l2.25-1.025q.275-.125.575-.013.3.113.425.388t.012.562q-.112.288-.387.413Zm-2.85 7q-.275-.125-.4-.425t0-.575q.125-.3.425-.4.3-.1.6.025l2.25 1.05q.275.125.375.412.1.288-.025.563-.125.275-.412.387-.288.113-.563-.012ZM22.25 7.75h-2.5q-.325 0-.538-.213Q19 7.325 19 7q0-.325.212-.537.213-.213.538-.213h2.5q.325 0 .538.213Q23 6.675 23 7q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderFilled.displayName = 'AmauiIconMaterialBarcodeReaderFilled';

export default IconMaterialBarcodeReaderFilled;
