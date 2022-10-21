import './App.css';
import React, {useState, useEffect} from 'react';

function App() { const [messageList, setMessagesList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  }


  const handleSend = () => {
    setMessagesList([...messageList, {text: value, author: 'me'}]);
    setValue('');
  }
  useEffect(() => {
    let timer;
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
      timer = setInterval(() => {
        setMessagesList([...messageList, {
          text: 'сообщение бота',
          author: 'bot'
        }]);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [messageList])

  const styleAuthor = {
    fontSize: 10,
    color: 'white'
  }


  return (
      <div className='App'>

        <div className='dashboard'>
          {messageList.map((message) => (
              <div className={`styleMessages ${message.author === 'me' ? 'me' : 'bot'}`}>
                {message.text} <sup style={styleAuthor}>{message.author} </sup>
              </div>
          ))}
        </div>
        <div className='controlPanel'>
          <input value={value} onChange={handleChange}/>
          <button onClick={handleSend}>Отправить</button>
        </div>
      </div>
  );
}

export default App;
