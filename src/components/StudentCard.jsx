
import './StudentCard.css';
import { useState } from 'react';

function StudentCard(props) {

  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="student-card">

      <img
        src={props.photo}
        alt={`Photo de ${props.nom}`}
        className="student-photo"
      />

      <h1>Fiche étudiant</h1>

      <p>
        <strong>Nom & Prénom :</strong> {props.nom}
      </p>

      {coordonneesVisibles && (
        <>
          <p>
            <strong>Email :</strong> {props.email}
          </p>

          <p>
            <strong>Téléphone :</strong> {props.telephone}
          </p>
        </>
      )}

      <p>
        <strong>Filière :</strong> {props.filiere}
      </p>

      <p>
        <strong>Année :</strong> {props.annee}
      </p>

      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>

      <p>
        <strong>Ville :</strong> {props.ville}
      </p>

      <div className="student-actions">

        <button
          className="coordinates-button"
          onClick={basculerCoordonnees}
        >
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <a
          className="contact-button"
          href={`mailto:${props.email}`}
        >
          Contacter
        </a>

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
