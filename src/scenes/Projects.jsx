import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, name, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-xl font-playfair">{title}</p>
        <p className="text-2xl font-playfair">{name}</p>
        <p className="text-1xl">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projets" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JETS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            DES INTERFACES UTILISATEUR ATTRAYANTES
          </div>
          <Project title="Projet 1" name="ClaquetteProject" description="Site statique sur le thème de l'écologie réalisé à l'aide de HTML/CSS. Création des maquettes grâce à Figma." />
          <Project title="Projet 2" name="The Hack'ademy" description="Site e-commerce, vente de formations en ligne en développement web pour un client fictif. HTML/CSS/PHP/Symfony/mySql." />

          {/* ROW 2 */}
          <Project title="Projet 3" name="CocktailProject" description="Projet de hackaton sur 2 jours, sur le thème de l'écologie, proposition de recettes de cocktails en fonction des fruits et légumes de saisons. HTML/CSS/PHP/Symfony/mySql."/>
          <Project title="" />
          <Project title="Projet 5" name="Liflio" description="Projet client réel. Résoudre le problème de la surconsommation de papier dans les boîtes aux lettres grâce à un QRcode, 
          permettant d'accéder à toutes les dernières promos près de soi. HTML/CSS/PHP/Symfony/mySql." />

          {/* ROW 3 */}
          <Project title="Projet 6" name="Apside" description="Projet de hackaton, pour l'entreprise Apside qui souhaitait faire développer son propre outil de collaboratif en interne. HTML/CSS/PHP/Symfony/mySql" />
          <Project title="Projet 7" name="Portfolio" description="Projet personnel, grâce auquel j'ai pu expérimenter des technologies comme Javascript et React plus en profondeur, découvertes pendant mon stage." />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
UNE EXPÉRIENCE UTILISATEUR FLUIDE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
