import { useState, useEffect, Fragment, memo } from 'react';
import { Alert } from 'react-bootstrap';
import AlertStyler from './index.style';
import MESSAGE from '../../constants/message.js';

const defaultAlert = { title: MESSAGE.DEFAULT_ALERT_TITLE, body: MESSAGE.DEFAULT_ALERT_BODY };

function AlertModal({ alertContent = defaultAlert, alertTrigger = false }) {
  const [show, setShow] = useState(false);
  const { title, body } = alertContent;

  useEffect(() => setShow(alertTrigger), [alertTrigger]);

  return (
    <Fragment>
      {show ? (
        <AlertStyler variant="danger">
          <Alert.Heading>{title}</Alert.Heading>
          <p>{body}</p>
        </AlertStyler>
      ) : null}
    </Fragment>
  );
}

export default memo(AlertModal);
