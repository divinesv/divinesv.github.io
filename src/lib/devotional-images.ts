export type DevotionalImage = {
  src: string;
  alt: string;
};

function createImage(src: string, alt: string): DevotionalImage {
  return { src, alt };
}

export function pickImage(images: readonly DevotionalImage[], index = 0): DevotionalImage {
  if (!images.length) {
    throw new Error('Cannot pick from an empty image pool.');
  }

  const safeIndex = ((index % images.length) + images.length) % images.length;
  return images[safeIndex];
}

export function rotateImages(images: readonly DevotionalImage[], offset = 0): DevotionalImage[] {
  return images.map((_, index) => pickImage(images, index + offset));
}

export const devotionalImagePools = {
  shiva: [
    createImage('/images/shiva.jpg', 'Shiva devotional image'),
    createImage('/images/shiva2.jpeg', 'Shiva sacred portrait'),
    createImage('/images/shiva5.jpg', 'Shiva devotional artwork'),
    createImage('/images/Kailash.jpg', 'Kailash mountain sacred image'),
  ],
  vishnu: [
    createImage('/images/venkateswara.jpg', 'Venkateswara devotional image'),
    createImage('/images/Venakateswara3.jpg', 'Venkateswara sacred portrait'),
    createImage('/images/Venkateswara2.jpg', 'Venkateswara temple devotional image'),
    createImage('/images/Venkateswara3.jpg', 'Venkateswara darshan image'),
    createImage('/images/Venkateswara4.jpg', 'Venkateswara shrine image'),
    createImage('/images/Venkateswara5.jpg', 'Venkateswara sacred portrait'),
    createImage('/images/Vishnu.JPG', 'Vishnu devotional image'),
    createImage('/images/Vishnu2.jpg', 'Vishnu sacred artwork'),
    createImage('/images/VishnuBg.png', 'Vishnu devotional background art'),
    createImage('/images/NarasimhaSwamy.jpg', 'Narasimha Swamy devotional image'),
    createImage('/images/Narasimha2.jpg', 'Narasimha temple devotional image'),
    createImage('/images/Narasimha3.jpg', 'Narasimha sacred portrait'),
    createImage('/images/Jagannatha.jpg', 'Jagannatha devotional image'),
    createImage('/images/Jagannatha2.jpg', 'Jagannatha sacred image'),
  ],
  devi: [
    createImage('/images/Devi.jpg', 'Devi devotional image'),
    createImage('/images/Devi2.jpg', 'Divine Mother devotional image'),
    createImage('/images/Devi3.jpg', 'Devi temple image'),
    createImage('/images/Devi4.jpg', 'Devi sacred portrait'),
    createImage('/images/devi5.jpg', 'Devi devotional artwork'),
    createImage('/images/Maa Durga.jpg', 'Maa Durga devotional image'),
  ],
  ganesha: [
    createImage('/images/ganesha.jpg', 'Ganesha devotional image'),
    createImage('/images/Ganesha3.jpg', 'Ganesha sacred portrait'),
    createImage('/images/Ganesha4.jpg', 'Ganesha temple devotional image'),
  ],
  hanuman: [
    createImage('/images/hanuman.jpg', 'Hanuman devotional image'),
    createImage('/images/hanuma.jpg', 'Hanuman sacred portrait'),
    createImage('/images/HanumanBg.webp', 'Hanuman devotional background art'),
  ],
  narasimha: [
    createImage('/images/NarasimhaSwamy.jpg', 'Narasimha Swamy devotional image'),
    createImage('/images/Narasimha2.jpg', 'Narasimha temple devotional image'),
    createImage('/images/Narasimha3.jpg', 'Narasimha sacred portrait'),
  ],
  rama: [
    createImage('/images/ramjanki.jpg', 'Rama and Sita devotional image'),
    createImage('/images/rama.jpg', 'Rama devotional image'),
    createImage('/images/Rama2.jpg', 'Rama sacred portrait'),
    createImage('/images/Rama3.jpg', 'Rama temple image'),
    createImage('/images/Rama4.jpg', 'Rama and bow devotional image'),
    createImage('/images/Rama6.jpg', 'Rama bhakti artwork'),
    createImage('/images/RamaBg.png', 'Rama devotional background art'),
  ],
  krishna: [
    createImage('/images/krishna.jpg', 'Krishna devotional image'),
    createImage('/images/Krishna.jpeg', 'Krishna sacred portrait'),
    createImage('/images/Krishna2.jpg', 'Krishna temple devotional image'),
    createImage('/images/Krishna3.jpg', 'Krishna bhakti artwork'),
    createImage('/images/krishna4.jpg', 'Krishna sacred image'),
    createImage('/images/krishna5.jpg', 'Krishna devotional portrait'),
    createImage('/images/Krishna6.jpg', 'Krishna temple image'),
    createImage('/images/Krishna7.jpg', 'Krishna devotional scene'),
    createImage('/images/Krishna8.jpg', 'Krishna luminous portrait'),
    createImage('/images/Krishna9.avif', 'Krishna sacred digital artwork'),
  ],
  ayyappa: [
    createImage('/images/Ayyappa.jpg', 'Ayyappa temple devotional image'),
    createImage('/images/Ayyappa2.jpg', 'Ayyappa sacred portrait'),
  ],
  jagannatha: [
    createImage('/images/Jagannatha.jpg', 'Jagannatha devotional image'),
    createImage('/images/Jagannatha2.jpg', 'Jagannatha sacred image'),
  ],
  gita: [
    createImage('/images/gita-arjuna.jpg', 'Arjuna in the Bhagavad Gita'),
    createImage('/images/gita-krishna.jpg', 'Krishna in the Bhagavad Gita'),
    createImage('/images/gita-vishwaroopam.jpg', 'Vishwaroopam scene from the Bhagavad Gita'),
    createImage('/images/bhagavadgita.jpg', 'Bhagavad Gita sacred image'),
    createImage('/images/bhagavadgita2.jpg', 'Bhagavad Gita study image'),
    createImage('/images/bhagavadgita3.jpg', 'Bhagavad Gita devotional artwork'),
    createImage('/images/vishwaroopam.jpg', 'Vishwaroopam sacred image'),
    createImage('/images/vishwaroopam2.jpg', 'Vishwaroopam cosmic artwork'),
  ],
  sages: [
    createImage('/images/AdiShankaracharya.jpg', 'Adi Shankaracharya portrait'),
    createImage('/images/Ashtavakra.jpg', 'Ashtavakra sage portrait'),
  ],
  temples: [
    createImage('/images/Temples.jpg', 'Temple architecture devotional image'),
    createImage('/images/Temple2.jpg', 'Sacred temple image'),
    createImage('/images/Temple3.jpg', 'Temple gopuram devotional image'),
    createImage('/images/Temple4.jpg', 'Temple courtyard sacred image'),
    createImage('/images/Temple5.jpg', 'Temple darshan image'),
    createImage('/images/Temple6.jpg', 'Temple festival image'),
    createImage('/images/Temple7.jpg', 'Temple lamp and shrine image'),
  ],
  nature: [
    createImage('/images/nature.jpg', 'Nature and pilgrimage landscape'),
    createImage('/images/cow.jpg', 'Sacred cow pastoral image'),
  ],
} as const;
