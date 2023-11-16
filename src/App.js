import 'assets/css/App.css';
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
} from 'react-router-dom';
import ScrollTop from 'components/include/ScrollTop';
import Wrapper from 'components/include/Wrapper';
import Signup from 'pages/Signup';
import Main from 'pages/Main';
import SignupStep1 from 'pages/SignupStep1';
import SignupStep2 from 'pages/SignupStep2';
import SignupStep3 from 'pages/SignupStep3';
import AddRoutine from 'pages/AddRoutine';
import AddActionNoneList from 'pages/AddActionNoneList';
import AddActionBeforeEdit from 'pages/AddActionBeforeEdit';
import AddActionAfterEdit from 'pages/AddActionAfterEdit';
import AddActionAfterEdit2 from 'pages/AddActionBeforeEdit2';
import Goal from 'pages/Goal';
import GoalNone from 'pages/GoalNone';
import GoalRmove from 'pages/GoalRemove';
import GoalInput from 'pages/GoalInput';
import ExecutionCheck from 'pages/ExecutionCheck';
import ExecutionTimer from 'pages/ExecutionTimer';
import ExecutionConfirm from 'pages/ExecutionConfirm';
import EndRoutine from 'pages/EndRoutine';
import WriteReview from 'pages/WriteReview';
import ResultInfo from 'pages/ResultInfo';
import DailyBoard from 'pages/DailyBoard';
import Home from 'pages/Home';
import Recommend from 'pages/Recommend';
import More from 'pages/More';
import MainNoneList from 'pages/MainNoneList';
import Search from 'pages/Search';
import { useEffect, useState } from 'react';
import DailyBoardRoutine from 'pages/DailyBoardRoutine';
import DailyBoardGoal from 'pages/DailyBoardGoal';
import Request from 'pages/Request';
import SearchTest from 'pages/SearchTest';

function App() {
  const [isRemovePadding, setIsRemovePadding] = useState(null);

  return (
    <BrowserRouter>
      <Wrapper isRemovePadding={isRemovePadding} setIsRemovePadding={setIsRemovePadding}>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/main" element={<Main />}  />
          <Route path="/main_none_list" element={<MainNoneList />}  />
          <Route path="/recommend" element={<Recommend />}  />
          <Route path="/signup" element={<Signup />}  />
          <Route path="/signup_step1" element={<SignupStep1 />}  />
          <Route path="/signup_step2" element={<SignupStep2 />}  />
          <Route path="/signup_step3" element={<SignupStep3 />}  />
          <Route path="/add_routine" element={<AddRoutine />}  />
          <Route path="/add_action_nonelist" element={<AddActionNoneList />}  />
          <Route path="/add_action_before_edit" element={<AddActionBeforeEdit />}  />
          <Route path="/add_action_after_edit" element={<AddActionAfterEdit />}  />
          <Route path="/add_action_before_edit2" element={<AddActionAfterEdit2 />}  />
          <Route path="/goal" element={<Goal />} />
          <Route path="/goal_none" element={<GoalNone />} />
          <Route path="/goal_remove" element={<GoalRmove />} />
          <Route path="/goal_input" element={<GoalInput />} />
          <Route path="/execution_check" element={<ExecutionCheck />}  />
          <Route path="/execution_timer" element={<ExecutionTimer />}  />
          <Route path="/execution_confirm" element={<ExecutionConfirm />}  />
          <Route path="/end_routine" element={<EndRoutine />}  />
          <Route path="/write_review" element={<WriteReview />}  />
          <Route path="/result_info" element={<ResultInfo />}  />
          <Route path="/search" element={<Search />}  />
          <Route path="/daily_board" element={<DailyBoard setIsRemovePadding={setIsRemovePadding} />}  />
          {/* <Route path="/daily_board_routine" element={<DailyBoardRoutine setIsRemovePadding={setIsRemovePadding} />}  />
          <Route path="/daily_board_goal" element={<DailyBoardGoal setIsRemovePadding={setIsRemovePadding} />}  /> */}
          <Route path="/more" element={<More />}  />
          <Route path="/request" element={<Request setIsRemovePadding={setIsRemovePadding} />}  />

          <Route path="/search_test" element={<SearchTest />}  />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;