import React from 'react';

import { is, TMethod, setObjectValue } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ButtonElement from '../Button';
import ConfirmContext from './Context';
import ModalHeaderElement from '../ModalHeader';
import ModalFooterElement from '../ModalFooter';
import ModalTitleElement from '../ModalTitle';
import ModalMainElement from '../ModalMain';
import ModalTextElement from '../ModalText';
import ModalElement from '../Modal';
import { staticClassName } from '../utils';
import { IBaseElement } from '../types';

export interface IConfirmOpen {
  modal?: (promise: IConfirmPromiseArgument) => React.ReactElement;

  name?: string | boolean | React.ReactElement;
  description?: string | React.ReactElement;
  buttons?: {
    positive?: {
      text?: string
    };
    negative?: {
      text?: string
    };
  };

  throwError?: boolean;

  ButtonNegativeProps?: any;
  ButtonPositiveProps?: any;

  [p: string]: any;
}

export interface IConfirmPromiseArgument {
  resolve: TMethod;
  reject: TMethod;
}

export interface IConfirmValue {
  open: (value?: IConfirmOpen) => Promise<any>;
  close: (confirmed?: boolean) => void;
}

const useStyle = styleMethod(theme => ({
  root: {
    '& .amaui-ModalMain-root': {
      padding: `12px 0 12px`
    },

    '& .amaui-ModalFooter-root': {
      padding: `12px 0 12px`
    },

    '& .amaui-Modal-background:not(.amaui-Modal-background-invisible)': {
      background: theme.methods.palette.color.colorToRgb(theme.methods.palette.color.value('default', 10), theme.palette.light ? 20 : 40)
    }
  },

  surface: {
    '&.amaui-Surface-root': {
      background: theme.palette.color.primary[theme.palette.light ? 99 : 5]
    }
  }
}), { name: 'amaui-Confirm' });

export interface IConfirm extends IBaseElement {
  throwError?: boolean;

  onOpen?: () => any;

  onClose?: () => any;
}

const Confirm: React.FC<IConfirm> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiConfirm?.props?.default, ...props_ }), [props_]);

  const ModalHeader = React.useMemo(() => theme?.elements?.ModalHeader || ModalHeaderElement, [theme]);

  const ModalFooter = React.useMemo(() => theme?.elements?.ModalFooter || ModalFooterElement, [theme]);

  const ModalTitle = React.useMemo(() => theme?.elements?.ModalTitle || ModalTitleElement, [theme]);

  const ModalMain = React.useMemo(() => theme?.elements?.ModalMain || ModalMainElement, [theme]);

  const ModalText = React.useMemo(() => theme?.elements?.ModalText || ModalTextElement, [theme]);

  const Modal = React.useMemo(() => theme?.elements?.Modal || ModalElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const {
    throwError,

    onOpen,

    onClose,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [openModal, setOpenModal] = React.useState(false);

  const refs = {
    value: React.useRef<IConfirmValue>({} as any),

    modal: React.useRef<IConfirmOpen>(),

    props: React.useRef<any>(undefined),

    promise: {
      resolve: React.useRef<any>(undefined),
      reject: React.useRef<any>(undefined)
    }
  };

  refs.props.current = props;

  const open = React.useCallback((value?: IConfirmOpen): Promise<any> => {
    if (!openModal) {
      refs.modal.current = { ...value };

      // Defaults
      refs.modal.current.name = value?.name !== undefined ? value?.name : 'Confirmation';
      refs.modal.current.description = value?.description !== undefined ? value?.description : 'Are you sure you want to proceed?';

      if (refs.modal.current.buttons?.negative?.text === undefined) setObjectValue(refs.modal.current, 'buttons.negative.text', '');

      if (refs.modal.current.buttons?.positive?.text === undefined) setObjectValue(refs.modal.current, 'buttons.positive.text', '');

      refs.modal.current.buttons.negative.text = value?.buttons?.negative?.text !== undefined ? value?.buttons?.negative?.text : 'Cancel';
      refs.modal.current.buttons.positive.text = value?.buttons?.positive?.text !== undefined ? value?.buttons?.positive?.text : 'Confirm';

      refs.modal.current.throwError = value?.throwError !== undefined ? value.throwError : refs.props.current.throwError;

      const promise = new Promise((resolve: any, reject: any) => {
        refs.promise.resolve.current = resolve;
        refs.promise.reject.current = reject;
      });

      setOpenModal(true);

      if (is('function', onOpen)) onOpen();

      return promise;
    }
  }, [openModal, onOpen]);

  const close = React.useCallback((confirm = false) => {
    if (openModal) {
      setOpenModal(false);

      if (is('function', onClose)) onClose();

      // Resolve or reject
      if (confirm) refs.promise.resolve.current?.(confirm);
      else !refs.modal.current.throwError ? refs.promise.resolve.current?.(false) : refs.promise.reject.current?.();

      refs.promise.resolve.current = undefined;
      refs.promise.reject.current = undefined;
    }
  }, [openModal, onClose]);

  const {
    name,
    description,

    buttons,

    throwError: throwError_,

    ButtonNegativeProps,
    ButtonPositiveProps,

    modal,

    ...otherModal
  } = (refs.modal.current || {});

  // Add to the value
  refs.value.current.open = open;

  refs.value.current.close = close;

  return (
    <ConfirmContext.Provider value={refs.value.current}>
      {children}

      <Modal
        ref={ref}

        open={openModal}

        onClose={close}

        SurfaceProps={{
          tonal: true,
          color: 'primary',

          className: classNames([
            classes.surface
          ])
        }}

        className={classNames([
          staticClassName('Confirm', theme) && [
            `amaui-Confirm-root`
          ],

          className,
          classes.root
        ])}

        {...other}

        {...otherModal}
      >
        {is('function', modal) ?
          modal({ resolve: refs.promise.resolve.current, reject: refs.promise.reject.current }) :
          (<>
            {name !== false && (
              <ModalHeader>
                <ModalTitle
                  version='h3'

                  weight={400}
                >
                  {name || 'Confirmation'}
                </ModalTitle>
              </ModalHeader>
            )}

            <ModalMain>
              <ModalText
                version='b1'

                weight={200}
              >
                {description !== undefined ? description : 'Are you sure you want to proceed?'}
              </ModalText>
            </ModalMain>

            <ModalFooter>
              <Button
                version='text'

                color='inherit'

                tonal

                onClick={() => close(false)}

                {...ButtonNegativeProps}
              >
                {buttons?.negative?.text !== undefined ? buttons?.negative?.text : 'Cancel'}
              </Button>

              <Button
                version='text'

                color='inherit'

                tonal

                onClick={() => close(true)}

                {...ButtonPositiveProps}
              >
                {buttons?.positive?.text !== undefined ? buttons?.positive?.text : 'Confirm'}
              </Button>
            </ModalFooter>
          </>)
        }
      </Modal>
    </ConfirmContext.Provider>
  );
});

Confirm.displayName = 'amaui-Confirm';

export default Confirm;
