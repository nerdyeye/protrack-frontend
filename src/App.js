import { Routes } from 'react-router-dom';
import './App.css';
import {pri500, } from './components/Colors'
import {Button} from './components/Buttons'
import { BigParagraph, HeadingOne, HeadingTwo, Paragraph } from './components/Text';

function App() {
  return (
    <div>
      <HeadingOne style={{color:pri500}}> Protrack Project</HeadingOne>
      <HeadingTwo>sample</HeadingTwo>
      <BigParagraph>my paragraph <Button  color="primary" size="large">my button</Button> </BigParagraph>
      <Paragraph>small text</Paragraph>
      <Routes>

      </Routes>
      
    </div>
  );
}

export default App;
