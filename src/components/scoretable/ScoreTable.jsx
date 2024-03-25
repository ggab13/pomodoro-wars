import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { usersCol } from '../../config/firebase';

function ScoreTable() {
  const [scores, setScores] = useState(null);

  const getScores = async () => {
    const data = await getDocs(usersCol);
    setScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getScores();
  }, []);

  return <div>{scores?.map((post) => post.id)}</div>;
}

export default ScoreTable;
