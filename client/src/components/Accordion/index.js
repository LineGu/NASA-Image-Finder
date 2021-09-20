import { useState, Fragment, memo } from 'react';
import { Accordion as Acc } from 'react-bootstrap';
import ArrowButton from '../ArrowButton/index';

function Accordion({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <ArrowButton up={open} onClick={() => setOpen(!open)} />
      <Acc.Collapse in={open}>{children}</Acc.Collapse>
    </Fragment>
  );
}

export default memo(Accordion);
