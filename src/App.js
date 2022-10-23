import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import {TextField, Fab} from "@material-ui/core";

function App() {
  const [messageList, setMessagesList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  },[])


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


  return (<div className='App'>

        <div className='dashboard'>
          {messageList.map((message, index) => (
              <div key={index} className={`styleMessages ${message.author === 'me' ? 'me' : 'bot'} ${index}`}>
                {message.text} <sup style={styleAuthor}>{message.author} </sup>
              </div>
          ))}
        </div>
        <div className='controlPanel' style={{margin: "10px 20px"}}>
          <TextField
              style={{margin: '0 20px'}}
              id="outlined-basic"
              label="Пиши здесь"
              variant="outlined"
              value={value}
              onChange={handleChange}
              autoFocus={true}
          />
          <Fab color="primary" aria-label="edit" onClick={handleSend}>Send</Fab>

        </div>
      </div>
  );
}

export default App;