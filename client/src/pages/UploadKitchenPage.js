import React from 'react';
import { showSuccessState } from 'atoms/atoms';
import { useRecoilValue } from 'recoil';
import SuccessBox from 'components/SuccessBox/SuccessBox';
import UploadKitchenInput from 'components/UploadKitchenInput';

function UploadKitchenPage() {
  const showSuccess = useRecoilValue(showSuccessState);

  return (
    <>
      {showSuccess && <SuccessBox />}
      {!showSuccess && <UploadKitchenInput />}
    </>
  );
}

export default UploadKitchenPage;
