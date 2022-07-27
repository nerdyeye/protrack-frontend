import { Routes } from 'react-router-dom';
import './App.css';
import {pri500, } from './helpers/Colors';
import {Button} from './components/atoms/Buttons';
import { BigParagraph, HeadingOne, HeadingTwo, Paragraph } from './components/atoms/Text';
import {Input, PasswordInput} from './components/atoms/Inputs';
import Footer  from './components/molecules/Footer/Footer';


function App() {
  return (
    <div>
      <HeadingOne style={{color:pri500}}> Protrack Project</HeadingOne>
      <HeadingTwo>sample</HeadingTwo>
      <BigParagraph>my paragraph <Button type='text'  color="error" size="large">my buttn</Button> </BigParagraph>
      <Paragraph>small text</Paragraph>
      <Input placeholder="enter name" />
      <PasswordInput />
      <Footer />
      <Routes>

      </Routes>
      
    </div>
  );
}

export default App;
