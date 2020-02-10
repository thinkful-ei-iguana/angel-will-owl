import React from 'react'

export default function Stage(props) {
  const onStage = [];
  for(let i = 0; i < props.users.length; i++) {
    if(props.user[i].onStage === true) {
      onStage.push(props.users[i])
    }
  }
  return (
    onStage.map(user => <)

  )
}
