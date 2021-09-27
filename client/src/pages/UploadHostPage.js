import React from 'react';
import { useRecoilValue } from 'recoil';
import { showSuccessState } from 'atoms/atoms';
import UploadHostInput from 'components/UploadHostInput/UploadHostInput';
import UploadSuccess from 'components/UploadSuccess/UploadSuccess';

const UploadHostPage = () => {
  const showSuccess = useRecoilValue(showSuccessState);
  return (
    <>
      {showSuccess && <UploadSuccess />}
      {!showSuccess && <UploadHostInput title="This is title!" />}
    </>
  );
};

export default UploadHostPage;
