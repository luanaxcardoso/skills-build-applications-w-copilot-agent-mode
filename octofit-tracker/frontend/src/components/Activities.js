import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://github.com/luanaxcardoso/skills-build-applications-w-copilot-agent-mode/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title h4 mb-4 text-primary">Atividades</h2>
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Duração</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.name}</td>
                <td>{activity.type}</td>
                <td>{activity.duration}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm">Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
