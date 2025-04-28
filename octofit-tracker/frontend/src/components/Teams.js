import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://github.com/luanaxcardoso/skills-build-applications-w-copilot-agent-mode/api/teams')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title h4 mb-4 text-primary">Times</h2>
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Nome</th>
              <th>Membros</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
                <td>{team.members ? team.members.length : 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
