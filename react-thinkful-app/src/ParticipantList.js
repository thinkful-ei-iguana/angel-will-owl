import React from "react";
import participants from "./participants";

function ParticipantList() {
  return (
    //You should interate through the participants object and render to the dom
    <div className="Participant-List">
      <h1>IM A LIST CHECK ME OUT!</h1>
    </div>
  );
}

export default ParticipantList;

// return (
//   <section> className = 'listParticipants' >
//     <header className = 'listHeader ' >
//       const {participants} = this.props;
//       {props.participants.map((participants) =>
//         key={participants.id}
//         name={participants.name}
//         avatar={participants.avatar}
//         inSession={participants.inSession}
//         onStage={participants.onStage}
//       )}

// )
