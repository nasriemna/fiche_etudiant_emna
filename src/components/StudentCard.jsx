
import './StudentCard.css';

function StudentCard(props) {
  return (
    <div className="student-card">

      <img
        src={props.photo}
        alt={`Photo de ${props.nom}`}
        className="student-photo"
      />

      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {props.nom}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.annee}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>

      <a
        className="contact-button"
        href={`mailto:${props.email}`}
      >
        Contacter
      </a>

      <div className="student-actions">

        <button
          className="edit-button"
          onClick={props.onEdit}
        >
          Modifier
        </button>

        <button
          className="delete-button"
          onClick={props.onDelete}
        >
          Supprimer
        </button>

      </div>

    </div>
  );
}

export default StudentCard;
