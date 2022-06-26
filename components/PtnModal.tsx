import { Component, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Button, Card, Modal } from "preact-bulma";

import "bulma/css/bulma.min.css";

const LOGSEQ_UI_CHANGED = "ui:visible:changed";
type Status = "WAITING";

function PtnModal() {
  console.log("ptn log --- PtnModal");

  const [status, setStatus] = useState<Status>("WAITING");

  const [modalOpen, setModalOpen] = useState(true);
  const [numCount, setNumCount] = useState(0);

  useEffect(() => {
    const handler = async ({ visible }: any) => {
      setModalOpen(visible);
    };
    logseq.on(LOGSEQ_UI_CHANGED, handler);
    return () => {
      logseq.off(LOGSEQ_UI_CHANGED, handler);
    };
  }, []);

  return (
    <div>
      <Modal.Card title="ptn modal" active={modalOpen} onClose={() => logseq.hideMainUI()}>
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
