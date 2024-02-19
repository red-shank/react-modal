import * as React from 'react';
import CheckFill from './checkFilled';
import CheckOut from './checkOutline';
import ErrorFill from './errorFilled';
import ErrorOut from './errorOutline';
import InfoOut from './infoWarningOutline';
import InfoFill from './infoWarningFilled';

const CheckFilled = () => {
  return (
    <span className="ant-icon" role="img" aria-label="check-filled">
      <CheckFill />
    </span>
  );
};

const CheckOutline = () => {
  return (
    <span className="ant-icon" role="img" aria-label="check-outline">
      <CheckOut />
    </span>
  );
};

const ErrorFilled = () => {
  return (
    <span className="ant-icon" role="img" aria-label="error-filled">
      <ErrorFill />
    </span>
  );
};

const ErrorOutline = () => {
  return (
    <span className="ant-icon" role="img" aria-label="error-outline">
      <ErrorOut />
    </span>
  );
};

const InfoFilled = () => {
  return (
    <span className="ant-icon" role="img" aria-label="info-filled">
      <InfoFill />
    </span>
  );
};

const InfoOutline = () => {
  return (
    <span className="ant-icon" role="img" aria-label="info-outline">
      <InfoOut />
    </span>
  );
};

const WarningFilled = () => {
  return (
    <span className="ant-icon" role="img" aria-label="warning-filled">
      <InfoFill />
    </span>
  );
};

const WarningOutline = () => {
  return (
    <span className="ant-icon" role="img" aria-label="warning-outline">
      <InfoOut />
    </span>
  );
};

export {
  CheckFilled,
  CheckOutline,
  ErrorFilled,
  ErrorOutline,
  InfoFilled,
  InfoOutline,
  WarningFilled,
  WarningOutline
};
