import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeReaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeReaderW100Filled'

      short_name='BarcodeReader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.85 0-1.35-.663-.5-.662-.3-1.462L6.275 9.65q-.8-.2-1.387-.938Q4.3 7.975 4.3 7q0-1.125.788-1.913Q5.875 4.3 7 4.3h6.7q.85 0 1.275.712.425.713.05 1.463l-1.2 2.4q-.2.375-.55.6-.35.225-.775.225H9.775l-.4 1.525q.3.025.513.237.212.213.212.513v1.2q0 .325-.212.537-.213.213-.538.213h-.7l-1 3.85q-.15.55-.613.888Q6.575 19 6 19ZM20.3 3.375l-2.275 1q-.15.075-.3.012-.15-.062-.225-.212-.075-.15-.012-.3.062-.15.212-.225l2.275-1q.15-.075.3-.013.15.063.225.213.075.15.013.3-.063.15-.213.225Zm-2.575 7q-.15-.075-.225-.238-.075-.162 0-.312t.238-.213q.162-.062.312.013l2.25 1.05q.15.075.2.212.05.138-.025.288-.075.15-.212.2-.138.05-.288 0ZM20.75 7.4h-2.5q-.175 0-.288-.113-.112-.112-.112-.287t.112-.288q.113-.112.288-.112h2.5q.175 0 .288.112.112.113.112.288t-.112.287q-.113.113-.288.113Z"/>
    </Icon>
  );
});

IconMaterialBarcodeReaderW100Filled.displayName = 'AmauiIconMaterialBarcodeReaderW100Filled';

export default IconMaterialBarcodeReaderW100Filled;
