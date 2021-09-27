import React from 'react';
import { useRecoilValue } from 'recoil';
import { showSuccessState } from 'atoms/atoms';
import UploadEventInput from 'components/UploadEventInput';
import UploadSuccess from 'components/UploadSuccess';

function UploadEventPage() {
  const showSuccess = useRecoilValue(showSuccessState);
  return (
    <>
      {showSuccess && <UploadSuccess />}
      {!showSuccess && <UploadEventInput />}
    </>
  );
}

export default UploadEventPage;
