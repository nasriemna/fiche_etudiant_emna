
/*import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';
import { useState } from "react";

//import ya3ni njibou haja men fichier ekher bech nesta3mlouha fi fichier App.jsx
function App() { //Fi React App hiya le composant principal eli yjamma3 les autres composants

    const [etudiants, setEtudiants] = useState([ //useState t5allina n5aznou des données w ki yetbaddlou, React ya3mel mise à jour de l'affichage automatiquement
        //ex:const [age, setAge] = useState(20);
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

    const [recherche, setRecherche] = useState("");//valeur initiale vide.

    // AJOUTER UN ETUDIANT
    function ajouterEtudiant() {
      const nom = prompt("Entrez le nom et prénom de l'étudiant :");
      //l'utilisateur 3mal Annuler
      if (nom === null || nom.trim() === "") { //Hné nesta3mlou if bech net2akdou elli l'utilisateur d5al esm s7i7
        return;           //l'utilisateur 5alla el champ feragh
      }//to93ed l'execution ama to5rej ml fonction
      //[0]:le 1ere element
      const nomImage = nom.trim().split(" ")[0];    //trim():Tna7i les espaces zeydin men début w fin du texte(supprimer les espaces)
      //split():diviser le texte selon les espaces
      //ex:Emna Nasri → ["Emna", "Nasri"] → Emna
      const nouvelEtudiant = {
        id: Date.now(),
        nom: nom,
        email: `${nomImage.toLowerCase()}@gmail.com`, //${...} : permet d'insérer une variable dans une chaîne de caractères
        telephone: "44444444",
        filiere: "GLSI",
        annee: "2ème année",
        groupe: "Groupe 1",
        ville: "Sfax",
        photo: `/${nomImage}.jpg`
      };
  
      setEtudiants([...etudiants, nouvelEtudiant]);
      //setEtudiants : mise à jour de la liste.
      //...etudiants : copie les anciens étudiants.
      //nouvelEtudiant : ajoute le nouvel étudiant.
    }
function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
        id: Date.now(),
        ...nouvelEtudiant
    };

    setEtudiants([
        ...etudiants,
        etudiantAvecId
    ]);
}
// SUPPRIMER UN ETUDIANT
function supprimerEtudiant(id) {

    setEtudiants(etudiants =>
        etudiants.filter(etudiant => etudiant.id !== id)  //filter:parcourir le tab et crée un nouveau tab qui repond a une cas
        //map:dour 3la koul element w koul elemnt tbadlou
    );
    //setEtudiants() : mise à jour de la liste
    //etudiants => : fonction fléchée, anciens représente l'ancienne liste
    //filter() : ta3mel filtre 3al tableau
    //etudiant.id !== id : t5alli ken les étudiants eli l'identifiant mte3hom différent de celui qu'on veut supprimer
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

export default App;*/
