import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://github.com/luanaxcardoso/skills-build-applications-w-copilot-agent-mode/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title h4 mb-4 text-primary">Leaderboard</h2>
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Nome</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.name}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
