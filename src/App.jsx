import SignUp from './components/SignUp/SignUp';
import ParthersCard from './components/PartnersCard/PartnersCard';
import OurTeam from './components/OurTeam/OurTeam';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/parthersCard" element={<ParthersCard />} />
        </Routes>
    );
}
