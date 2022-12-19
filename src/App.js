
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const steps = [
  {
    id: '0',
    message: 'Welcome to Mtalkz 😄',
    trigger: '1',
  },
  {
    id: '1',
    message: 'I am Mr. Talkz 😎, your bot assistant. Nice to meet you.',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: " hi, how can I help you?",
    trigger: '4'
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Free Trail', trigger: '5' },
      { value: 2, label: 'Book Demo', trigger: '5' },
      { value: 3, label: 'About Our', trigger: '5' },
      { value: 4, label: 'eBook', trigger: '5' },
    ],

  },
  {
    id: '5',
    message: " Great ! May I know your name?",
    trigger: '6'
  },
  {
    id: '6',
    user: true,
    
  },

];

// Creating our own theme
const theme = {
  background: '#fffff',
  headerBgColor: '#233c94',
  headerFontSize: '16px',
  botBubbleColor: '#f1f1f1',
  headerFontColor: 'white',
  botFontColor: '#3a4b67',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  // botAvatar:'user.png',
  floating: true,
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Mtalkz"
          steps={steps}
          {...config}

        />
      </ThemeProvider>
    </div>
  );
}

export default App;