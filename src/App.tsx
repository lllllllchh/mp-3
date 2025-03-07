import './App.css'
import { styled } from 'styled-components'
import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Achievements from "./components/Achievements"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience.tsx"
import LeadershipExperience from "./components/LeadershipExperience"
import Projects from "./components/Projects"


const PageWrapper = styled.div`
    width: 90vw;
    margin: 0;
    background-color: #B1A89C;

    @media screen and (max-width:1000px) {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;}
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #C1B9B0;

    @media screen and (max-width:1000px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
`
function Root(){
  return(
    <PageWrapper>
        <Header/>
        <Container>
            <Nav/>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/Achievements"} element={<Achievements />}></Route>
                <Route path={"/Education"} element={<Education />}></Route>
                <Route path={"/Work_Experience"} element={<WorkExperience />}></Route>
                <Route path={"/Leadership_Experience"} element={<LeadershipExperience />}></Route>
                <Route path={"/Projects"} element={<Projects />}></Route>
              </Routes>
        </Container>
      <Footer/>
    </PageWrapper>
  );
}

const router = createBrowserRouter([{path: "*", Component: Root}])

export default function App(){
  return <RouterProvider router={ router}/>
}
