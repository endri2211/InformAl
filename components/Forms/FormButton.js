import React from 'react';
import { useFormikContext } from 'formik';

import AppButton1 from '../AppButton1';

export default function FormButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton1 title={title} onPress={handleSubmit} />;
}
