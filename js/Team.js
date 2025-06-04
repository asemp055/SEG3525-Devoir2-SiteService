import { team } from '../data/team'; // À créer

const Team = () => {
  return (
    <div className="team-page">
      <h1>Nos Artisanes des Tresses</h1>
      <div className="row">
        {team.map((coiff, index) => (
          <div key={index} className="col-md-6 mb-4">
            <img src={coiff.image} alt={coiff.name} className="img-fluid rounded-circle" />
            <h3>{coiff.name}</h3>
            <p>{coiff.bio}</p>
            <p>Spécialités : {coiff.specialties.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};