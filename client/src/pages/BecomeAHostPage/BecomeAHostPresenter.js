import React from 'react';
import { Row } from 'antd';
import { host } from 'utils/constants';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import SuccessBox from 'components/SuccessBox/SuccessBox';
import Inputs from 'components/Inputs/Inputs';
import InformationBox from 'components/InformationBox/InformationBox';

function BecomeAHostPresenter({
  ShowSuccess,
  onNameChange,
  onEmailChange,
  onSelectChange,
  onSubmit,
}) {
  const { title, img } = host;

  return (
    <>
      <Row type="flex">
        <BreadCrumb title={title} img={img} />

        {ShowSuccess && <SuccessBox />}
        {!ShowSuccess && (
          <Inputs
            page={host}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onSelectChange={onSelectChange}
            onSubmit={onSubmit}
          />
        )}
      </Row>
      <InformationBox page={host} />
    </>
  );
}

export default BecomeAHostPresenter;
