import Wallet from "../pages/Wallet/Wallet";
import { createBrowserRouter } from "react-router-dom";
import VoterRegistration from "../pages/Voter/VoterRegistration";
import DisplayCandidate from "../pages/Candidate/displayCandidate";
import DisplayVoter from "../pages/Voter/DisplayVoter";
import CandidateRegistration from "../pages/Candidate/CandidateRegistration";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Electioncommision from "../pages/ElectionCommision/ElectionCommision";

export const routes = createBrowserRouter([
  { path: "/", element: <Wallet /> },

  {
    path: "/candidate-register",
    element: (
      <div>
        <NavigationBar />
        <CandidateRegistration />
      </div>
    ),
  },

  {
    path: "/voter-register",
    element: (
      <div>
        <NavigationBar />
        <VoterRegistration />
      </div>
    ),
  },

  {path: "election-commision", element: (
    <div>
      <NavigationBar />
      <Electioncommision />
    </div>
  ),},

  {
    path: "/candidate-list",
    element: (
      <div>
        <NavigationBar />
        <DisplayCandidate />
      </div>
    ),
  },
  {
    path: "/voter-list",
    element: (
      <div>
        <NavigationBar />
        <DisplayVoter />
      </div>
    ),
  },
]);
