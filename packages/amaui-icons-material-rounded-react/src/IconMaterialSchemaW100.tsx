import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchemaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaW100'

      short_name='Schema'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.85q-.475 0-.812-.337-.338-.338-.338-.813v-1.4q0-.475.338-.813.337-.337.812-.337h.85v-4.3H6.3q-.475 0-.812-.338-.338-.337-.338-.812v-1.4q0-.475.338-.813.337-.337.812-.337h.85v-4.3H6.3q-.475 0-.812-.338-.338-.337-.338-.812V3.3q0-.475.338-.813.337-.337.812-.337h2.4q.475 0 .813.337.337.338.337.813v1.4q0 .475-.337.812-.338.338-.813.338h-.85v4.3h.85q.475 0 .813.337.337.338.337.813v.35h5.3v-.35q0-.475.338-.813.337-.337.812-.337h2.4q.475 0 .813.337.337.338.337.813v1.4q0 .475-.337.812-.338.338-.813.338h-2.4q-.475 0-.812-.338-.338-.337-.338-.812v-.35h-5.3v.35q0 .475-.337.812-.338.338-.813.338h-.85v4.3h.85q.475 0 .813.337.337.338.337.813v1.4q0 .475-.337.813-.338.337-.813.337Zm0-.7h2.45q.175 0 .288-.138.112-.137.112-.312v-1.4q0-.175-.112-.312-.113-.138-.288-.138H6.3q-.175 0-.312.138-.138.137-.138.312v1.4q0 .175.138.312.137.138.312.138Zm0-8h2.45q.175 0 .288-.138.112-.137.112-.312v-1.4q0-.175-.112-.312-.113-.138-.288-.138H6.3q-.175 0-.312.138-.138.137-.138.312v1.4q0 .175.138.312.137.138.312.138Zm10 0h2.4q.175 0 .313-.138.137-.137.137-.312v-1.4q0-.175-.137-.312-.138-.138-.313-.138h-2.4q-.175 0-.312.138-.138.137-.138.312v1.4q0 .175.138.312.137.138.312.138Zm-10-8h2.45q.175 0 .288-.138.112-.137.112-.312V3.3q0-.175-.112-.313-.113-.137-.288-.137H6.3q-.175 0-.312.137-.138.138-.138.313v1.4q0 .175.138.312.137.138.312.138ZM7.5 4Zm10 8Zm-10 0Zm0 8Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100.displayName = 'AmauiIconMaterialSchemaW100';

export default IconMaterialSchemaW100;
