import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";
import { Testimonials } from "@/components/sections/Testimonials";

export default function PolitiqueConfidentialite() {
  usePageMeta("Politique de confidentialité", "Politique de confidentialité et de témoins (cookies) d'Esthétique Auto A.V, conforme à la Loi 25 du Québec.");
  return (
    <PageLayout showContact={false}>
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-4 leading-tight">
              POLITIQUE DE <span className="text-accent">CONFIDENTIALITÉ</span>
            </h1>
            <p className="text-gray-500 text-sm mb-10">
              Dernière mise à jour : 31 mars 2025
            </p>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-base leading-relaxed">

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">1. Introduction</h2>
                <p>
                  Esthétique Auto A.V (ci-après « nous », « notre » ou « l'entreprise »), située au 20 Rue de la Montagne, porte 2, Sainte-Claire, QC, s'engage à protéger la vie privée et les renseignements personnels de ses clients et visiteurs conformément à la <strong>Loi 25 — Loi modernisant des dispositions législatives en matière de protection des renseignements personnels</strong> du Québec, ainsi qu'à la <strong>Loi sur la protection des renseignements personnels dans le secteur privé</strong> (RLRQ, c. P-39.1).
                </p>
                <p>
                  La présente politique de confidentialité décrit les renseignements personnels que nous recueillons, les fins auxquelles nous les utilisons, les mesures de protection que nous appliquons et vos droits en vertu de la loi.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">2. Responsable de la protection des renseignements personnels</h2>
                <p>
                  Le responsable de la protection des renseignements personnels au sein de notre entreprise est :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Nom</strong> : Esthétique Auto A.V</li>
                  <li><strong>Courriel</strong> : <a href="mailto:esthetiquea.v@gmail.com" className="text-accent hover:underline">esthetiquea.v@gmail.com</a></li>
                  <li><strong>Téléphone</strong> : <a href="tel:4189578168" className="text-accent hover:underline">(418) 957-8168</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">3. Renseignements personnels recueillis</h2>
                <p>Nous pouvons recueillir les renseignements suivants :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse courriel</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations relatives à votre véhicule (marque, modèle, année)</li>
                  <li>Historique des services effectués</li>
                  <li>Données de navigation sur notre site Web (via les témoins / cookies)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">4. Fins de la collecte</h2>
                <p>Vos renseignements personnels sont recueillis et utilisés aux fins suivantes :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fournir et gérer nos services d'esthétique automobile</li>
                  <li>Communiquer avec vous concernant vos rendez-vous et suivis</li>
                  <li>Vous envoyer des promotions ou informations (avec votre consentement)</li>
                  <li>Améliorer notre site Web et l'expérience utilisateur</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">5. Consentement</h2>
                <p>
                  Conformément à la Loi 25, nous recueillons vos renseignements personnels uniquement avec votre consentement libre, éclairé et spécifique. Vous pouvez retirer votre consentement à tout moment en nous contactant. Le retrait du consentement n'affecte pas la légalité du traitement effectué avant ce retrait.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">6. Politique sur les témoins (cookies)</h2>
                <p>
                  Notre site Web utilise des témoins (cookies) pour améliorer votre expérience de navigation. Les témoins sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site.
                </p>
                <h3 className="text-lg font-display font-bold text-gray-900 mt-4 mb-2">Types de témoins utilisés :</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Témoins essentiels</strong> : Nécessaires au fonctionnement du site. Ils permettent la navigation et l'utilisation des fonctionnalités de base. Ces témoins ne requièrent pas votre consentement.
                  </li>
                  <li>
                    <strong>Témoins analytiques</strong> : Nous aident à comprendre comment les visiteurs interagissent avec notre site (pages visitées, temps passé, etc.) afin d'améliorer nos services. Ces données sont anonymisées.
                  </li>
                  <li>
                    <strong>Témoins de fonctionnalité</strong> : Permettent de mémoriser vos préférences (langue, région) pour une expérience personnalisée.
                  </li>
                </ul>
                <h3 className="text-lg font-display font-bold text-gray-900 mt-4 mb-2">Gestion des témoins :</h3>
                <p>
                  Vous pouvez à tout moment modifier vos préférences en matière de témoins ou les désactiver via les paramètres de votre navigateur. Veuillez noter que la désactivation de certains témoins peut affecter le fonctionnement du site.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">7. Communication et partage des renseignements</h2>
                <p>
                  Nous ne vendons, ne louons et ne partageons pas vos renseignements personnels avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Avec votre consentement explicite</li>
                  <li>Lorsqu'exigé par la loi ou une ordonnance judiciaire</li>
                  <li>Avec nos fournisseurs de services qui nous aident à exploiter notre entreprise (hébergement Web, outils de prise de rendez-vous), sous réserve d'ententes de confidentialité</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">8. Conservation des renseignements</h2>
                <p>
                  Vos renseignements personnels sont conservés uniquement pour la durée nécessaire aux fins pour lesquelles ils ont été recueillis, ou conformément aux exigences légales applicables. Une fois cette période écoulée, vos renseignements sont détruits de manière sécurisée.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">9. Mesures de sécurité</h2>
                <p>
                  Nous mettons en place des mesures de sécurité raisonnables pour protéger vos renseignements personnels contre la perte, le vol, l'accès non autorisé, la divulgation, la copie, l'utilisation ou la modification, notamment :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Connexion sécurisée (HTTPS / SSL)</li>
                  <li>Accès restreint aux renseignements personnels</li>
                  <li>Procédures de gestion des incidents de confidentialité</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">10. Vos droits</h2>
                <p>Conformément à la Loi 25, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Droit d'accès</strong> : Vous pouvez demander l'accès aux renseignements personnels que nous détenons à votre sujet.</li>
                  <li><strong>Droit de rectification</strong> : Vous pouvez demander la correction de renseignements inexacts ou incomplets.</li>
                  <li><strong>Droit de suppression</strong> : Vous pouvez demander la suppression de vos renseignements personnels lorsqu'ils ne sont plus nécessaires.</li>
                  <li><strong>Droit à la portabilité</strong> : Vous pouvez demander une copie de vos renseignements dans un format technologique structuré et couramment utilisé.</li>
                  <li><strong>Droit de retirer votre consentement</strong> : À tout moment, sans motif.</li>
                  <li><strong>Droit de déposer une plainte</strong> : Auprès de la Commission d'accès à l'information du Québec (CAI) si vous estimez que vos droits n'ont pas été respectés.</li>
                </ul>
                <p className="mt-3">
                  Pour exercer l'un de ces droits, veuillez nous contacter à <a href="mailto:esthetiquea.v@gmail.com" className="text-accent hover:underline">esthetiquea.v@gmail.com</a> ou au <a href="tel:4189578168" className="text-accent hover:underline">(418) 957-8168</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">11. Incident de confidentialité</h2>
                <p>
                  En cas d'incident de confidentialité présentant un risque sérieux de préjudice, nous nous engageons à aviser les personnes concernées et la Commission d'accès à l'information du Québec conformément aux exigences de la Loi 25.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">12. Modifications à la politique</h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter cette page régulièrement.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">13. Nous contacter</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité, la gestion de vos renseignements personnels ou l'utilisation des témoins sur notre site, veuillez communiquer avec nous :
                </p>
                <div className="bg-[#f9fafb] rounded-md p-6 mt-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Esthétique Auto A.V</p>
                  <p>20 Rue de la Montagne, porte 2, Sainte-Claire, QC</p>
                  <p>Téléphone : <a href="tel:4189578168" className="text-accent hover:underline">(418) 957-8168</a></p>
                  <p>Courriel : <a href="mailto:esthetiquea.v@gmail.com" className="text-accent hover:underline">esthetiquea.v@gmail.com</a></p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
      <Testimonials />
    </PageLayout>
  );
}
