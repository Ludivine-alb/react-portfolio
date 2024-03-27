import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="accueil"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 mb-20 mt-20"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 mb-5 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px] rounded-lg profile-picture"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[500px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Ludivine {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
            Alberola
            </span>
          </p>
          <p className="mt-10 text-sm text-center">Développeuse web & conceptrice designer UX/UI passionnée et avide d'apprendre.</p>

          <p className="mt-10 mb-7 text-1xl font-playfair text-center md:text-start">
          Après avoir suivi une formation de cinq mois à la Wild Code School, j'ai fait un stage de six mois chez En Voiture Simone, la seule auto-école qui ne vous demande pas d'arriver au point A en voiture ! Cette expérience m'a permis de mettre en pratique mes connaissances, de découvrir de nouvelles technologies telles que Ruby On rails et surtout de travailler avec une équipe super sympa. C'est aussi pendant ce stage que j'ai découvert ma passion pour l'UX/UI design, grâce aux équipes produit et design. Je suis aujourd'hui à la recherche d'une alternance en UX/UI design afin de pouvoir exprimer ma créativité.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 mt-4"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Me contacter
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
