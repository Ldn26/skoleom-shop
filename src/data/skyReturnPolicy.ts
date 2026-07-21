/**
 * Politique de retour & de remboursement Skoleom — base de connaissance « Sky ».
 *
 * Ce module fournit à l'assistant Sky la logique de remboursement officielle de
 * Skoleom. Il est :
 *   1. envoyé au backend `/api/chat` comme contexte système (champ `context`) ;
 *   2. utilisé côté client comme réponse de repli déterministe lorsqu'une
 *      question porte clairement sur les retours / remboursements (afin que Sky
 *      réponde correctement même si le backend est indisponible).
 *
 * Toute demande d'assistance est dirigée vers la page Contact : /contact
 */

export const SUPPORT_CONTACT_PATH = '/contact';

/** Texte intégral de la politique (12 sections). */
export const SKOLEOM_RETURN_POLICY = `POLITIQUE DE RETOUR ET DE REMBOURSEMENT SKOLEOM

1. Objet
La présente politique définit les conditions de retour, d'annulation et de remboursement applicables aux achats réalisés via la plateforme Skoleom. Elle vise à garantir la transparence et la protection des consommateurs, dans le respect de la réglementation en vigueur.

2. Ventes directes Skoleom (droit de rétractation)
Pour les produits vendus directement par Skoleom, le client dispose d'un délai légal de rétractation de quatorze (14) jours à compter de la réception du produit, conformément à l'article L221-18 du Code de la consommation. Le produit doit être retourné dans son état d'origine, complet et non utilisé. Le remboursement intervient dans les meilleurs délais après réception et vérification du produit retourné.

3. Ventes par des marchands tiers
Pour les produits vendus par des marchands tiers via la plateforme, les conditions de retour et de remboursement sont celles définies par le marchand vendeur. Skoleom agit en tant qu'intermédiaire technique et met le client en relation avec le marchand concerné pour le traitement de sa demande.

4. Produits exclus du droit de retour
Certains produits ne peuvent faire l'objet d'un retour ou d'une rétractation, notamment : les biens personnalisés ou confectionnés sur mesure, les produits descellés ne pouvant être renvoyés pour des raisons d'hygiène ou de santé, les contenus numériques fournis sur support immatériel dont l'exécution a commencé avec l'accord du client, ainsi que les produits périssables.

5. Produits défectueux ou non conformes
En cas de produit défectueux, endommagé ou non conforme à la commande, le client bénéficie des garanties légales de conformité (articles L217-3 et suivants du Code de la consommation) et de la garantie contre les vices cachés (article 1641 du Code civil). Le produit concerné peut être réparé, remplacé ou remboursé, sans frais pour le client.

6. Frais de retour
Sauf produit défectueux, non conforme ou erreur imputable au vendeur, les frais de retour peuvent rester à la charge du client. Les modalités précises (étiquette de retour, transporteur, coût éventuel) sont communiquées lors du traitement de la demande de retour.

7. Prévention de la fraude
Skoleom se réserve le droit de vérifier la légitimité des demandes de retour et de remboursement afin de prévenir tout abus ou fraude. Les demandes manifestement frauduleuses ou répétées de manière abusive pourront être refusées.

8. Limitation du rôle de Skoleom
Pour les ventes réalisées par des marchands tiers, Skoleom n'est pas le vendeur et ne saurait être tenu responsable de l'exécution du contrat de vente. Sa responsabilité se limite à la fourniture de la plateforme et à la mise en relation entre le client et le marchand.

9. Contact et assistance
Toute demande de retour, d'annulation ou de remboursement doit être adressée via le service d'assistance indiqué sur la plateforme. Le client est invité à se munir de sa référence de commande pour faciliter le traitement de sa demande.

10. Droits légaux des consommateurs
La présente politique ne porte pas atteinte aux droits légaux dont bénéficie le consommateur, notamment le droit de rétractation (article L221-18 du Code de la consommation), la garantie légale de conformité (articles L217-3 et suivants) et la garantie contre les vices cachés (article 1641 du Code civil).

11. Contact
Pour toute question relative aux retours et remboursements, le client peut contacter l'assistance Skoleom via la page Contact (${SUPPORT_CONTACT_PATH}).

12. Modification de la politique
Skoleom se réserve le droit de modifier la présente politique à tout moment. La version applicable est celle en vigueur à la date de la commande.`;

/**
 * Détecte si une question utilisateur porte sur les retours / remboursements,
 * afin que Sky puisse répondre à partir de la politique officielle.
 */
export function isReturnPolicyQuery(input: string): boolean {
  const q = input.toLowerCase();
  const keywords = [
    'rembours', // remboursement, rembourser, remboursé
    'retour', // retour, retourner
    'rétract',
    'retract',
    'renvoy', // renvoyer
    'renvoi',
    'annul', // annulation, annuler
    'défectueu',
    'defectueu',
    'non conforme',
    'vice cach',
    'garantie',
    'refund',
    'return',
    'money back',
    'réttrac',
  ];
  return keywords.some((k) => q.includes(k));
}

/**
 * Réponse déterministe (repli) de Sky pour une question de remboursement.
 * Reste concise et renvoie systématiquement vers /contact.
 */
export function getReturnPolicyAnswer(): string {
  return [
    "Voici l'essentiel de la politique de retour et de remboursement Skoleom :",
    '',
    '• Ventes directes Skoleom : droit de rétractation de 14 jours à compter de la réception (art. L221-18), produit retourné neuf et complet.',
    "• Ventes par des marchands tiers : ce sont les conditions du marchand qui s'appliquent ; Skoleom agit comme intermédiaire et vous met en relation avec lui.",
    '• Produit défectueux ou non conforme : réparation, remplacement ou remboursement sans frais, au titre des garanties légales (art. L217-3 et 1641).',
    "• Produits exclus : biens personnalisés, produits descellés pour raisons d'hygiène, contenus numériques déjà exécutés, produits périssables.",
    '• Frais de retour : à votre charge sauf produit défectueux, non conforme ou erreur du vendeur.',
    '',
    `Pour lancer une demande de retour ou de remboursement, contactez l'assistance via la page Contact : ${SUPPORT_CONTACT_PATH} (munissez-vous de votre référence de commande).`,
  ].join('\n');
}
