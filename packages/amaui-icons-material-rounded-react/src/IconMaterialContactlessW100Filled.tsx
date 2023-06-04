import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactlessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessW100Filled'

      short_name='Contactless'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 16.35q.125.05.275 0 .15-.05.2-.2.325-.975.475-2.025.15-1.05.15-2.125t-.15-2.125q-.15-1.05-.475-2.025-.05-.15-.188-.213-.137-.062-.287.013-.125.05-.187.2-.063.15-.013.275.275.925.438 1.9.162.975.162 1.975t-.162 1.975q-.163.975-.438 1.9-.05.125.013.275.062.15.187.2Zm-3.25-1.325q.15.05.287-.013.138-.062.188-.212.2-.675.288-1.375.087-.7.087-1.425 0-.725-.087-1.425-.088-.7-.288-1.375-.05-.15-.188-.213-.137-.062-.287-.012-.125.05-.187.175-.063.125-.013.25.175.625.263 1.288.087.662.087 1.312t-.087 1.312q-.088.663-.263 1.288-.05.125.013.25.062.125.187.175ZM7.775 13.6q.175.075.325.012.15-.062.2-.262.075-.35.113-.675.037-.325.037-.675 0-.35-.037-.675Q8.375 11 8.3 10.65q-.05-.2-.2-.263-.15-.062-.325.013-.1.05-.15.15-.05.1-.025.2.05.3.1.625t.05.625q0 .3-.05.625t-.1.625q-.025.1.025.2t.15.15ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialContactlessW100Filled.displayName = 'AmauiIconMaterialContactlessW100Filled';

export default IconMaterialContactlessW100Filled;
