function App() {
  const etudiant = {
    nom: "Nasri",
    prenom: "Emna",
    email: "nasriemna370@gmail.com",
    telephone: "56388464",
    filiere: "GLSI",
    annee: "2eme annee",
    groupe: "Groupe 2",
    ville: "Gafsa"
  };

  return (
    <div>
      <h1>Fiche Etudiant</h1>

      <p>Nom : {etudiant.nom}</p>
      <p>Prenom : {etudiant.prenom}</p>
      <p>Email : {etudiant.email}</p>
      <p>Telephone : {etudiant.telephone}</p>
      <p>Filiere : {etudiant.filiere}</p>
      <p>Annee d'etude : {etudiant.annee}</p>
      <p>Groupe : {etudiant.groupe}</p>
      <p>Ville : {etudiant.ville}</p>
    </div>
  );
}

export default App;
