import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
      <section id="skills" className=" pb-24">
        {/* HEADER AND IMAGE SECTION */}
        <div className="md:flex md:justify-between md:gap-16 mt-20">
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-3xl mb-5">
              
              HARDS & SOFTS <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-2/3" />
            <p className="mt-7 mb-7 text-md">
            <strong>Back-end</strong> -> Php/Symfony - Ruby on Rails - mySql  
            postgreSql - NodeJs.
            <br/>
            <strong>Front-end</strong> -> Javascript/React - HTML - CSS - Twig Bootstrap - Tailwind CSS.
            <br/>
            <strong>Versioning</strong> -> Git/Github.
            <br/>
            <strong>Extras</strong> -> Méthode Scrum, Visual Studio Code, RubyMine, Jira, Trello, Figma, Canva, Procreate,  Slack.
            </p>
          </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <span class="hidden"><img alt="skills" className="display:none" src="assets/skills-image.png" /></span>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-2xl">01</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
              Créativité, Curiosité & Humour
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            De nature créative et curieuse, j'aime fondamentalement établir des connexions entre les choses, mon souhait de devenir développeuse fullstack est en adéquation avec ma personnalité et me pousse à aller hors de ma zone de confort pour y arriver. 
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-2xl">02</p>
              <p className="font-playfair font-semibold text-2xl mt-1">
              Travail d'équipe, Bienveillance & Envie d'apprendre
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Pendant mes précédentes expériences professionnelles, j'ai pu décrouvir le travail d'équipe.
            Grâce à cette qualité mise en pratique j'ai pu apprendre plus rapidement, et partager de multiples connaissances avec mes collègues.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-2xl">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
              Persévérance & Autonomie
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Grâce à des équipes très présentes et formatrices j'ai pu me sentir à l'aise très rapidement sur des technologies que je ne connaissais pas et gagner en autonomie sur la réflexion et la résolution de problèmes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
