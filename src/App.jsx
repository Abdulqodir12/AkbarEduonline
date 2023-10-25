import AboutTeacher from "./components/AboutTeacher";
import ArabTiliSection from "./components/ArabTiliSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionMundarija from "./components/SectionMundarija";
import VidSection from "./components/VidSection";

const App = () => {
    return (
        <div className='container'>
            <Header />
            <HeroSection />
            <AboutTeacher />
            <ArabTiliSection />
            <SectionMundarija />
            <VidSection/>
        </div>
    );
};

export default App;
