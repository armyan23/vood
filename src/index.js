import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// function func(num) {
//   for(let i = 0; i < week.length; i++){
//     if(num%7 == i && week[i-1]) console.log(week[i-1])
//     else if(num % 7 == i && num != 0) console.log( week.at(-1))
//   }
//   if(num==0) console.log('Error')

// } 

// func()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
