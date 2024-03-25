import PomodoroTimer from '../pomodoro/PomodoroTimer';
import ScoreTable from '../scoretable/ScoreTable';
import { MainStyled } from './Main.styled';

function Main() {
  return (
    <MainStyled>
      <PomodoroTimer></PomodoroTimer>
      <ScoreTable></ScoreTable>
    </MainStyled>
  );
}

export default Main;
