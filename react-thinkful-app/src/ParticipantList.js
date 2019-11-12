import React from 'react';

export default function participantList( props) {

  return (
    <section> className = 'listParticipants' >
      <header className = 'listHeader ' >
        const {participants} = this.props;
        {props.participants.map((participants) =>
          key={participants.id}
          name={participants.name}
          avatar={participants.avatar}
          inSession={participants.inSession}
          onStage={participants.onStage}
        )}

  )
}