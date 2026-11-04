
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';
import { useState } from "react";

function App() {

  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "Emna Nasri",
      email: "emna@gmail.com",
      telephone: "12345678",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Groupe 2",
      ville: "Gafsa",
      photo: "/emna.jpg"
    },
    {
      id: 2,
      nom: "Slim Boubaker",
      email: "slim@gmail.com",
      telephone: "20111222",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Groupe 1",
      ville: "Tunis",
      photo: "/slim.jpg"
    },
    {
      id: 3,
      nom: "Sarra Trabelsi",
      email: "sarra@gmail.com",
      telephone: "22123456",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Groupe 3",
      ville: "Sousse",
      photo: "/sara.jpg"
    }
  ]);

  const [recherche, setRecherche] = useState("");

  // AJOUTER UN ETUDIANT
  function ajouterEtudiant() {
  const nom = prompt("Entrez le nom et prénom de l'étudiant :");

  if (nom === null || nom.trim() === "") {
    return;
  }

  const nomImage = nom.trim().split(" ")[0];

  const nouvelEtudiant = {
    id: Date.now(),
    nom: nom,
    email: `${nomImage.toLowerCase()}@gmail.com`,
    telephone: "44444444",
    filiere: "GLSI",
    annee: "2ème année",
    groupe: "Groupe 1",
    ville: "Sfax",
    photo: `/${nomImage}.jpg`
  };

  setEtudiants([...etudiants, nouvelEtudiant]);
}

  // SUPPRIMER UN ETUDIANT
  function supprimerEtudiant(id) {

    setEtudiants(anciens =>
      anciens.filter(etudiant => etudiant.id !== id)
    );

  }

  // MODIFIER TOUTES LES INFORMATIONS
  function modifierEtudiant(id) {

    const etudiant = etudiants.find(e => e.id === id);

    if (!etudiant) return;

    const nouveauNom = prompt("Nom et prénom :", etudiant.nom);
    if (nouveauNom === null) return;

    const nouvelEmail = prompt("Email :", etudiant.email);
    if (nouvelEmail === null) return;

    const nouveauTelephone = prompt("Téléphone :", etudiant.telephone);
    if (nouveauTelephone === null) return;

    const nouvelleFiliere = prompt("Filière :", etudiant.filiere);
    if (nouvelleFiliere === null) return;

    const nouvelleAnnee = prompt("Année d'étude :", etudiant.annee);
    if (nouvelleAnnee === null) return;

    const nouveauGroupe = prompt("Groupe :", etudiant.groupe);
    if (nouveauGroupe === null) return;

    const nouvelleVille = prompt("Ville :", etudiant.ville);
    if (nouvelleVille === null) return;

    const nouvellePhoto = prompt("Photo :", etudiant.photo);
    if (nouvellePhoto === null) return;

    setEtudiants(anciens =>
      anciens.map(e =>
        e.id === id
          ? {
              ...e,
              nom: nouveauNom.trim(),
              email: nouvelEmail.trim(),
              telephone: nouveauTelephone.trim(),
              filiere: nouvelleFiliere.trim(),
              annee: nouvelleAnnee.trim(),
              groupe: nouveauGroupe.trim(),
              ville: nouvelleVille.trim(),
              photo: nouvellePhoto.trim()
            }
          : e
      )
    );

  }

  // RECHERCHE DANS TOUS LES CHAMPS
  const etudiantsFiltres = etudiants.filter(etudiant => {

    const texte = [
      etudiant.nom,
      etudiant.email,
      etudiant.telephone,
      etudiant.filiere,
      etudiant.annee,
      etudiant.groupe,
      etudiant.ville
    ].join(" ").toLowerCase();

    return texte.includes(recherche.toLowerCase().trim());

  });

  return (
    <div className="page">

      <Header />
      <Navbar />

      <div className="actions" id="d">
        <button onClick={ajouterEtudiant}>
          + Ajouter un étudiant
        </button>
      </div>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Rechercher un étudiant..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      <div id="etudiants" className="students-list">

        {etudiantsFiltres.map(etudiant => (

          <StudentCard
            key={etudiant.id}
            photo={etudiant.photo}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            annee={etudiant.annee}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            onEdit={() => modifierEtudiant(etudiant.id)}
            onDelete={() => supprimerEtudiant(etudiant.id)}
          />

        ))}

        {etudiantsFiltres.length === 0 && (
          <p className="no-results">
            Aucun étudiant trouvé.
          </p>
        )}

      </div>

      <Footer />

    </div>
  );
}

export default App;
