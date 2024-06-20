import type React from 'react';
import { useState } from 'react';

import { SakuraFall } from './SakuraFall';

export function Terminal() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState<React.ReactNode[]>([
    'Welcome! Please type the "help" command.',
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response: React.ReactNode = '';

    switch (input.trim()) {
      case 'hello':
        response = 'Hello, World!';
        break;
      case 'dog':
        response = '🐶';
        break;
      case 'help':
        response = (
          <>
            <p>Available commands:</p>
            <p>hello - Print "Hello, World!".</p>
            <p>dog - Print a dog emoji.</p>
            <p>clear - Clear the terminal and effects.</p>
            <p>help - Show this help message.</p>
            <p>sakura - This is spring in Japan.</p>
          </>
        );
        break;
      case 'clear':
        setResponses([]);
        setInput('');
        return;
      case 'sakura':
        response = <SakuraFall />;
        break;
      default:
        response = `"${input.trim()}" is not a command. Try typing the command "help".`;
        break;
    }

    setResponses((responses) => [...responses, `$ ${input}`, response]);
    setInput('');
  };

  return (
    <div className="h-[600px] w-full max-w-4xl overflow-auto bg-black p-4 font-mono text-white">
      {responses.map((res, idx) => (
        <div key={idx} className="mb-1">
          {res}
        </div>
      ))}
      <div className="flex">
        <span className="mr-2 text-tut-red">{'$'}</span>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="w-full border-none bg-transparent text-white focus:outline-none"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
}
