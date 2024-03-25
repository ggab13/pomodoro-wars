import React, { useEffect, useState } from 'react';

import { addScore, auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function PomodoroTimer() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <button onClick={() => addScore(2)}>Add score to {user.email}</button>
      ) : (
        'fasz'
      )}
    </div>
  );
}

export default PomodoroTimer;
