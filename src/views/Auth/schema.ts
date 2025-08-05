import * as Yup from 'yup';

export const schemaLogin = Yup.object().shape({
  pin: Yup.string()
    .length(6, 'PIN deve ter 6 dígitos')
    .required('PIN é obrigatório')
    .test(
      'no-sequence',
      'PIN não pode ser uma sequência (ex: 123456, 654321, 111111)',
      (value) => {
        if (!value) return false;
        if (/^(\d)\1+$/.test(value)) return false;
        if ('1234567890'.includes(value)) return false;
        if ('0987654321'.includes(value)) return false;
        return true;
      },
    ),
  confirmPin: Yup.string()
    .oneOf([Yup.ref('pin')], 'Os PINs não coincidem')
    .required('Confirmação do PIN é obrigatória'),
});
