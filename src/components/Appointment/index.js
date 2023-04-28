import React from "react";

import './styles.scss';

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const interview = props.interview;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(err => transition(ERROR_SAVE, true));

  };

  const remove = () => {
    transition(DELETE, true);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(err => transition(ERROR_DELETE, true));
  };

  return (
    <article className="appointment" data-testid="appointment" >
      <Header time={props.time} />
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      }
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETE && <Status message={"Deleting"} />}
      {mode === CONFIRM &&
        <Confirm
          message={"Are you sure to cancel this appointment?"}
          onCancel={back}
          onConfirm={remove}
        />
      }
      {mode === EDIT &&
        <Form
          student={interview.student}
          interviewerID={interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      }
      {mode === ERROR_SAVE &&
        <Error
          message={"Could not save the appointment"}
          onClose={back}
        />
      }
      {mode === ERROR_DELETE &&
        <Error
          message={"Could not cancel the appointment"}
          onClose={back}
        />
      }
    </article>
  );
}