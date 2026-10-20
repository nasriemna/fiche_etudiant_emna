
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

function App() {
  const etudiants = [
  {
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
    nom: "Sarra Trabelsi",
    email: "sarra@gmail.com",
    telephone: "22123456",
    filiere: "GLSI",
    annee: "2ème année",
    groupe: "Groupe 3",
    ville: "Sousse",
    photo: "/sara.jpg"
  }
];

  return (
    <div className="page">
      <Header />
      <Navbar />

      <div id="etudiants" className="students-list">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            photo={etudiant.photo}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            annee={etudiant.annee}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
