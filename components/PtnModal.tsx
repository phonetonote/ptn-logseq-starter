import { Component, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Button, Card, Modal } from "preact-bulma";

import "bulma/css/bulma.min.css";

function PtnModal() {
  console.log("ptn log --- PtnModal");

  const [modalOpen, setModalOpen] = useState(true);
  const [numCount, setNumCount] = useState(0);

  const modalClass = modalOpen ? "mdc-dialog--open" : "";

  const handleClose = () => {
    setModalOpen(false);
    logseq.hideMainUI();
  };

  useEffect(() => {
    const eventName = "ui:visible:changed";
    const handler = async ({ visible }: any) => {
      setModalOpen(visible);
    };
    logseq.on(eventName, handler);
    return () => {
      logseq.off(eventName, handler);
    };
  }, []);

  return (
    <div>
      <Modal.Card title="ptn modal" active={modalOpen} onClose={() => handleClose()}>
        <Modal.CardBody>
          <Button outlined onClick={() => setNumCount(numCount + 1)}>
            this button has been clicked {numCount} times
          </Button>
        </Modal.CardBody>
      </Modal.Card>
    </div>
  );
}

export default PtnModal;
