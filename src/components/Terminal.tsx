import type React from 'react';
import { useEffect, useRef, useState } from 'react';

import { SakuraFall } from './SakuraFall';

export function Terminal() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState<React.ReactNode[]>([
    'Welcome! Please enter the "help" command.',
  ]);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const endRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (!isInitialMount) {
      endRef.current?.scrollIntoView({ behavior: 'instant' });
    }
  };

  useEffect(() => {
    scrollToBottom();
    if (isInitialMount) {
      setIsInitialMount(false);
    }
  }, [isInitialMount, scrollToBottom]);

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
            <p>hello - Print Hello, World!</p>
            <p>dog - Print a dog emoji.</p>
            <p>clear - Clear the terminal.</p>
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
    <div className="bg-black text-white font-mono w-full max-w-4xl h-[600px] p-4 overflow-auto">
      {responses.map((res, idx) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={idx} className="mb-1">
          {res}
        </div>
      ))}
      <div ref={endRef} />
      <div className="flex">
        <span className="text-tut-red mr-2">{'$'}</span>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="bg-transparent border-none w-full focus:outline-none text-white"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
}
