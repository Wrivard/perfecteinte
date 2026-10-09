import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/layout/PageLayout";

const internalLinkClass = "font-semibold text-accent underline underline-offset-4 hover:text-accent-hover";
const externalLinkClass = "font-semibold text-accent underline underline-offset-4 hover:text-accent-hover";

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-gray-200 pb-8 last:border-0">
      <h2 className="mb-3 font-display text-xl font-bold text-gray-900 md:text-2xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

export default function PolitiqueConfidentialite() {
  usePageMeta(
    "Politique de confidentialité",
    "Découvrez quels renseignements Perfecteinte recueille par son formulaire de soumission, comment ils sont utilisés et les droits prévus par la loi québécoise.",
    "/politique-de-confidentialite",
  );

  return (
    <PageLayout>
      <section className="bg-white pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Protection de vos renseignements
            </p>
            <h1 className="mb-4 font-display text-[clamp(1.625rem,7.5vw,1.875rem)] font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              POLITIQUE DE <span className="text-accent">CONFIDENTIALITÉ</span>
            </h1>
            <p className="mb-8 text-sm text-gray-500">Dernière mise à jour : 6 octobre 2026</p>
            <p className="mb-6 text-base leading-relaxed text-gray-700">
              Cette politique explique comment Perfecteinte recueille, utilise, communique et conserve les
              renseignements personnels dans le cadre de son site et de ses demandes de soumission. Elle est
              établie en tenant compte de la Loi sur la protection des renseignements personnels dans le secteur
              privé du Québec, telle que modifiée notamment par la Loi 25.
            </p>
            <div className="mb-10 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
              Cette politique présente les pratiques de Perfecteinte à titre informatif et ne constitue pas un avis
              juridique. Pour une question juridique propre à votre situation, consultez un professionnel qualifié.
            </div>

            <div className="space-y-8">
              <PolicySection title="1. Responsable de la protection des renseignements personnels">
                <p>
                  <strong>Perfecteinte</strong>, située au 1950 Boulevard St-Jude, Alma (Québec), est responsable
                  des renseignements personnels qu’elle détient.
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Responsable : Frederic Goderre</li>
                  <li>
                    Courriel :{" "}
                    <a className={internalLinkClass} href="mailto:Perfecteinte@hotmail.ca">
                      Perfecteinte@hotmail.ca
                    </a>
                  </li>
                  <li>
                    Téléphone :{" "}
                    <a className={internalLinkClass} href="tel:4184503990">
                      (418) 450-3990
                    </a>
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="2. Renseignements recueillis">
                <p>Lorsque vous présentez une demande de soumission, le formulaire peut recueillir :</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Votre prénom, votre nom, votre adresse courriel et votre numéro de téléphone;</li>
                  <li>Le service demandé : PPF et/ou vitres teintées;</li>
                  <li>La marque, le modèle, l’année et, si vous la fournissez, la couleur du véhicule;</li>
                  <li>Le message facultatif que vous inscrivez.</li>
                </ul>
                <p>
                  Lors du chargement du site et de ressources externes, des renseignements techniques comme
                  l’adresse IP, le type de navigateur, l’appareil utilisé et l’heure de la demande peuvent aussi être
                  traités par les fournisseurs techniques concernés.
                </p>
              </PolicySection>

              <PolicySection title="3. Pourquoi nous utilisons ces renseignements">
                <p>Nous utilisons les renseignements nécessaires pour :</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Préparer et transmettre la soumission demandée;</li>
                  <li>Vous contacter au sujet de cette demande et répondre à vos questions;</li>
                  <li>Fournir le service que vous demandez et assurer le suivi lié à celui-ci;</li>
                  <li>Faire fonctionner et protéger le site et respecter nos obligations légales.</li>
                </ul>
                <p>
                  Le formulaire n’est pas une inscription à une liste promotionnelle. Nous n’utilisons pas les
                  renseignements transmis pour vous envoyer des promotions non sollicitées.
                </p>
              </PolicySection>

              <PolicySection title="4. Transmission et fournisseurs de services">
                <p>
                  Le site ne conserve pas actuellement les demandes de soumission dans une base de données qui lui
                  est propre. Lorsque vous envoyez le formulaire, les renseignements sont transmis au moyen de
                  l’API du site et de Resend afin d’envoyer une notification à Perfecteinte et une confirmation à
                  l’adresse courriel que vous avez fournie. Les courriels peuvent ensuite rester dans les boîtes de
                  réception de leurs destinataires.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Vercel</strong> fournit l’hébergement et l’exécution technique du site et de son
                    formulaire.
                  </li>
                  <li>
                    <strong>Resend</strong> transmet les courriels de demande de soumission et de confirmation.
                  </li>
                  <li>
                    <strong>Google</strong> fournit la carte Google Maps intégrée à la section Contact et les
                    polices Google Fonts utilisées sur le site. La carte est affichée automatiquement; son
                    chargement peut transmettre à Google des renseignements techniques sur votre connexion et
                    l’utilisation de la carte.
                  </li>
                </ul>
                <p>
                  Selon leur infrastructure, ces fournisseurs peuvent traiter ou héberger des renseignements à
                  l’extérieur du Québec. Toute communication de renseignements hors Québec est assujettie aux
                  exigences applicables de la loi québécoise, notamment à l’évaluation requise du niveau de
                  protection et aux garanties contractuelles applicables. Les fournisseurs traitent aussi les
                  renseignements selon leurs propres politiques :
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <a className={externalLinkClass} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Politique de confidentialité de Vercel
                    </a>
                  </li>
                  <li>
                    <a className={externalLinkClass} href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Politique de confidentialité de Resend
                    </a>
                  </li>
                  <li>
                    <a className={externalLinkClass} href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">
                      Politique de confidentialité de Google
                    </a>
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="5. Témoins, carte et mesures d’audience">
                <p>
                  Le site n’intègre actuellement aucun outil d’analyse d’audience ni pixel publicitaire. La carte
                  Google Maps et les polices Google Fonts sont des services externes chargés depuis Google; leur
                  fournisseur peut utiliser des témoins ou des identifiants selon ses propres paramètres et
                  politiques. La carte demeure intégrée à la section Contact et n’est pas masquée par un écran de
                  consentement.
                </p>
                <p>
                  Vous pouvez gérer les témoins à partir des paramètres de votre navigateur. Le blocage de
                  ressources tierces peut modifier l’affichage de la carte ou des polices.
                </p>
              </PolicySection>

              <PolicySection title="6. Communication et conservation">
                <p>
                  Nous ne vendons pas vos renseignements personnels. Nous les communiquons aux fournisseurs
                  indiqués ci-dessus lorsque cela est nécessaire au fonctionnement du site ou au traitement de votre
                  demande, ou lorsque la loi l’exige.
                </p>
                <p>
                  Nous conservons nos copies des renseignements uniquement aussi longtemps que nécessaire pour
                  traiter votre demande, fournir le service demandé et respecter les obligations légales
                  applicables. Lorsque ces fins sont accomplies, les renseignements sont détruits de façon
                  sécuritaire ou anonymisés lorsque la loi le permet.
                </p>
              </PolicySection>

              <PolicySection title="7. Protection des renseignements">
                <p>
                  Nous appliquons des mesures de sécurité adaptées à la nature des renseignements, notamment en
                  limitant leur accès aux personnes qui en ont besoin pour traiter la demande et en utilisant des
                  moyens de transmission sécurisés lorsque disponibles. Aucun moyen de transmission ou de stockage
                  ne peut toutefois garantir une sécurité absolue.
                </p>
              </PolicySection>

              <PolicySection title="8. Vos droits et demandes">
                <p>Vous pouvez communiquer avec le responsable pour demander, selon les conditions prévues par la loi :</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>L’accès aux renseignements personnels détenus à votre sujet et leur rectification;</li>
                  <li>Le retrait de votre consentement pour les utilisations qui reposent sur celui-ci;</li>
                  <li>
                    La portabilité des renseignements informatisés que vous avez fournis, dans un format
                    technologique structuré et couramment utilisé, lorsque ce droit s’applique;
                  </li>
                  <li>
                    La cessation de la diffusion ou la désindexation d’un renseignement, dans les circonstances
                    prévues par la loi.
                  </li>
                </ul>
                <p>
                  Pour présenter une demande, écrivez à{" "}
                  <a className={internalLinkClass} href="mailto:Perfecteinte@hotmail.ca">
                    Perfecteinte@hotmail.ca
                  </a>{" "}
                  en indiquant votre nom, un moyen de vous joindre et la nature de votre demande. Nous pourrions
                  demander des renseignements raisonnables pour vérifier votre identité. Si vous estimez que votre
                  demande n’a pas été traitée adéquatement, vous pouvez porter plainte auprès de la{" "}
                  <a className={externalLinkClass} href="https://www.cai.gouv.qc.ca/" target="_blank" rel="noopener noreferrer">
                    Commission d’accès à l’information du Québec
                  </a>
                  .
                </p>
              </PolicySection>

              <PolicySection title="9. Incident de confidentialité">
                <p>
                  Si un incident de confidentialité présente un risque de préjudice sérieux, les personnes
                  concernées et la Commission d’accès à l’information seront avisées conformément aux exigences
                  applicables.
                </p>
              </PolicySection>

              <PolicySection title="10. Modifications à cette politique">
                <p>
                  Cette politique peut être mise à jour pour refléter l’évolution de nos pratiques ou des exigences
                  légales. La date de la dernière mise à jour est indiquée au début de la page.
                </p>
              </PolicySection>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
