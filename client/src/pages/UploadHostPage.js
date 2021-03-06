import React from 'react';
import { useRecoilValue } from 'recoil';
import { showSuccessState } from 'atoms/atoms';
import UploadHostInput from 'components/UploadHostInput';
import UploadSuccess from 'components/UploadSuccess';

const UploadHostPage = () => {
  const showSuccess = useRecoilValue(showSuccessState);
  return (
    <>
      {showSuccess && <UploadSuccess />}
      {!showSuccess && <UploadHostInput />}
    </>
  );
};

export default UploadHostPage;
