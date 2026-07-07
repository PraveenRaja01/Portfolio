import React, { useState, useEffect, useRef } from 'react';
import SoundManager from './SoundManager';

function Terminal() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const logsContainerRef = useRef(null);

  const initialBootLines = [
    'Initializing PraveenRaja.exe...',
    'System: C# & Unity compilers online.',
    'Doodle Army Module: LOADED',
    'Sci-fi Shooter Module: LOADED',
    'Database: Sync complete (Praveen Raja).',
    'Connection status: ONLINE',
    'Type "help" to view available terminal commands.'
  ];

  // Auto boot printout
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < initialBootLines.length) {
        setHistory((prev) => [...prev, { type: 'system', text: initialBootLines[currentLine] }]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of terminal logs locally (prevents page-level scroll shifts)
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    SoundManager.playClick();

    if (trimmed === '') return;

    if (trimmed === 'help') {
      response = [
        { type: 'output', text: 'Available commands:' },
        { type: 'output', text: '  help     - Show list of active shell commands' },
        { type: 'output', text: '  skills   - Render core programming skill metrics' },
        { type: 'output', text: '  projects - List published game titles and status' },
        { type: 'output', text: '  clear    - Flush the terminal log history' }
      ];
    } else if (trimmed === 'skills') {
      response = [
        { type: 'output', text: '========================================' },
        { type: 'output', text: '           TECHNICAL METRICS' },
        { type: 'output', text: '========================================' },
        { type: 'output', text: '  * Game Programmer          [████████░]' },
        { type: 'output', text: '  * Unity Engine & C#        [████████░]' },
        { type: 'output', text: '  * Java Development         [██████████]' },
        { type: 'output', text: '  * Game System Design       [████████░]' },
        { type: 'output', text: '  * Level Design             [████████░]' },
        { type: 'output', text: '  * Mirror in Unity          [████████░]' },
        { type: 'output', text: '  * State Machines           [████████░]' },
        { type: 'output', text: '  * Basic Design Patterns    [████████░]' },
        { type: 'output', text: '  * Procedural Animation     [████████░]' },
        { type: 'output', text: '  * Blender                  [████████░]' },
        { type: 'output', text: '========================================' }
      ];
    } else if (trimmed === 'projects') {
      response = [
        { type: 'output', text: 'PROJECT CATALOG:' },
        { type: 'output', text: '  1. Doodle Army Clone - Playable Apk' },
        { type: 'output', text: '  2. Sci-fi Shooter - Playable Demo' },
        { type: 'output', text: '  3. Upcoming Game Title - [IN DEVELOPMENT]' }
      ];
    } else if (trimmed === 'clear') {
      setHistory([]);
      return;
    } else {
      response = [
        { type: 'error', text: `Command not recognized: "${cmd}"` },
        { type: 'output', text: 'Type "help" for a list of valid terminal commands.' }
      ];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: `> ${cmd}` },
      ...response
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">praveenraja@game-dev:~</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-logs" ref={logsContainerRef}>
          {history.map((line, idx) => (
            <div key={idx} className={`terminal-line line-${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>
        <div className="terminal-input-row">
          <span className="terminal-prompt">&gt;</span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            aria-label="Terminal CLI input"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
