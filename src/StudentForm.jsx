import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [annee, setAnnee] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom: nom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere,
      annee,
      groupe,
      ville,
      photo: image
    };

    onAjouterEtudiant(nouvelEtudiant);

    // Réinitialiser le formulaire
    setNom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnnee("");
    setGroupe("");
    setVille("");
    setImage("");
  }

  function handleImageChange(e) {
    const fichier = e.target.files[0];

    if (fichier) {
      const imageURL = URL.createObjectURL(fichier);
      setImage(imageURL);
    }
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <h2>Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom et prénom :</label>
        <input
          id="nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          id="telephone"
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>

        <select
          id="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">-- Choisir une filière --</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="SEM">SEM</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="annee">Année d'étude :</label>

        <select
          id="annee"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
          required
        >
          <option value="">-- Choisir l'année --</option>
          <option value="1ère année">1ère année</option>
          <option value="2ème année">2ème année</option>
          <option value="3ème année">3ème année</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>

        <select
          id="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        >
          <option value="">-- Choisir le groupe --</option>
          <option value="Groupe 1">Groupe 1</option>
          <option value="Groupe 2">Groupe 2</option>
          <option value="Groupe 3">Groupe 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>

        <input
          id="ville"
          type="text"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="photo">Photo :</label>

        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {image && (
        <img
          src={image}
          alt="Aperçu"
          className="preview-image"
        />
      )}

      <button type="submit">
        Ajouter
      </button>

    </form>
  );
}

export default StudentForm;